console.log('Initialize variables');

let xSelected = []; // Squares selected by player X
let oSelected = []; // Squares selected by player O
let xCount = 0; // Counts how many squares player X has selected
let oCount = 0; // Counts how many squares player O has selected
let winners = [ // Winning combinations
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

let turn = 0; // 0 = X, 1 = O

const score = {
    'X': 0,
    'O': 0
};

console.log('START GAME');

function checkWin() {

};

function play() {
    for(let i = 1; i <= 9; i++) {
        document.getElementById('sq' + i).addEventListener('click', (event) => {
            if(turn == 0) {
                event.target.innerHTML = 'O';
                oSelected.push(i);
                if(oCount >= 3) {
                   checkWin(); 
                };
    
                turn = 1;
            } else {
                event.target.innerHTML = 'X';
                xSelected.push(i);
                if(xCount >= 3) {
                    checkWin();
                };
    
                turn = 0;
            }
        });
    }
};

play();