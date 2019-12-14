
// Event listening is client-side, the user interacting with the browser

// 3 ways of adding event listeners
// 1. HTML attribute
// 2. Traditional DOM Event Handlers
// 3. Level 2 Event Listener

// Method 1 
//  <input type="text" id="username" onblur="console.log('hello')">

// Method 2
// var username = document.getElementById('username');
// username.onblur = function () { // functional expression && anonymous function
//     console.log('hello');    
// }

// Method 3
var username = document.getElementById('username');
username.addEventListener('blur', function(){
    console.log('hello');
    
});

var links = document.querySelectorAll('.links a'); // selects all a tags in the links class

links[0].addEventListener('click', function(event) {
    event.preventDefault();
    console.log('hello1');
})
links[1].addEventListener('click', function(event) {
    event.preventDefault();
    console.log('hello2');
})
links[2].addEventListener('click', function(event) {
    event.preventDefault();
    console.log('hello3');
})

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault();
        var confirm = window.confirm('leave?');
        if (confirm){
            var href = event.target.getAttribute('href');
            console.log("hello " + (i + 1));
            window.location = href;
        } else {
            console.log('no');
            
        }
    })
    
}

