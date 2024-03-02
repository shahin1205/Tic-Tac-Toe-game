let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function placeMarker(index) {
  if (!gameBoard[index]) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    if (checkWinner()) {
      alert(currentPlayer + ' wins!');
      resetGame();
    } else if (gameBoard.every(cell => cell !== '')) {
      alert('Draw!');
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winConditions.some(combination => {
    return combination.every(index => {
      return gameBoard[index] === currentPlayer;
    });
  });
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
