let board = document.getElementById('game-wrapper')
let btn = document.getElementById('reset-btn')
let squares = []

for (let i = 0; i < 9; i++) {
    const sq = document.createElement("div");
    sq.addEventListener('click', () => {
        sq.innerHTML = "X";
    })
    board.append(sq)
    squares.push(sq)
}
console.log(getComputerChoice)
function getComputerChoice() {
    let computerChoice = -1;
    while(squares[computerChoice] != 'X'){
        const max = 8;
        const min = 0;
        computerChoice = Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(computerChoice)
    return computerChoice;
  }
  


