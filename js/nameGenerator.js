$(document).ready(function (){
    $('.button').css('display', 'block');
});


// initialize the variables used when processing the data.
var fnfi = '';
var fnli = '';
var mnfi = '';
var lnfi = '';
var lnli = '';
var day = '';
var month = '';
var animal = '';


function processing() {
    output = '';
    $('#output').html(output);
    var first = $('#firstName').val();
    firstName = first.toLowerCase();
    fnfi = firstName.slice(0,1);
    fnli = firstName.slice(first.length - 1,first.length);
    
    var middle = $('#middleName').val();
    mnfi = middle.slice(0,1);
    
    var last = $('#lastName').val();
    lastName = last.toLowerCase();
    lnfi = lastName.slice(0,1);
    lnli = lastName.slice(lastName.length - 1,lastName.length);
    
    var bDay = $('#birthDate').val();
    bDay = bDay.split('-');
    day = bDay.pop();
    month = bDay.pop();
    
    animal = $('#animal').val();
$('.button').css('display','block');
}

var output = '';

function band() {
    output = 'A good band name would be ';
switch(fnfi) {
    case 'a':
        output += 'Alien';
        break;
    
    case 'b':
        output += 'Throbbing';
        break;       
        
    case 'c':
        output += 'Fat';
        break;
    
    case 'd':
        output += 'Dead';
        break;

    case 'e':
        output += 'Evil';
        break;

    case 'f':
        output += 'Lost';
        break;

    case 'g':
        output += 'Grim';
        break;

    case 'h':
        output += 'Holy';
        break;

    case 'i':
        output += 'Fuzzy';
        break;
    case 'j':
        output += 'Burning';
        break;

    case 'k':
        output += 'King';
        break;
        
    case 'l':
        output += 'Cold';
        break;

    case 'm':
        output += 'Mega';
        break;

    case 'n':
        output += 'Jaded';
        break;

    case 'o':
        output += 'Outcast';
        break;

    case 'p':
        output += 'Perfect';
        break;

    case 'q':
        output += 'Frenzied';
        break;

    case 'r':
        output += 'Rhyming';
        break;

    case 's':
        output += 'Frozen';
        break;

    case 't':
        output += 'Brutal';
        break;

    case 'u':
        output += 'Creeping';
        break;

    case 'v':
        output += 'Vaccinate the';
        break;

    case 'w':
        output += 'Weak';
        break;

    case 'x':
        output += 'Fallen';
        break;

    case 'y':
        output += 'Young';
        break;

    case 'z':
        output += 'Zero';
        break;
        
}
    output += ' ';
switch(lnfi) {
    case 'a':
        output += 'Angels.';
        break;
        
    case 'b':
        output += 'Butterfly.';
        break;
        
    case 'c':
        output += 'Cornflakes.';
        break;
        
    case 'd':
        output += 'Doom';
        break;
        
    case 'e':
        output += 'Apple.';
        break;
        
    case 'f':
        output += 'Grace.';
        break;
        
    case 'g':
        output += 'Sheep.';
        break;
        
    case 'h':
        output += 'Misfits.';
        break;
        
    case 'i':
        output += 'Kitten.';
        break;
        
    case 'j':
        output += 'Jester.';
        break;
        
    case 'k':
        output += 'Kraken.';
        break;
        
    case 'l':
        output += 'Llamas.';
        break;
        
    case 'm':
        output += 'Hound.';
        break;
        
    case 'n':
        output += 'Lizard.';
        break;
        
    case 'o':
        output += 'Monster.';
        break;
        
    case 'p':
        output += 'Insect.';
        break;
        
    case 'q':
        output += 'Mouse.';
        break;
        
    case 'r':
        output += 'Queen.';
        break;
        
    case 's':
        output += 'Slave.';
        break;
        
    case 't':
        output += 'Rat.';
        break;
        
    case 'u':
        output += 'Wizard.';
        break;
        
    case 'v':
        output += 'Victory.';
        break;
        
    case 'w':
        output += 'Wasteland.';
        break;
        
    case 'x':
        output += 'Howler.';
        break;
        
    case 'y':
        output += 'Blade.';
        break;
        
    case 'z':
        output += 'Zebra.';
        break;
        
}
$('.button').css('display','none');
$('#output').html(output);
}

function batman() {
    output = 'You are the Dark Knight, ';
switch(fnli){
    case 'a':
        output += "Bat";
        break;

    case 'b':
        output += "Bat";
        break;

    case 'c':
        output += "Bat";
        break;

    case 'd':
        output += "Bat";
        break;

    case 'e':
        output += "Bruce";
        break;

    case 'f':
        output += "Bat";
        break;

    case 'g':
        output += "Bat";
        break;

    case 'h':
        output += "Bat";
        break;

    case 'i':
        output += "Bat";
        break;

    case 'j':
        output += "Bat";
        break;

    case 'k':
        output += "Bat";
        break;

    case 'l':
        output += "Bat";
        break;

    case 'm':
        output += "Bat";
        break;

    case 'n':
        output += "Bat";
        break;

    case 'o':
        output += "Bat";
        break;

    case 'p':
        output += "Bat";
        break;

    case 'q':
        output += "Bat";
        break;

    case 'r':
        output += "Bat";
        break;

    case 's':
        output += "Bat";
        break;

    case 't':
        output += "Bat";
        break;

    case 'u':
        output += "Bat";
        break;

    case 'v':
        output += "Bat";
        break;

    case 'w':
        output += "Bat";
        break;

    case 'x':
        output += "Bat";
        break;

    case 'y':
        output += "Bat";
        break;

    case 'z':
        output += "Bat";
        break;


}
switch(fnfi){
    case 'a':
        output += "man";
        break;

    case 'b':
        output += " Wayne";
        break;

    case 'c':
        output += "man";
        break;

    case 'd':
        output += "man";
        break;

    case 'e':
        output += " man";
        break;

    case 'f':
        output += "man";
        break;

    case 'g':
        output += "man";
        break;

    case 'h':
        output += "man";
        break;

    case 'i':
        output += "man";
        break;

    case 'j':
        output += "man";
        break;

    case 'k':
        output += "man";
        break;

    case 'l':
        output += "man";
        break;

    case 'm':
        output += "man";
        break;

    case 'n':
        output += "man";
        break;

    case 'o':
        output += "man";
        break;

    case 'p':
        output += "man";
        break;

    case 'q':
        output += "man";
        break;

    case 'r':
        output += "man";
        break;

    case 's':
        output += "man";
        break;

    case 't':
        output += "man";
        break;

    case 'u':
        output += "man";
        break;

    case 'v':
        output += "man";
        break;

    case 'w':
        output += "man";
        break;

    case 'x':
        output += "man"
        break;

    case 'y':
        output += "man";
        break;

    case 'z':
        output += "man";
        break;


}
    output += ".";
    $('.button').css('display','none');
    $('#output').html(output);
}

function redneck() {
    output = "Hey, ";
   
    if (document.getElementById('male').checked){
        switch(fnfi){
            case 'a':
                output += 'Al';
                break;

            case 'b':
                output += 'Billy';
                break;

            case 'c':
                output += 'Carl';
                break;

            case 'd':
                output += 'Darrel';
                break;

            case 'e':
                output += 'Eddy';
                break;

            case 'f':
                output += 'Frank';
                break;

            case 'g':
                output += 'Garth';
                break;

            case 'h':
                output += 'Harry';
                break;

            case 'i':
                output += 'Ike';
                break;

            case 'j':
                output += 'Jim';
                break;

            case 'k':
                output += 'Ken';
                break;

            case 'l':
                output += 'Larry';
                break;

            case 'm':
                output += 'Merle';
                break;

            case 'n':
                output += 'Nick';
                break;

            case 'o':
                output += 'Ollie';
                break;

            case 'p':
                output += 'Phil';
                break;

            case 'q':
                output += 'Quentin';
                break;

            case 'r':
                output += 'Robby';
                break;

            case 's':
                output += 'Steve';
                break;

            case 't':
                output += 'Terry';
                break;

            case 'u':
                output += 'Uncle Bob';

                break;

            case 'v':
                output += 'Vince';
                break;

            case 'w':
                output += 'Willy';
                break;

            case 'x':
                output += 'Jeff';
                break;

            case 'y':
                output += 'John';
                break;

            case 'z':
                output += 'Zeke';
                break;

    }  

    output += '-';
        switch(fnli){
            case 'a':
                output += 'Bert';
                break;

            case 'b':
                output += 'Bob';
                break;

            case 'c':
                output += 'Cotton';
                break;

            case 'd':
                output += 'Duane';
                break;

            case 'e':
                output += 'Beau';
                break;

            case 'f':
                output += 'Fred';
                break;

            case 'g':
                output += 'George';
                break;

            case 'h':
                output += 'Hank';
                break;

            case 'i':
                output += 'Isaac';
                break;

            case 'j':
                output += 'John';
                break;

            case 'k':
                output += 'Kurt';
                break;

            case 'l':
                output += 'Luke';
                break;

            case 'm':
                output += 'Melvin';
                break;

            case 'n':
                output += 'Nick';
                break;

            case 'o':
                output += 'Marvin';
                break;

            case 'p':
                output += 'Pete';
                break;

            case 'q':
                output += 'Donnie';
                break;

            case 'r':
                output += 'Redd';
                break;

            case 's':
                output += 'Sam';
                break;

            case 't':
                output += 'Tom';
                break;

            case 'u':
                output += 'Ulysses';
                break;

            case 'v':
                output += 'Virgil';
                break;

            case 'w':
                output += 'Wayne';
                break;

            case 'x':
                output += 'Burt';
                break;

            case 'y':
                output += 'Bill';
                break;

            case 'z':
                output += 'Wilbur';
                break;

    }  

    output += ' ';
        switch(lnfi){
            case 'a':
                output += 'Arn';
                break;

            case 'b':
                output += 'Bobby';
                break;

            case 'c':
                output += 'Clyde';
                break;

            case 'd':
                output += 'Donald';
                break;

            case 'e':
                output += 'Edgar';
                break;

            case 'f':
                output += 'Freddy';
                break;

            case 'g':
                output += 'Gene';
                break;

            case 'h':
                output += 'Herb';
                break;

            case 'i':
                output += 'Ike';
                break;

            case 'j':
                output += 'Jeb';
                break;

            case 'k':
                output += 'Keith';
                break;

            case 'l':
                output += 'Lawrence';
                break;

            case 'm':
                output += 'Mel';
                break;

            case 'n':
                output += 'Mitch';
                break;

            case 'o':
                output += 'Harlan';
                break;

            case 'p':
                output += 'Percy';
                break;

            case 'q':
                output += 'Quaid';
                break;

            case 'r':
                output += 'Ryan';
                break;

            case 's':
                output += 'Sam';
                break;

            case 't':
                output += 'Ted';
                break;

            case 'u':
                output += 'Wes';
                break;

            case 'v':
                output += 'Vick';
                break;

            case 'w':
                output += 'Wayne';
                break;

            case 'x':
                output += 'Xavier';
                break;

            case 'y':
                output += 'William';
                break;

            case 'z':
                output += 'Robert';
                break;

    }  

    output += ' ';
        switch(lnli){
            case 'a':
                output += 'Albert';
                break;

            case 'b':
                output += 'Benjamin';
                break;

            case 'c':
                output += 'Cortney';
                break;

            case 'd':
                output += 'Darrel';
                break;

            case 'e':
                output += 'Edgar';
                break;

            case 'f':
                output += 'Francis';
                break;

            case 'g':
                output += 'Geoffry';
                break;

            case 'h':
                output += 'Herbert';
                break;

            case 'i':
                output += 'the Third';
                break;

            case 'j':
                output += 'Junior';
                break;

            case 'k':
                output += 'Kent';
                break;

            case 'l':
                output += 'Lindsey';
                break;

            case 'm':
                output += 'Murphy';
                break;

            case 'n':
                output += 'Nate';
                break;

            case 'o':
                output += 'the Fourth';
                break;

            case 'p':
                output += 'Murray';
                break;

            case 'q':
                output += 'the Twelfth';
                break;

            case 'r':
                output += 'Ryan';
                break;

            case 's':
                output += 'Stevenson';
                break;

            case 't':
                output += 'Tuttle';
                break;

            case 'u':
                output += 'Williams';
                break;

            case 'v':
                output += 'Michaelson';
                break;

            case 'w':
                output += 'Williamson';
                break;

            case 'x':
                output += 'Johnson';
                break;

            case 'y':
                output += 'Armstrong';
                break;

            case 'z':
                output += 'the Twenty-Eighth';
                break;

    }  
}
    
    
    if (document.getElementById('female').checked){
        switch(fnfi){
            case 'a':
                output += 'Amy';
                break;

            case 'b':
                output += 'Becky';
                break;

            case 'c':
                output += 'Carla';
                break;

            case 'd':
                output += 'Daisy';
                break;

            case 'e':
                output += 'Edna';
                break;

            case 'f':
                output += 'Frannie';
                break;

            case 'g':
                output += 'Georgia';
                break;

            case 'h':
                output += 'Heidi';
                break;

            case 'i':
                output += 'Izzy';
                break;

            case 'j':
                output += 'Jessie';
                break;

            case 'k':
                output += 'Katie';
                break;

            case 'l':
                output += 'LuAnne';
                break;

            case 'm':
                output += 'Mary';
                break;

            case 'n':
                output += 'Nancy';
                break;

            case 'o':
                output += 'Olivia';
                break;

            case 'p':
                output += 'Pauline';
                break;

            case 'q':
                output += 'Queenie';
                break;

            case 'r':
                output += 'Rachel';
                break;

            case 's':
                output += 'Sarah';
                break;

            case 't':
                output += 'Tammy';
                break;

            case 'u':
                output += 'Uma';
                break;

            case 'v':
                output += 'Victoria';
                break;

            case 'w':
                output += 'Wilma';
                break;

            case 'x':
                output += 'Desdemona';
                break;

            case 'y':
                output += 'Sadie';
                break;

            case 'z':
                output += 'Connie';
                break;

    }  
    output += '-';
        switch(mnfi){
            case 'a':
                output += 'Ann';
                break;

            case 'b':
                output += 'Rae';
                break;

            case 'c':
                output += 'Sue';
                break;

            case 'd':
                output += 'Lin';
                break;

            case 'e':
                output += 'Jo';
                break;

            case 'f':
                output += 'Mae';
                break;

            case 'g':
                output += 'Lee';
                break;

            case 'h':
                output += 'Jane';
                break;

            case 'i':
                output += 'Rae';
                break;

            case 'j':
                output += 'Lin';
                break;

            case 'k':
                output += 'Lin';
                break;

            case 'l':
                output += 'Lin';
                break;

            case 'm':
                output += 'Jo';
                break;

            case 'n':
                output += 'Ann';
                break;

            case 'o':
                output += 'Sue';
                break;

            case 'p':
                output += 'Mae';
                break;

            case 'q':
                output += 'Rae';
                break;

            case 'r':
                output += 'Rae';
                break;

            case 's':
                output += 'Sue';
                break;

            case 't':
                output += 'Jo';
                break;

            case 'u':
                output += 'Lin';
                break;

            case 'v':
                output += 'Victoria';
                break;

            case 'w':
                output += 'Rae';
                break;

            case 'x':
                output += 'Mae';
                break;

            case 'y':
                output += 'Sue';
                break;

            case 'z':
                output += 'Jane';
                break;

    }  
    output += ' ';
        switch(lnfi){
            case 'a':
                output += 'Armstrong';
                break;

            case 'b':
                output += 'Beauregarde';
                break;

            case 'c':
                output += 'Collins';
                break;

            case 'd':
                output += 'Davis';
                break;

            case 'e':
                output += 'Edwin';
                break;

            case 'f':
                output += 'Francis';
                break;

            case 'g':
                output += 'Graham';
                break;

            case 'h':
                output += 'Helens';
                break;

            case 'i':
                output += 'Isaacs';
                break;

            case 'j':
                output += 'Johnson';
                break;

            case 'k':
                output += 'Kennedy';
                break;

            case 'l':
                output += 'Lee';
                break;

            case 'm':
                output += 'Martin';
                break;

            case 'n':
                output += 'Nicholson';
                break;

            case 'o':
                output += 'Oswald';
                break;

            case 'p':
                output += 'Park';
                break;

            case 'q':
                output += 'Quinn';
                break;

            case 'r':
                output += 'Roberts';
                break;

            case 's':
                output += 'Smith';
                break;

            case 't':
                output += 'Taylor';
                break;

            case 'u':
                output += 'Urban';
                break;

            case 'v':
                output += 'Victoria';
                break;

            case 'w':
                output += 'Williamson';
                break;

            case 'x':
                output += 'Xavier';
                break;

            case 'y':
                output += 'Young';
                break;

            case 'z':
                output += 'Zimmerman';
                break;

    }    
}
output += ", toss me another beer!";
$('.button').css('display','none');
$('#output').html(output);  
}