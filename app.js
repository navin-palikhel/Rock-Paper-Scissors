var player = prompt("Do you want Rock, Paper or Scissors");
var ps = player.charAt(0).toUpperCase();
var win = false;
var computer = Math.random();
if (computer < 0.34) {
    computer = "Rock";
}
else if (computer < 0.67) {
    computer = "Paper";
}
else {
    computer = "Scissors";
}
var cs = computer.charAt(0).toUpperCase();
console.log(computer);
var html = "";

if (cs == ps) {
    html += "It's a TIE";
}
else {
    if (ps == "S") {
        player = "Scissors";
        if (cs == "P") {
            win = true;
        }
    }
    else if (ps == "R") {
        player = "Rock";
        if (cs == "S") {
            win = true;
        }
    }
    else {
        player = "Paper";
        if (cs == "R") {
            win = true;
        }
    }
    if (win) {
        html = " You Won";
    }
    else {
        html = "You Lose";
    }

    console.log(html);
   
    var output = document.getElementById('result');
    output.innerHTML = "Player vs Computer <br>" + player+ "vs" + computer +"<br> Result"+html;
}