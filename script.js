document.addEventListener('DOMContentLoaded', () => {
    const redBtn = document.getElementById('red-btn');
    const blueBtn = document.getElementById('blue-btn');
    const buttonContainer = document.getElementById('button-container');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    const restartBtn = document.getElementById('restart-btn');

    function play() {
        const isWinner = Math.random() < 0.5;
        
        buttonContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        if (isWinner) {
            resultMessage.textContent = '¡Has ganado!';
            resultMessage.className = 'win';
        } else {
            resultMessage.textContent = '¡Has perdido!';
            resultMessage.className = 'lose';
        }
    }

    redBtn.addEventListener('click', play);
    blueBtn.addEventListener('click', play);

    restartBtn.addEventListener('click', () => {
        resultContainer.classList.add('hidden');
        buttonContainer.classList.remove('hidden');
    });

    function createFootballs() {
        const background = document.createElement('div');
        background.id = 'football-background';
        document.body.appendChild(background);

        setInterval(() => {
            const football = document.createElement('div');
            football.classList.add('football');
            football.textContent = '⚽';
            
            football.style.left = Math.random() * 100 + 'vw';
            
            const size = Math.random() * 2 + 1;
            football.style.fontSize = size + 'rem';
            
            const duration = Math.random() * 5 + 5;
            football.style.animationDuration = duration + 's';
            
            background.appendChild(football);
            
            setTimeout(() => {
                football.remove();
            }, duration * 1000);
        }, 500);
    }

    createFootballs();
});
