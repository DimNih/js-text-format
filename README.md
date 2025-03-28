# js-text-format

## Deskripsi
`js-text-format` JavaScript yang digunakan untuk memformat teks dengan Merapihkan Text Dari Parad Dan Line Textnya. 


## Importan
isi ke file css

```bash
:root {
    --primary: #00f3ff;
    --secondary: #ff4d00;
    --accent: #ff00ff;
    --dark: #0a0a12;
    --background: linear-gradient(135deg, #0a0a1a 0%, #000000 100%);
    --glass: rgba(18, 18, 36, 0.25);
    --neon-shadow: 0 0 25px rgba(0, 243, 255, 0.2);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background);
    font-family: 'Space Mono', monospace;
    color: white;
    padding: 20px;
}

.container {
    background: var(--glass);
    backdrop-filter: blur(16px) saturate(180%);
    border-radius: 16px;
    padding: 2rem;
    width: 100%;
    max-width: 800px;
    border: 1px solid rgba(0, 243, 255, 0.1);
    box-shadow: var(--neon-shadow),
                inset 0 0 30px rgba(0, 243, 255, 0.05);
    transform: translateY(20px);
    opacity: 0;
    animation: fadeIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
    position: relative;
    overflow: hidden;
}

.container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg, 
        transparent 45%,
        rgba(0, 243, 255, 0.05) 50%,
        transparent 55%
    );
    transform: rotate(45deg);
    animation: scanline 20s linear infinite;
}

h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(0, 243, 255, 0.3);
    opacity: 0;
    animation: fadeIn 0.6s 0.4s forwards;
}

.input-wrapper {
    position: relative;
    margin: 2rem 0;
    opacity: 0;
    animation: fadeIn 0.6s 0.6s forwards;
}

textarea {
    width: 100%;
    height: 200px;
    padding: 1.5rem;
    font-size: 1.1rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 243, 255, 0.2);
    border-radius: 8px;
    color: white;
    resize: vertical;
    transition: all 0.3s ease;
    font-family: inherit;
    line-height: 1.6;
}

textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 30px rgba(0, 243, 255, 0.2);
}

.button-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
    opacity: 0;
    animation: fadeIn 0.6s 0.8s forwards;
}

button {
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: rgba(0, 243, 255, 0.1);
    color: var(--primary);
    border: 1px solid rgba(0, 243, 255, 0.2);
}

button:hover {
    background: rgba(0, 243, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 243, 255, 0.2);
}

button:active {
    transform: translateY(0);
}

.mode-selector {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-content: center;
}

.mode-btn {
    padding: 0.6rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgba(0, 243, 255, 0.05);
    color: rgba(255,255,255,0.8);
    border: 1px solid rgba(0, 243, 255, 0.1);
    position: relative;
}

.mode-btn.active {
    background: rgba(0, 243, 255, 0.15);
    color: var(--primary);
    border-color: var(--primary);
}

#output {
    width: 100%;
    margin-top: 2rem;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    color: white;
    white-space: pre-line;
    line-height: 1.6;
    border: 1px solid rgba(0, 243, 255, 0.1);
    opacity: 0;
    animation: fadeIn 0.6s 1s forwards;
}

.stats-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
    opacity: 0;
    animation: fadeIn 0.6s 1.2s forwards;
}

.stat-item {
    padding: 1.2rem;
    background: rgba(0, 243, 255, 0.05);
    border-radius: 8px;
    border: 1px solid rgba(0, 243, 255, 0.1);
    transition: transform 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-3px);
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.7);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scanline {
    0% { transform: rotate(45deg) translateY(-100%); }
    100% { transform: rotate(45deg) translateY(100%); }
}

@media (max-width: 768px) {
    .container {
        padding: 1.5rem;
        border-radius: 12px;
    }
    
    h2 {
        font-size: 2rem;
    }
    
    textarea {
        height: 150px;
        padding: 1rem;
    }
    
    .button-group {
        grid-template-columns: 1fr;
    }
    
    .stats-bar {
        grid-template-columns: 1fr;
    }
    
    .mode-selector {
        flex-direction: column;
    }
}

```
