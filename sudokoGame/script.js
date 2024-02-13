const N = 9;
let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// Function to create the Sudoku table
function createTable() {
    let table = document.getElementById("sudoku");
    for (let i = 0; i < N; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < N; j++) {
            let cell = document.createElement("td");
            let input = document.createElement("input");
            input.type = "text";
            input.value = board[i][j] === 0 ? "" : board[i][j];
            input.setAttribute("maxlength", "1");
            input.oninput = function() {
                if (!isValidInput(this.value)) {
                    this.value = "";
                }
            };
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Function to check if input is valid (a single digit or empty)
function isValidInput(value) {
    return /^\d?$/.test(value);  // Explanation provided in previous message
}

// Function to solve Sudoku
function solveSudoku() {
    let solved = solveSudokuRec(board);
    if (solved) {
        updateBoard(board);
    } else {
        alert("Failed to solve Sudoku.");
    }
}

// Recursive function to solve Sudoku
function solveSudokuRec(board) {
    let [row, col] = findEmptyCell(board);
    if (row === -1 && col === -1) {
        return true; // Sudoku solved
    }

    for (let num = 1; num <= N; num++) {
        if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudokuRec(board)) {
                return true;
            }
            board[row][col] = 0; // Backtrack
        }
    }
    return false; // No solution found
}

// Function to find an empty cell in Sudoku
function findEmptyCell(board) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === 0) {
                return [i, j];
            }
        }
    }
    return [-1, -1]; // No empty cell found
}

// Function to check if it's safe to place a number in a given position
function isSafe(board, row, col, num) {
    return !usedInRow(board, row, num) &&
           !usedInColumn(board, col, num) &&
           !usedInBox(board, row - row % 3, col - col % 3, num);
}

// Function to check if a number is used in a row
function usedInRow(board, row, num) {
    for (let i = 0; i < N; i++) {
        if (board[row][i] === num) {
            return true;
        }
    }
    return false;
}

// Function to check if a number is used in a column
function usedInColumn(board, col, num) {
    for (let i = 0; i < N; i++) {
        if (board[i][col] === num) {
            return true;
        }
    }
    return false;
}

// Function to check if a number is used in a 3x3 box
function usedInBox(board, startRow, startCol, num) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return true;
            }
        }
    }
    return false;
}

// Function to update the Sudoku board with the solved puzzle
function updateBoard(board) {
    let table = document.getElementById("sudoku");
    let cells = table.getElementsByTagName("input");
    let idx = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            cells[idx].value = board[i][j];
            idx++;
        }
    }
}

// Create the Sudoku table
createTable();
