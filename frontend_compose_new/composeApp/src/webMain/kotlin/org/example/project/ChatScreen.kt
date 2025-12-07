package org.example.project

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.text.selection.SelectionContainer
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.key.*
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.launch

@Composable
fun ChatScreen() {
    val viewModel = remember { ChatViewModel() }
    val messages by viewModel.messages.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()
    
    var author by remember { mutableStateOf(LocalStorage.getAuthor() ?: "") }
    var text by remember { mutableStateOf("") }
    var authorError by remember { mutableStateOf(false) }
    var textError by remember { mutableStateOf(false) }
    var quotedText by remember { mutableStateOf<String?>(null) }
    var editingMessageId by remember { mutableStateOf<Int?>(null) }
    
    val listState = rememberLazyListState()
    val coroutineScope = rememberCoroutineScope()
    
    // Функция отправки сообщения
    val sendMessage = {
        val isAuthorValid = author.isNotBlank()
        val isTextValid = text.isNotBlank()
        
        authorError = !isAuthorValid
        textError = !isTextValid
        
        if (isAuthorValid && isTextValid) {
            LocalStorage.saveAuthor(author)
            
            val finalText = if (quotedText != null) {
                "> $quotedText\n\n$text"
            } else {
                text
            }
            
            if (editingMessageId != null) {
                viewModel.editMessage(editingMessageId!!, finalText)
                editingMessageId = null
            } else {
                viewModel.sendMessage(author, finalText)
            }
            
            text = ""
            quotedText = null
            coroutineScope.launch {
                listState.animateScrollToItem(0)
            }
        }
    }
    
    // Подгрузка при прокрутке вверх
    LaunchedEffect(listState) {
        snapshotFlow { listState.firstVisibleItemIndex }
            .collect { index ->
                if (index == 0 && !isLoading) {
                    viewModel.loadMoreMessages()
                }
            }
    }
    
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        // Список сообщений
        LazyColumn(
            modifier = Modifier.weight(1f),
            state = listState,
            reverseLayout = true
        ) {
            items(messages) { message ->
                MessageItem(
                    message = message,
                    currentAuthor = author,
                    onReply = {
                        quotedText = message.text
                        editingMessageId = null
                        coroutineScope.launch {
                            // Прокрутка к форме ввода не нужна, она внизу
                        }
                    },
                    onReplyWithQuote = { selectedText ->
                        quotedText = selectedText
                        editingMessageId = null
                    },
                    onEdit = {
                        text = message.text
                        editingMessageId = message.id
                        quotedText = null
                    }
                )
            }
            
            if (isLoading) {
                item {
                    Box(
                        modifier = Modifier.fillMaxWidth().padding(16.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        CircularProgressIndicator()
                    }
                }
            }
        }
        
        Spacer(modifier = Modifier.height(16.dp))
        
        // Цитата (если есть)
        if (quotedText != null) {
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surfaceVariant
                )
            ) {
                Row(
                    modifier = Modifier.padding(8.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Цитата: ${quotedText!!.take(50)}${if (quotedText!!.length > 50) "..." else ""}",
                        style = MaterialTheme.typography.bodySmall,
                        modifier = Modifier.weight(1f)
                    )
                    IconButton(onClick = { quotedText = null }) {
                        Text("X")
                    }
                }
            }
            Spacer(modifier = Modifier.height(8.dp))
        }
        
        // Индикатор редактирования
        if (editingMessageId != null) {
            Text(
                text = "Редактирование сообщения",
                style = MaterialTheme.typography.labelMedium,
                color = MaterialTheme.colorScheme.primary
            )
            Spacer(modifier = Modifier.height(4.dp))
        }
        
        // Форма ввода
        // Поле Автор
        OutlinedTextField(
            value = author,
            onValueChange = { 
                author = it
                authorError = false
            },
            label = { Text("Автор") },
            modifier = Modifier.fillMaxWidth(),
            isError = authorError,
            supportingText = {
                if (authorError) {
                    Text(
                        text = "Укажите имя автора",
                        color = MaterialTheme.colorScheme.error
                    )
                }
            },
            singleLine = true,
            maxLines = 1
        )
        
        Spacer(modifier = Modifier.height(8.dp))
        
        // Поле Текст с кнопкой отправки
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalAlignment = Alignment.Bottom
        ) {
            Column(modifier = Modifier.weight(1f)) {
                OutlinedTextField(
                    value = text,
                    onValueChange = { 
                        text = it
                        textError = false
                    },
                    label = { Text("Текст сообщения") },
                    modifier = Modifier
                        .fillMaxWidth()
                        .onKeyEvent { keyEvent ->
                            if (keyEvent.type == KeyEventType.KeyDown &&
                                keyEvent.key == Key.Enter &&
                                keyEvent.isCtrlPressed) {
                                sendMessage()
                                true
                            } else {
                                false
                            }
                        },
                    minLines = 2,
                    maxLines = 6,
                    isError = textError,
                    supportingText = {
                        if (textError) {
                            Text(
                                text = "Введите текст сообщения",
                                color = MaterialTheme.colorScheme.error
                            )
                        }
                    }
                )
            }
            
            // Кнопки
            Column(
                verticalArrangement = Arrangement.spacedBy(8.dp),
                horizontalAlignment = Alignment.End
            ) {
                if (editingMessageId != null) {
                    Button(
                        onClick = {
                            text = ""
                            editingMessageId = null
                            quotedText = null
                        },
                        modifier = Modifier
                            .width(64.dp)
                            .height(40.dp),
                        contentPadding = PaddingValues(0.dp)
                    ) {
                        Text("X", style = MaterialTheme.typography.labelLarge)
                    }
                }
                
                Button(
                    onClick = sendMessage,
                    modifier = Modifier
                        .width(64.dp)
                        .height(56.dp),
                    contentPadding = PaddingValues(0.dp)
                ) {
                    Text(
                        text = if (editingMessageId != null) "Save" else "Send",
                        style = MaterialTheme.typography.labelLarge
                    )
                }
            }
        }
    }
}

@Composable
fun MessageItem(
    message: Message,
    currentAuthor: String,
    onReply: () -> Unit,
    onReplyWithQuote: (String) -> Unit,
    onEdit: () -> Unit
) {
    var expanded by remember { mutableStateOf(false) }
    var selectedText by remember { mutableStateOf<String?>(null) }
    
    val isMyMessage = message.author == currentAuthor
    
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 4.dp),
        horizontalArrangement = if (isMyMessage) Arrangement.End else Arrangement.Start
    ) {
        Card(
            modifier = Modifier
                .fillMaxWidth(if (isMyMessage) 0.85f else 1f)
        ) {
        Column(modifier = Modifier.padding(12.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = message.author,
                    style = MaterialTheme.typography.titleSmall,
                    color = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.weight(1f)
                )
                
                Box {
                    IconButton(onClick = { expanded = true }) {
                        Text("...")
                    }
                    
                    DropdownMenu(
                        expanded = expanded,
                        onDismissRequest = { expanded = false }
                    ) {
                        DropdownMenuItem(
                            text = { Text("Ответить") },
                            onClick = {
                                expanded = false
                                onReply()
                            }
                        )
                        
                        DropdownMenuItem(
                            text = { Text("Ответить с цитатой") },
                            onClick = {
                                expanded = false
                                val quote = selectedText ?: message.text
                                onReplyWithQuote(quote)
                            },
                            enabled = selectedText != null || true
                        )
                        
                        if (message.author == currentAuthor) {
                            DropdownMenuItem(
                                text = { Text("Редактировать") },
                                onClick = {
                                    expanded = false
                                    onEdit()
                                }
                            )
                        }
                    }
                }
            }
            
            Spacer(modifier = Modifier.height(4.dp))
            
            SelectionContainer {
                Text(
                    text = message.text,
                    style = MaterialTheme.typography.bodyMedium
                )
            }
            
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = message.timestamp,
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
        }
    }
}
