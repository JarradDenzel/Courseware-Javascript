// add tiles 
// ai selects random tile
// select tiles and game indicates hit or miss
// one hit the game is over
// add a button to start a new game

// set the hittas
// boardsize = 100
// of the 100, choose 50
// the chosen 50, need to be given the attribute



let board = document.getElementById('board');
let notify = document.getElementById("message");

function game () {
// Clear the board
board.innerHTML = '';

// Clear the message
notify.innerHTML = '';

// Loop thru and build the board
for (let i = 0; i < 100; i++) {

        // create and add elements
        let el = document.createElement('div');

        // add index number to everything
        el.setAttribute('data-idx', i);

        // set attack ticker to a random number
        let attack = Math.round(Math.random() * 100);

        // apply attack state of bomb if the random attack ticker is divisible by three
        if (attack % 3 == 0) {
            el.setAttribute('state', 'bomb')
        }

        // put the tile on the board
        board.appendChild(el); 
        
        // add event listener
        el.addEventListener('click', function logic () {

            // on click, if the tile was attacked or not, change color of tile
            if(!el.getAttribute("state")){
                el.style.background = "green";
            } else {
                el.style.background = "red";
                notify.innerText = "LOSER"; 
            }
        });
}

let restart = document.getElementById('create');
restart.addEventListener('click', button);

}

game();

function button () {
    game();
}