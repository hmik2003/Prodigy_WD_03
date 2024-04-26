document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const restartBtn = document.getElementById('restartBtn');
    const playerText = document.getElementById('playerText');
    const board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;

    const checkWinner = () => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return null;
    };


    const handleCellClick = (index) => {
        if (board[index] === '' && gameActive) {
            board[index] = currentPlayer;
            renderBoard();
            const winner = checkWinner();
            if (winner) {
                playerText.textContent = `${winner} wins!`;
                gameActive = false;
            } else if (!board.includes('')) {
                playerText.textContent = 'It\'s a draw!';
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                playerText.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    };


const renderBoard = () => {
    gameBoard.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('box');
        if (cell === 'X') {
            cellElement.classList.add('x');
        } else if (cell === 'O') {
            cellElement.classList.add('o');
        }
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        gameBoard.appendChild(cellElement);
    });
};


    const restartGame = () => {
        board.fill('');
        currentPlayer = 'X';
        gameActive = true;
        playerText.textContent = `Player ${currentPlayer}'s turn`;
        renderBoard();
    };
    
    restartBtn.addEventListener('click', restartGame);
    renderBoard();
});
document.addEventListener('DOMContentLoaded', () => {
    const modeButtons = document.getElementById('modeButtons');
    const vsAiBtn = document.getElementById('vsAiBtn');
    const vsHumanBtn = document.getElementById('vsHumanBtn');
   let homeBtn = document.getElementById('HomeBtn');
    vsAiBtn.addEventListener('click', () => {
   
        window.location.href = "main.html";
    });

    vsHumanBtn.addEventListener('click', () => {
     
        window.location.href = "main.html";
    });
   
});
