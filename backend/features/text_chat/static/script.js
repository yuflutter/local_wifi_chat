function loadMessages() {
    fetch('/api/messages')
        .then(response => response.json())
        .then(messages => {
            const chatArea = document.getElementById('chatArea');
            chatArea.innerHTML = '';
            messages.forEach(msg => {
                const msgDiv = document.createElement('div');
                msgDiv.className = 'message';
                msgDiv.innerHTML = 
                    '<div class="message-author">' + escapeHtml(msg.author || 'Аноним') + '</div>' +
                    '<div class="message-text">' + escapeHtml(msg.text) + '</div>' +
                    '<div class="message-time">' + msg.timestamp + '</div>';
                chatArea.appendChild(msgDiv);
            });
            chatArea.scrollTop = chatArea.scrollHeight;
        })
        .catch(err => console.error('Ошибка загрузки сообщений:', err));
}

function autoResizeTextarea() {
    const messageInput = document.getElementById('messageInput');
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 200) + 'px';
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const authorInput = document.getElementById('authorInput');
    const text = messageInput.value.trim();
    const author = authorInput.value.trim() || 'Аноним';

    if (!text) return;

    fetch('/api/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text: text, author: author})
    })
    .then(() => {
        messageInput.value = '';
        autoResizeTextarea();
        loadMessages();
    })
    .catch(err => console.error('Ошибка отправки:', err));
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Автоматическое изменение размера textarea
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('input', autoResizeTextarea);
        messageInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
});

// Обновление сообщений каждые 2 секунды
loadMessages();
setInterval(loadMessages, 2000);

// Отпечаток устройства через канвас (нужно встроить во фронтенд)
function getCanvasFingerprint() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Рисуем тестовый контент
  ctx.textBaseline = 'top';
  ctx.font = '16px "Arial"';
  ctx.fillText('Hello, World!', 2, 2);
  ctx.fillRect(0, 0, 100, 100);
  
  // Получаем данные изображения
  const dataURL = canvas.toDataURL();
  
  // Генерируем хеш
  return sha256(dataURL);
}
