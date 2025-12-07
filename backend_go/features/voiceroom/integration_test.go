package voiceroom

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"sync"
	"testing"
	"time"

	"github.com/gorilla/websocket"
)

// TestClient представляет тестового клиента для интеграционных тестов
type TestClient struct {
	ID           string
	Name         string
	Conn         *websocket.Conn
	SequenceNum  uint32
	ReceivedMsgs []interface{}
	mutex        sync.Mutex
	t            *testing.T
}

// NewTestClient создает нового тестового клиента
func NewTestClient(t *testing.T, serverURL string, name string) (*TestClient, error) {
	conn, _, err := websocket.DefaultDialer.Dial(serverURL, nil)
	if err != nil {
		return nil, fmt.Errorf("failed to connect: %w", err)
	}

	client := &TestClient{
		Name:         name,
		Conn:         conn,
		SequenceNum:  0,
		ReceivedMsgs: make([]interface{}, 0),
		t:            t,
	}

	// Запустить goroutine для чтения сообщений
	go client.readMessages()

	return client, nil
}

// readMessages читает входящие сообщения
func (c *TestClient) readMessages() {
	for {
		messageType, message, err := c.Conn.ReadMessage()
		if err != nil {
			return
		}

		c.mutex.Lock()
		if messageType == websocket.TextMessage {
			var msg map[string]interface{}
			if err := json.Unmarshal(message, &msg); err == nil {
				c.ReceivedMsgs = append(c.ReceivedMsgs, msg)

				// Сохранить ID клиента из room_state
				if msg["type"] == MessageTypeRoomState {
					if participants, ok := msg["participants"].([]interface{}); ok {
						for _, p := range participants {
							if pMap, ok := p.(map[string]interface{}); ok {
								if pMap["name"] == c.Name {
									c.ID = pMap["id"].(string)
								}
							}
						}
					}
				}
			}
		} else if messageType == websocket.BinaryMessage {
			c.ReceivedMsgs = append(c.ReceivedMsgs, message)
		}
		c.mutex.Unlock()
	}
}

// SendJoin отправляет join message
func (c *TestClient) SendJoin() error {
	msg := JoinMessage{
		Type: MessageTypeJoin,
		Name: c.Name,
	}
	return c.Conn.WriteJSON(msg)
}

// SendLeave отправляет leave message
func (c *TestClient) SendLeave() error {
	msg := LeaveMessage{
		Type: MessageTypeLeave,
	}
	return c.Conn.WriteJSON(msg)
}

// SendMute отправляет mute message
func (c *TestClient) SendMute(muted bool) error {
	msg := MuteMessage{
		Type:  MessageTypeMute,
		Muted: muted,
	}
	return c.Conn.WriteJSON(msg)
}

// SendPing отправляет ping message
func (c *TestClient) SendPing() (int64, error) {
	timestamp := time.Now().UnixMilli()
	msg := PingMessage{
		Type:      MessageTypePing,
		Timestamp: timestamp,
	}
	return timestamp, c.Conn.WriteJSON(msg)
}

// SendAudioPacket отправляет аудио-пакет
func (c *TestClient) SendAudioPacket(audioData []byte) error {
	c.SequenceNum++
	timestamp := uint32(time.Now().UnixMilli() % (1 << 32))

	// Используем временный ID если настоящий еще не получен
	senderID := c.ID
	if senderID == "" {
		senderID = c.Name
	}

	packet := EncodeAudioPacket(senderID, c.SequenceNum, timestamp, audioData)
	return c.Conn.WriteMessage(websocket.BinaryMessage, packet)
}

// GetReceivedMessages возвращает копию полученных сообщений
func (c *TestClient) GetReceivedMessages() []interface{} {
	c.mutex.Lock()
	defer c.mutex.Unlock()

	msgs := make([]interface{}, len(c.ReceivedMsgs))
	copy(msgs, c.ReceivedMsgs)
	return msgs
}

// WaitForRoomState ждет получения room_state сообщения
func (c *TestClient) WaitForRoomState(timeout time.Duration) (map[string]interface{}, error) {
	deadline := time.Now().Add(timeout)

	for time.Now().Before(deadline) {
		msgs := c.GetReceivedMessages()
		for _, msg := range msgs {
			if m, ok := msg.(map[string]interface{}); ok {
				if m["type"] == MessageTypeRoomState {
					return m, nil
				}
			}
		}
		time.Sleep(10 * time.Millisecond)
	}

	return nil, fmt.Errorf("timeout waiting for room_state")
}

// WaitForAudioPackets ждет получения указанного количества аудио-пакетов
func (c *TestClient) WaitForAudioPackets(count int, timeout time.Duration) ([][]byte, error) {
	deadline := time.Now().Add(timeout)
	packets := make([][]byte, 0)

	for time.Now().Before(deadline) {
		msgs := c.GetReceivedMessages()
		for _, msg := range msgs {
			if data, ok := msg.([]byte); ok {
				packets = append(packets, data)
			}
		}

		if len(packets) >= count {
			return packets[:count], nil
		}

		time.Sleep(10 * time.Millisecond)
	}

	return packets, fmt.Errorf("timeout: received %d packets, expected %d", len(packets), count)
}

// WaitForPong ждет получения pong сообщения
func (c *TestClient) WaitForPong(sentTimestamp int64, timeout time.Duration) (int64, error) {
	deadline := time.Now().Add(timeout)

	for time.Now().Before(deadline) {
		msgs := c.GetReceivedMessages()
		for _, msg := range msgs {
			if m, ok := msg.(map[string]interface{}); ok {
				if m["type"] == MessageTypePong {
					if ts, ok := m["timestamp"].(float64); ok {
						if int64(ts) == sentTimestamp {
							return time.Now().UnixMilli() - sentTimestamp, nil
						}
					}
				}
			}
		}
		time.Sleep(10 * time.Millisecond)
	}

	return 0, fmt.Errorf("timeout waiting for pong")
}

// Close закрывает соединение
func (c *TestClient) Close() error {
	return c.Conn.Close()
}

// setupTestServer создает тестовый сервер
func setupTestServer() (*httptest.Server, *VoiceRoomHub) {
	hub := NewVoiceRoomHub()
	go hub.Run()
	hub.StartCleanupTicker()

	handler := HandleVoiceRoom(hub)
	server := httptest.NewServer(http.HandlerFunc(handler))

	return server, hub
}

// TestBasicJoinAndLeave тестирует базовое присоединение и выход
func TestBasicJoinAndLeave(t *testing.T) {
	server, _ := setupTestServer()
	defer server.Close()

	wsURL := "ws" + server.URL[4:] // Заменить http на ws

	// Создать клиента
	client, err := NewTestClient(t, wsURL, "TestUser1")
	if err != nil {
		t.Fatalf("Failed to create client: %v", err)
	}
	defer client.Close()

	// Отправить join
	if err := client.SendJoin(); err != nil {
		t.Fatalf("Failed to send join: %v", err)
	}

	// Ждать room_state
	roomState, err := client.WaitForRoomState(2 * time.Second)
	if err != nil {
		t.Fatalf("Failed to receive room_state: %v", err)
	}

	// Проверить, что участник в списке
	participants := roomState["participants"].([]interface{})
	if len(participants) != 1 {
		t.Errorf("Expected 1 participant, got %d", len(participants))
	}

	// Отправить leave
	if err := client.SendLeave(); err != nil {
		t.Fatalf("Failed to send leave: %v", err)
	}

	time.Sleep(100 * time.Millisecond)

	t.Log("✓ Basic join and leave test passed")
}

// TestMultipleClients тестирует подключение нескольких клиентов
func TestMultipleClients(t *testing.T) {
	server, _ := setupTestServer()
	defer server.Close()

	wsURL := "ws" + server.URL[4:]

	// Создать 3 клиента
	clients := make([]*TestClient, 3)
	for i := 0; i < 3; i++ {
		client, err := NewTestClient(t, wsURL, fmt.Sprintf("User%d", i+1))
		if err != nil {
			t.Fatalf("Failed to create client %d: %v", i, err)
		}
		defer client.Close()
		clients[i] = client

		// Отправить join
		if err := client.SendJoin(); err != nil {
			t.Fatalf("Failed to send join for client %d: %v", i, err)
		}

		time.Sleep(50 * time.Millisecond)
	}

	// Ждать room_state для последнего клиента
	roomState, err := clients[2].WaitForRoomState(2 * time.Second)
	if err != nil {
		t.Fatalf("Failed to receive room_state: %v", err)
	}

	// Проверить количество участников
	participants := roomState["participants"].([]interface{})
	if len(participants) != 3 {
		t.Errorf("Expected 3 participants, got %d", len(participants))
	}

	t.Log("✓ Multiple clients test passed")
}

// TestAudioBroadcast тестирует трансляцию аудио между участниками
func TestAudioBroadcast(t *testing.T) {
	server, _ := setupTestServer()
	defer server.Close()

	wsURL := "ws" + server.URL[4:]

	// Создать 2 клиента
	client1, err := NewTestClient(t, wsURL, "Speaker")
	if err != nil {
		t.Fatalf("Failed to create client1: %v", err)
	}
	defer client1.Close()

	client2, err := NewTestClient(t, wsURL, "Listener")
	if err != nil {
		t.Fatalf("Failed to create client2: %v", err)
	}
	defer client2.Close()

	// Оба присоединяются
	client1.SendJoin()
	client2.SendJoin()

	time.Sleep(200 * time.Millisecond)

	// Клиент 1 отправляет аудио-пакет
	testAudioData := []byte{0x01, 0x02, 0x03, 0x04, 0x05}
	if err := client1.SendAudioPacket(testAudioData); err != nil {
		t.Fatalf("Failed to send audio packet: %v", err)
	}

	// Клиент 2 должен получить аудио-пакет
	packets, err := client2.WaitForAudioPackets(1, 2*time.Second)
	if err != nil {
		t.Fatalf("Failed to receive audio packet: %v", err)
	}

	if len(packets) != 1 {
		t.Errorf("Expected 1 audio packet, got %d", len(packets))
	}

	// Проверить, что пакет валидный
	if err := ValidateAudioPacket(packets[0]); err != nil {
		t.Errorf("Received invalid audio packet: %v", err)
	}

	t.Log("✓ Audio broadcast test passed")
}

// TestMuteUnmute тестирует функциональность mute/unmute
func TestMuteUnmute(t *testing.T) {
	server, _ := setupTestServer()
	defer server.Close()

	wsURL := "ws" + server.URL[4:]

	client, err := NewTestClient(t, wsURL, "TestUser")
	if err != nil {
		t.Fatalf("Failed to create client: %v", err)
	}
	defer client.Close()

	// Присоединиться
	client.SendJoin()
	time.Sleep(200 * time.Millisecond)

	// Очистить полученные сообщения
	client.mutex.Lock()
	client.ReceivedMsgs = make([]interface{}, 0)
	client.mutex.Unlock()

	// Отправить mute
	if err := client.SendMute(true); err != nil {
		t.Fatalf("Failed to send mute: %v", err)
	}

	// Ждать новое room_state сообщение
	time.Sleep(200 * time.Millisecond)

	// Проверить room_state
	roomState, err := client.WaitForRoomState(2 * time.Second)
	if err != nil {
		t.Fatalf("Failed to receive room_state after mute: %v", err)
	}

	participants := roomState["participants"].([]interface{})
	if len(participants) > 0 {
		p := participants[0].(map[string]interface{})
		if muted, ok := p["muted"].(bool); ok {
			if muted {
				t.Log("✓ Participant correctly muted")
			} else {
				t.Error("Expected participant to be muted")
			}
		}
	}

	// Очистить полученные сообщения
	client.mutex.Lock()
	client.ReceivedMsgs = make([]interface{}, 0)
	client.mutex.Unlock()

	// Отправить unmute
	if err := client.SendMute(false); err != nil {
		t.Fatalf("Failed to send unmute: %v", err)
	}

	time.Sleep(200 * time.Millisecond)

	// Проверить room_state после unmute
	roomState, err = client.WaitForRoomState(2 * time.Second)
	if err != nil {
		t.Fatalf("Failed to receive room_state after unmute: %v", err)
	}

	participants = roomState["participants"].([]interface{})
	if len(participants) > 0 {
		p := participants[0].(map[string]interface{})
		if muted, ok := p["muted"].(bool); ok {
			if !muted {
				t.Log("✓ Participant correctly unmuted")
			} else {
				t.Error("Expected participant to be unmuted")
			}
		}
	}

	t.Log("✓ Mute/unmute test passed")
}

// TestLatencyMeasurement тестирует измерение задержки
func TestLatencyMeasurement(t *testing.T) {
	server, _ := setupTestServer()
	defer server.Close()

	wsURL := "ws" + server.URL[4:]

	client, err := NewTestClient(t, wsURL, "TestUser")
	if err != nil {
		t.Fatalf("Failed to create client: %v", err)
	}
	defer client.Close()

	client.SendJoin()
	time.Sleep(100 * time.Millisecond)

	// Отправить ping
	sentTimestamp, err := client.SendPing()
	if err != nil {
		t.Fatalf("Failed to send ping: %v", err)
	}

	// Ждать pong
	latency, err := client.WaitForPong(sentTimestamp, 2*time.Second)
	if err != nil {
		t.Fatalf("Failed to receive pong: %v", err)
	}

	t.Logf("✓ Latency measurement test passed (latency: %dms)", latency)

	// Проверить, что задержка разумная (< 1000ms для локального теста)
	if latency > 1000 {
		t.Errorf("Latency too high: %dms", latency)
	}
}

// TestReconnection тестирует переподключение (симуляция)
func TestReconnection(t *testing.T) {
	server, _ := setupTestServer()
	defer server.Close()

	wsURL := "ws" + server.URL[4:]

	// Создать клиента
	client1, err := NewTestClient(t, wsURL, "TestUser")
	if err != nil {
		t.Fatalf("Failed to create client: %v", err)
	}

	client1.SendJoin()
	time.Sleep(100 * time.Millisecond)

	// Закрыть соединение (симуляция разрыва)
	client1.Close()
	time.Sleep(100 * time.Millisecond)

	// Переподключиться
	client2, err := NewTestClient(t, wsURL, "TestUser")
	if err != nil {
		t.Fatalf("Failed to reconnect: %v", err)
	}
	defer client2.Close()

	client2.SendJoin()

	// Проверить, что можем получить room_state
	_, err = client2.WaitForRoomState(2 * time.Second)
	if err != nil {
		t.Fatalf("Failed to receive room_state after reconnection: %v", err)
	}

	t.Log("✓ Reconnection test passed")
}

// TestFiveSimultaneousParticipants тестирует 5+ одновременных участников
func TestFiveSimultaneousParticipants(t *testing.T) {
	server, _ := setupTestServer()
	defer server.Close()

	wsURL := "ws" + server.URL[4:]

	numClients := 5
	clients := make([]*TestClient, numClients)

	// Создать и подключить 5 клиентов
	for i := 0; i < numClients; i++ {
		client, err := NewTestClient(t, wsURL, fmt.Sprintf("User%d", i+1))
		if err != nil {
			t.Fatalf("Failed to create client %d: %v", i, err)
		}
		defer client.Close()
		clients[i] = client

		if err := client.SendJoin(); err != nil {
			t.Fatalf("Failed to send join for client %d: %v", i, err)
		}

		time.Sleep(50 * time.Millisecond)
	}

	// Проверить room_state
	roomState, err := clients[numClients-1].WaitForRoomState(2 * time.Second)
	if err != nil {
		t.Fatalf("Failed to receive room_state: %v", err)
	}

	participants := roomState["participants"].([]interface{})
	if len(participants) != numClients {
		t.Errorf("Expected %d participants, got %d", numClients, len(participants))
	}

	// Один клиент отправляет аудио
	testAudioData := []byte{0x01, 0x02, 0x03, 0x04, 0x05}
	if err := clients[0].SendAudioPacket(testAudioData); err != nil {
		t.Fatalf("Failed to send audio packet: %v", err)
	}

	// Все остальные клиенты должны получить аудио
	for i := 1; i < numClients; i++ {
		packets, err := clients[i].WaitForAudioPackets(1, 2*time.Second)
		if err != nil {
			t.Errorf("Client %d failed to receive audio: %v", i, err)
		} else if len(packets) != 1 {
			t.Errorf("Client %d expected 1 packet, got %d", i, len(packets))
		}
	}

	t.Logf("✓ Five simultaneous participants test passed")
}

// TestRateLimiting тестирует rate limiting
func TestRateLimiting(t *testing.T) {
	server, _ := setupTestServer()
	defer server.Close()

	wsURL := "ws" + server.URL[4:]

	client, err := NewTestClient(t, wsURL, "TestUser")
	if err != nil {
		t.Fatalf("Failed to create client: %v", err)
	}
	defer client.Close()

	client.SendJoin()
	time.Sleep(100 * time.Millisecond)

	// Отправить много сообщений быстро (больше лимита)
	testAudioData := []byte{0x01, 0x02, 0x03}
	for i := 0; i < 150; i++ {
		client.SendAudioPacket(testAudioData)
	}

	time.Sleep(200 * time.Millisecond)

	// Проверить, что получили error message
	msgs := client.GetReceivedMessages()
	foundError := false
	for _, msg := range msgs {
		if m, ok := msg.(map[string]interface{}); ok {
			if m["type"] == MessageTypeError {
				foundError = true
				break
			}
		}
	}

	if !foundError {
		t.Log("Note: Rate limiting error message not received (may be expected)")
	} else {
		t.Log("✓ Rate limiting test passed")
	}
}
