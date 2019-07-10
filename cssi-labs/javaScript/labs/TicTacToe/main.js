console.log('Initialize variables');

let xSelected = []; // Squares selected by player X
let oSelected = []; // Squares selected by player O
let placeholder = []; // Placeholder for either player's selections
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

console.log('Start game');

function checkWin() {
    if (turn == 0) {
        placeholder = oSelected;
    } else {
        placeholder = xSelected;
    };

    for (let i = 0; i < winners.length; i++) {
        if (placeholder.includes(winners[i][0]) && placeholder.includes(winners[i][1]) && placeholder.includes(winners[i][2])) {
            if (placeholder == oSelected) {
                document.getElementById('winner').innerHTML = 'O is the winner!';
                console.log('O wins!');
            } else {
                document.getElementById('winner').innerHTML = 'X is the winner!';
                console.log('X wins!');
            };
        } else {
            if (xSelected.length + oSelected.length == 9) {
                document.getElementById('winner').innerHTML = 'Nobody wins!';
                console.log('Nobody wins!');
            };
        };
    }
};

function play() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById('sq' + i).addEventListener('click', (event) => {
            if (turn == 0) {
                event.target.innerHTML = 'O';
                oCount++;
                oSelected.push(i);
                if (oCount >= 3) {
                    checkWin();
                };

                turn = 1;
            } else {
                event.target.innerHTML = 'X';
                xCount++;
                xSelected.push(i);
                if (xCount >= 3) {
                    checkWin();
                };

                turn = 0;
            };
        });
    }
};

function restart() {
    document.querySelector('button').addEventListener('click', () => {
        location.reload()
    })
};

play();
restart();