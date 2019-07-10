let grid = [[0, 0], [0, 1], [0, 2],
            [1, 0], [1, 1], [1, 2],
            [2, 0], [2, 1], [2, 2]];
const rows = 3;
const columns = 3;

const player1 = {
    wins: 0,
    symbol: 'X'
};
let player1Turn = true;

const player2 = {
    wins: 0,
    symbol: 'O'
};
let player2Turn = false;

let endGame = false;

console.log('INIT GRID');

for(let i = 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
        // if 0, then the square is available
        // if 1, then square is taken
        grid[i][j] = 0;
        console.log('Row: ' + (i + 1) + ' Col: ' + (j + 1) + ' | Set to empty');
    }
}

console.log('START GAME');

const r1c1 = document.getElementById('r1c1');
r1c1.addEventListener('click', (event) => {

});

const r1c2 = document.getElementById('r1c2');
r1c2.addEventListener('click', (event) => {

});

const r1c3 = document.getElementById('r1c3');
r1c3.addEventListener('click', (event) => {

});

const r2c1 = document.getElementById('r2c1');
r2c1.addEventListener('click', (event) => {
    if (player1Turn === true && grid[1][0] === 0) {
        r2c1.innerHTML = player1.symbol;
        grid[1][0] = 1;

        player1Turn = false;
        player2Turn = true;
    }
    if (player2Turn === true && grid[1][0] === 0) {
        r2c1.innerHTML = player2.symbol;
        grid[1][0] = 1;

        player2Turn = false;
        player1Turn = true;
    }
});

const r2c2 = document.getElementById('r2c2');
r2c2.addEventListener('click', (event) => {
    if (player1Turn === true && grid[1][1] === 0) {
        r2c2.innerHTML = player1.symbol;
        grid[1][1] = 1;

        player1Turn = false;
        player2Turn = true;
    }
    if (player2Turn === true && grid[1][1] === 0) {
        r2c2.innerHTML = player2.symbol;
        grid[1][1] = 1;

        player2Turn = false;
        player1Turn = true;
    }
});

const r2c3 = document.getElementById('r2c3');
r2c3.addEventListener('click', (event) => {
    if (player1Turn === true && grid[1][2] === 0) {
        r2c3.innerHTML = player1.symbol;
        grid[1][2] = 1;

        player1Turn = false;
        player2Turn = true;
    }
    if (player2Turn === true && grid[1][2] === 0) {
        r2c3.innerHTML = player2.symbol;
        grid[1][2] = 1;

        player2Turn = false;
        player1Turn = true;
    }
});

const r3c1 = document.getElementById('r3c1');
r3c1.addEventListener('click', (event) => {
    if (player1Turn === true && grid[2][0] === 0) {
        r3c1.innerHTML = player1.symbol;
        grid[2][0] = 1;

        player1Turn = false;
        player2Turn = true;
    }
    if (player2Turn === true && grid[2][0] === 0) {
        r3c1.innerHTML = player2.symbol;
        grid[2][0] = 1;

        player2Turn = false;
        player1Turn = true;
    }
});

const r3c2 = document.getElementById('r3c2');
r3c2.addEventListener('click', (event) => {
    if (player1Turn === true && grid[2][1] === 0) {
        r3c2.innerHTML = player1.symbol;
        grid[2][1] = 1;

        player1Turn = false;
        player2Turn = true;
    }
    if (player2Turn === true && grid[2][1] === 0) {
        r3c2.innerHTML = player2.symbol;
        grid[2][1] = 1;

        player2Turn = false;
        player1Turn = true;
    }
});

const r3c3 = document.getElementById('r3c3');
r3c3.addEventListener('click', (event) => {
    if (player1Turn === true && grid[2][2] === 0) {
        r3c3.innerHTML = player1.symbol;
        grid[2][2] = 1;

        player1Turn = false;
        player2Turn = true;
    }
    if (player2Turn === true && grid[2][2] === 0) {
        r3c3.innerHTML = player2.symbol;
        grid[2][2] = 1;

        player2Turn = false;
        player1Turn = true;
    }
});

// TODO: Under 100