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
});
