let currentMode = 'paragraph';

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(mode));
    });
}

function formatText() {
    const input = document.getElementById("inputText").value;
    let formatted = '';

    if (currentMode === 'paragraph') {
        formatted = input
            .replace(/\s+/g, ' ')
            .replace(/([.!?])\s*(?=[A-Z])/g, "$1\n\n")
            .replace(/(\n{2,})/g, '\n\n')
            .trim();
    } else {
        formatted = input
            .replace(/\s+/g, ' ')
            .replace(/(\n{2,})/g, '\n')
            .split('\n')
            .map(line => line.trim())
            .join('\n')
            .trim();
    }

    const output = document.getElementById("output");
    output.innerText = formatted || "Hasil format akan muncul di sini...";
    output.classList.add('show');
    
    updateStats(formatted);
}

function resetText() {
    document.getElementById("inputText").value = '';
    document.getElementById("output").innerText = '';
    updateStats('');
    showNotification('🧹 Teks telah direset!');
}

function copyText() {
    const text = document.getElementById("output").innerText;
    navigator.clipboard.writeText(text).then(() => {
        showNotification('🎉 Teks berhasil disalin!');
    });
}

function updateStats(text) {
    document.getElementById('charCount').textContent = text.length;
    document.getElementById('wordCount').textContent = text.split(/\s+/).filter(w => w).length;
    document.getElementById('paraCount').textContent = currentMode === 'paragraph' ? 
        text.split('\n\n').filter(p => p).length : 
        text.split('\n').filter(p => p).length;
}

function showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    notif.style.position = 'fixed';
    notif.style.bottom = '20px';
    notif.style.left = '50%';
    notif.style.transform = 'translateX(-50%)';
    notif.style.background = 'rgba(255,255,255,0.15)';
    notif.style.color = 'white';
    notif.style.padding = '15px 30px';
    notif.style.borderRadius = '10px';
    notif.style.backdropFilter = 'blur(10px)';
    notif.style.animation = 'fadeUp 0.5s ease-out';
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.remove();
    }, 2000);
}
