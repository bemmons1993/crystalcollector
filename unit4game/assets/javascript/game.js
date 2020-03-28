var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);
var pink = Math.floor(Math.random() * 11) + 1;
var red = Math.floor(Math.random() * 11) + 1;
var grey = Math.floor(Math.random() * 11) + 1;
var blue = Math.floor(Math.random() * 11) + 1;
$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);
var counter = 0;
$("#curScore").text(counter);

function restartGame() {
    targetNumber = Math.floor(Math.random() * 101) +19;
    $("#targetNumber").text(targetNumber);
    pink = Math.floor(Math.random() * 11) + 1;
    red = Math.floor(Math.random() * 11) + 1;
    grey = Math.floor(Math.random() * 11) + 1;
    blue = Math.floor(Math.random() * 11) + 1;
    counter = 0;
    $("#curScore").text(counter);
}

function win() {
    winCounter ++;
    $("#winCounter").html(winCounter);
    restartGame();
}

function loose() {
    lossCounter ++;
    $("#lossCounter").html(lossCounter);
    restartGame();
}

$("#pink").on ("click", function(){
    counter = counter + pink;
    $("#curScore").html(counter);
        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
        console.log(counter + pink);
});

$("#red").on ("click", function(){
    counter = counter + red;
    $("#curScore").html(counter);
        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
        console.log(counter + red);
});

$("#grey").on ("click", function(){
    counter = counter + grey;
    $("#curScore").html(counter);
        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
        console.log(counter + grey);
});

$("#blue").on ("click", function(){
    counter = counter + blue;
    $("#curScore").html(counter);
        if (counter == targetNumber){
            win();
        }
        else if (counter > targetNumber){
            loose();
        }
        console.log(counter + blue);
});