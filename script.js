const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + sender;
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    userInput.value = '';
    setTimeout(() => {
        appendMessage(getBotReply(text), 'bot');
    }, 700);
});

function getBotReply(userText) {
    if (userText.toLowerCase().includes('hello')) {
        return "Tane koine bolaivo";
    }
    if (userText.toLowerCase().includes('Hi')) {
            return "Tane koine bolaivo";
        }
    if (userText.toLowerCase().includes('Who is Varshil')) {
        return "Varshil is Daddy of Khush";
    }

    if (userText.toLowerCase().includes('who are you')) {
        return "Hu je hoi ee tare shu levadeva";
    }
    if (userText.toLowerCase().includes('bye')) {
        return "Vetino tha kai kaam nathi";
    }
    return "Haithe google karilene ";
}