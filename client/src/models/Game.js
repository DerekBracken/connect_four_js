import winningArrays from './WinningArrays.js';
import Cell from './Cell.js';

class Game {
    constructor(players = [1, 2], board = []) {
        this.players = players
        this.board = board
        this.currentPlayer = players[0]
    }

    checkWin() {
        //some logic that checks if the game has been won
        for (let i = 0; i < winningArrays.length; i++) {
            const cell1 = this.board[winningArrays[i][0]]
            const cell2 = this.board[winningArrays[i][1]]
            const cell3 = this.board[winningArrays[i][2]]
            const cell4 = this.board[winningArrays[i][3]]

            // // check those squares to see if they all have the class of player-one
            if (cell1.player === 'player-1' &&
                cell2.player === 'player-1' &&
                cell3.player === 'player-1' &&
                cell4.player === 'player-1'
            ){
                // add winner useState to stop game?
                console.log("Player One Wins!");
            }
            // // check those squares to see if they all have the class of player-two
            if (cell1.player === 'player-2' &&
                cell2.player === 'player-2' &&
                cell3.player === 'player-2' &&
                cell4.player === 'player-2'
            ){
                // add winner useState to stop game?
                console.log("Player Two Wins!");
            }

        }

        //some kind of win screen...

        
    }

    claimCell(id) {
        //
        this.board[id].claim(this.currentPlayer)
    }

    changeCurrentPlayer() {
        //changes the player
        if (this.currentPlayer === this.players[0]){
            this.currentPlayer = this.players[1];
        } else {
            this.currentPlayer = this.players[0];
        }
    }

    takeTurn(id) {
        //call all the above functions
        console.log(`running taketurn with id ${id}, current player is ${this.currentPlayer}`);
        this.claimCell(id)
        this.checkWin()
        this.changeCurrentPlayer()
    }

    boardMaker() {
        const boardArray = this.board.map(cell => {
            if (!cell.player) { return 0} 
            else {return parseInt(cell.player.slice(-1))}
        })
        return boardArray
    }

    newBoard() {
        this.board = []
        for (let i = 0; i < 49; i++){
            const cell = new Cell(i);
            this.board.push(cell)
        }
        // console.log(this.board);
    }
}

export default Game;