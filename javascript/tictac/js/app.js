// Add tiles of gameboard to dom
// Ai must select a random tile on the gameboard
// Select tiles and the game will indicate a HIT or a miss
// on HIT the game is over
// Add a button to start a new game


class Game {
    constructor(){
        this.playerTurn = true;
        this.grid = [0,0,0,0,0,0,0,0,0];
        this.turns = 0;
        this.message = document.getElementById('message')
        this.init()
    }

    init() {
        // get blocks
        let self = this;
        let blocks = document.querySelectorAll('#box');
        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            block.addEventListener('click', function() {
                self.gameLogic(this);
            })
        }

        
        // get new game
        let reset = document.getElementById('reset');
        reset.addEventListener('click', function() {
            self.newGame();
        })
        let newGame = document.getElementById('reset');

        self.win = false;
    }

    gameLogic (block) { 
        // set player
        let player = this.player ? 'x' : 'o';
        let index = Number(block.getAttribute('data-index'));
        this.turns++;

        if (block.getAttribute('data-player') ||  this.gameOver){
            return;
        }

        // switch player
        this.player = !this.player;

        // check if block is taken
        if (block.getAttribute('box')) {
            console.log('block taken');
            return;
        }

        // add info to the DOM
        block.setAttribute('data-player', player);
        block.innerHTML = player;
        this.grid[index] = player;

        // check for win condition
        if(this.grid[0] == player && this.grid[1] == player && this.grid[2] == player) {
            this.win = true;
        }

        if(this.win){
            this.message.innerHTML = `player '${player}' wins`
        }

    }


}

let game = new Game();