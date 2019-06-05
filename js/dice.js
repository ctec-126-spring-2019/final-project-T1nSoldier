// These are the starting parameters used in the game
var sum;
var coin = 100;
var multiplier = 2;
var dice = 'basic';
var dieOne = document.getElementById('die1');
var dieTwo = document.getElementById('die2');
var dieThree = document.getElementById('die3');
var dieFour = document.getElementById('die4');
// When the page is ready, the Roll the dice button is enabled, and the wallet displays the current coinage.
$(document).ready(function (){
    $('#roll').css('display', 'block');
    $('#wallet').html(coin);
    $('#basicDice').css('display', 'none');
});
// Gets rid of rules text
function hideRules(){
    $('#rules').css('display', "none");
    $('#hideRules').css('display', "none");
    $('#showRules').css('display', "block");
}
// Displays rules text
function showRules(){
    $('#rules').css('display', "block");
    $('#hideRules').css('display', "block");
    $('#showRules').css('display', "none");
}
// The following functions simply change the dice style
function setClassic(){
    dice = 'basic';
    $('#basicDice').css('display', 'none');
    $('#skullDice').css('display', 'inline-block');
    $('#dragonDice').css('display', 'inline-block');
}
function setSkull(){
    dice = 'skull';
    $('#skullDice').css('display', 'none');
    $('#basicDice').css('display', 'inline-block');
    $('#dragonDice').css('display', 'inline-block');
}
function setDragon(){
    dice = 'dragon';
    $('#dragonDice').css('display', 'none');
    $('#basicDice').css('display', 'inline-block');
    $('#skullDice').css('display', 'inline-block');
}

function roll(){
    // The dice rolls, coins are deducted for the roll.
    
    $('#wallet').empty();
    coin -=5
    $('#wallet').html(coin);
    // These are the individual dice being rolled. Each comes up random.
    var die1 = (Math.ceil(Math.random()*6));
    var die2 = (Math.ceil(Math.random()*6));
    var die3 = (Math.ceil(Math.random()*6));
    var die4 = (Math.ceil(Math.random()*6));
    // Totalling up your roll
    sum = die1 + die2 + die3 + die4;
    // This beautiful code makes the correct image show up with the correct style for the roll. I am proud of this. Appreciate it, Bruce.
    dieOne.setAttribute('src', 'images/' + dice + '/' + dice + die1 + '.jpg');
    dieTwo.setAttribute('src', 'images/' + dice + '/' + dice + die2 + '.jpg');
    dieThree.setAttribute('src', 'images/' + dice + '/' + dice + die3 + '.jpg');
    dieFour.setAttribute('src', 'images/' + dice + '/' + dice + die4 + '.jpg');
    // Did you appreciate it?
    // After the roll comes up, the sum is displayed for ease of viewing. The Higher and Lower buttons are revealed, the Roll the dice button is hidden
    // and the message regarding the previous roll is cleared. In the initial version, the failure message hung around after the Roll the dice button was pressed and it bothered 
    // me.
    $('#total').text(sum);
    $('#higher , #lower').css('display', 'inline-block');
    $('#roll').css('display', 'none');
    $('#results').empty();
} 
// function to describe what happens if the player guesses correctly.
function win(){
    // empties the wallet so that math may be done to it.
    $('#wallet').empty();
    coin += multiplier;
    $('#wallet').html(coin);
    $('#results').empty();
    // Writes the result of the roll.
    $('#results').html('+' + multiplier + ' coins!');
    multiplier = multiplier*2;
    // Capped the multiplier. May be shifted if you like huge wins. In an early run I got up to 2056 coins before failing. 
    if (multiplier > 16)
        multiplier = 32;
}
// And this function describes what happens if the player guesses wrong.
function lose(){
    $('#wallet').empty();
    // multiplier is reset.
    multiplier = 2;
    $('#wallet').html(coin);
    $('#results').empty();
    $('#results').html('Failure! Multiplier reset.');
    $('#higher , #lower').css('display', 'none');
    $('#roll').css('display', 'block');
    // and the final loss state. If you lose and have 0 or fewer coins, the screen goes blank, an alert tells you that you failed, and your only option is a button that 
    // resets the game to the initial state.
    if (coin <= 0) {
        $('#table').css('display', 'none');
        alert("I am sorry, you have run out of money. Better luck next time");
        $('#restart').css('display', "block");
    }
}

// Higher button.
function higher(){
    var oldSum = sum;
    roll();
    if (sum >= oldSum){
        win();
    } else {
        lose();
    }
}
// Lower button.
function lower(){
    var oldSum = sum;
    roll();
    if (sum <= oldSum){
        win();
    } else {
        lose();
    }
}
// Restart button, for when you go bankrupt. Wish life had one.
function restart(){
    location.reload();
}