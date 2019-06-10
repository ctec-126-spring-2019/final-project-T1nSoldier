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

// Tear the data into the chunks I will be using.
function processing() {
    output = '';
    $('#output').html(output);
    var first = $('#firstName').val();
    firstName = first.toLowerCase();
    fnfi = firstName.slice(0,1);
    fnli = firstName.slice(first.length - 1,first.length);
    
    var middle = $('#middleName').val();
    middleName = middle.toLowerCase();
    mnfi = middleName.slice(0,1);
    
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
        output += "Rat";
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
        output += "man";
        break;

    case 'c':
        output += "man";
        break;

    case 'd':
        output += "man";
        break;

    case 'e':
        output += "man";
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

function bandit() {
    output += "You are ";
switch (fnfi) {
    case 'a':
        output += 'General';
        break;

        
    case 'b':
        output += 'Gut';
        break;

    case 'c':
        output += 'Spine';
        break;

    case 'd':
        output += 'Master';
        break;

    case 'e':
        output += 'Skull';
        break;

    case 'f':
        output += 'Lead';
        break;

    case 'g':
        output += 'Gore';
        break;

    case 'h':
        output += 'Petrol';
        break;

    case 'i':
        output += 'Torque';
        break;

    case 'j':
        output += 'Black';
        break;

    case 'k':
        output += 'Fear';
        break;

    case 'l':
        output += 'Monster';
        break;

    case 'm':
        output += 'Chain';
        break;

    case 'n':
        output += 'Gear';
        break;

    case 'o':
        output += 'Oil';
        break;

    case 'p':
        output += 'Tread';
        break;

    case 'q':
        output += 'Flower';
        break;

    case 'r':
        output += 'Gun';
        break;

    case 's':
        output += 'Dust';
        break;

    case 't':
        output += 'Exhaust';
        break;

    case 'u':
        output += 'Wheel';
        break;

    case 'v':
        output += 'Bone';
        break;

    case 'w':
        output += 'Bullet';
        break;

    case 'x':
        output += 'Leg';
        break;

    case 'y':
        output += 'Dirt';
        break;

    case 'z':
        output += 'Eye';
        break;
}
    output += ' ';
switch (lnli) {
    case 'a':
        output += 'Drinker';
        break;

        
    case 'b':
        output += 'Crusher';
        break;

    case 'c':
        output += 'Watcher';
        break;

    case 'd':
        output += 'Licker';
        break;

    case 'e':
        output += 'King';
        break;

    case 'f':
        output += 'Cruncher';
        break;

    case 'g':
        output += 'Hunter';
        break;

    case 'h':
        output += 'Bender';
        break;

    case 'i':
        output += 'Breaker';
        break;

    case 'j':
        output += 'Washer';
        break;

    case 'k':
        output += 'Chewer';
        break;

    case 'l':
        output += 'Biter';
        break;

    case 'm':
        output += 'Ripper';
        break;

    case 'n':
        output += 'Devourer';
        break;

    case 'o':
        output += 'Eater';
        break;

    case 'p':
        output += 'Puncher';
        break;

    case 'q':
        output += 'Sniffer';
        break;

    case 'r':
        output += 'Eater';
        break;

    case 's':
        output += 'Drinker';
        break;

    case 't':
        output += 'Burner';
        break;

    case 'u':
        output += 'Starer';
        break;

    case 'v':
        output += 'Drunk';
        break;

    case 'w':
        output += 'Puncher';
        break;

    case 'x':
        output += 'Sniffer';
        break;

    case 'y':
        output += 'Hunter';
        break;

    case 'z':
        output += 'Chaser';
        break;


}
    output += ' ';
switch (month){
    case '01':
        output += ' the Bold';
        break;

        
    case '02':
        output += ' the Bloody';
        break;

    case '03':
        output += ' of Perth';
        break;

    case '04':
        output += ' the Wild';
        break;

    case '05':
        output += ' the Mad';
        break;

    case '06':
        output += ', Eater of Bones';
        break;

    case '07':
        output += '';
        break;

    case '08':
        output += ' the Mighty';
        break;

    case '09':
        output += ', Eater of the Weak';
        break;

    case '10':
        output += ' the Vile';
        break;

    case '11':
        output += ', Warmonger';
        break;

    case '12':
        output += ' Gear Eater';
        break;


}
    output += ', Scourge of ';
switch (day) {
    case '01':
        output += 'All';
        break;

        
    case '02':
        output += 'Men';
        break;

    case '03':
        output += 'Women';
        break;

    case '04':
        output += 'Mutants';
        break;

    case '05':
        output += 'the Wastes';
        break;

    case '06':
        output += 'Heaven';
        break;

    case '07':
        output += 'the Weak';
        break;

    case '08':
        output += 'the Strong';
        break;

    case '09':
        output += 'the Merciful';
        break;

    case '10':
        output += 'the Desert';
        break;

    case '11':
        output += 'the Sands';
        break;

    case '12':
        output += 'God';
        break;

    case '13':
        output += 'the Gods';
        break;

    case '14':
        output += 'the Angels';
        break;

    case '15':
        output += 'the Righteous';
        break;

    case '16':
        output += 'the World';
        break;

    case '17':
        output += 'the Stars';
        break;

    case '18':
        output += 'Hell';
        break;

    case '19':
        output += 'the Dunes';
        break;

    case '20':
        output += 'All They See';
        break;

    case '21':
        output += 'the Innocent';
        break;

    case '22':
        output += 'Warlords';
        break;

    case '23':
        output += 'the Rats';
        break;

    case '24':
        output += 'Dreams';
        break;

    case '25':
        output += 'the Bloodied';
        break;

    case '26':
        output += 'the Broken Lands';
        break;

    case '27':
        output += 'the Mind';
        break;

    case '28':
        output += 'Your Mom';
        break;

    case '29':
        output += 'the Cursed';
        break;

    case '30':
        output += 'the Blessed';
        break;

    case '31':
        output += 'the End';
        break;
}
    $('.button').css('display','none');
    $('#output').html(output);
}

function unicorn() {
    output += 'Candy and Rainbows, it\'s ';
switch(fnfi) {
    case 'a':
        output += 'Glitter';
        break;

        
    case 'b':
        output += 'Rainbow';
        break;

    case 'c':
        output += 'Twinkle';
        break;

    case 'd':
        output += 'Happy';
        break;

    case 'e':
        output += 'Bright';
        break;

    case 'f':
        output += 'Shimmer';
        break;

    case 'g':
        output += 'Dazzle';
        break;

    case 'h':
        output += 'Princess';
        break;

    case 'i':
        output += 'Lovely';
        break;

    case 'j':
        output += 'Spirit';
        break;

    case 'k':
        output += 'Joyful';
        break;

    case 'l':
        output += 'Shiny';
        break;

    case 'm':
        output += 'Elegant';
        break;

    case 'n':
        output += 'Cute';
        break;

    case 'o':
        output += 'Glitzy';
        break;

    case 'p':
        output += 'Sparkly';
        break;

    case 'q':
        output += 'Doom';
        break;

    case 'r':
        output += 'Amazing';
        break;

    case 's':
        output += 'Delightful';
        break;

    case 't':
        output += 'Rosy';
        break;

    case 'u':
        output += 'Moonbeam';
        break;

    case 'v':
        output += 'Fancy';
        break;

    case 'w':
        output += 'Sunshine';
        break;

    case 'x':
        output += 'Starlight';
        break;

    case 'y':
        output += 'Breezy';
        break;

    case 'z':
        output += 'Pearly';
        break;
}
    output += ' ';
switch(month) {
    case '01':
        output += 'Nova';
        break;

        
    case '02':
        output += 'Breeze';
        break;

    case '03':
        output += 'Horn';
        break;

    case '04':
        output += 'Queen';
        break;

    case '05':
        output += 'Fairy Dust';
        break;

    case '06':
        output += 'Sparkle Hoof';
        break;

    case '07':
        output += 'Song';
        break;

    case '08':
        output += 'Shining Mane';
        break;

    case '09':
        output += 'Star Dust';
        break;

    case '10':
        output += 'Moonlight';
        break;

    case '11':
        output += 'Comet Tail';
        break;

    case '12':
        output += 'Sky Gallop';
        break;
}
    output += '!';
    $('.button').css('display','none');
    $('#output').html(output);
}

function blues() {
    output += 'You are the King of Blues, ';
switch(fnfi) {
    case 'a':
        output += 'Fat';
        break;

        
    case 'b':
        output += 'Blind';
        break;

    case 'c':
        output += 'Sticky';
        break;

    case 'd':
        output += 'Old';
        break;

    case 'e':
        output += 'Buddy';
        break;

    case 'f':
        output += 'Howlin\'';
        break;

    case 'g':
        output += 'Ugly';
        break;

    case 'h':
        output += 'Beautiful';
        break;

    case 'i':
        output += 'Happy';
        break;

    case 'j':
        output += 'Cryin\'';
        break;

    case 'k':
        output += 'Jailhouse';
        break;

    case 'l':
        output += 'Red';
        break;

    case 'm':
        output += 'Rail Ridin\'';
        break;

    case 'n':
        output += 'Rainy';
        break;

    case 'o':
        output += 'Sleepy';
        break;

    case 'p':
        output += 'Bald';
        break;

    case 'q':
        output += 'Devil\'s';
        break;

    case 'r':
        output += 'Skinny';
        break;

    case 's':
        output += 'Big';
        break;

    case 't':
        output += 'Tiny';
        break;

    case 'u':
        output += 'Toothless';
        break;

    case 'v':
        output += 'Singin\'';
        break;

    case 'w':
        output += 'Steel-Eye';
        break;

    case 'x':
        output += 'Stinky';
        break;

    case 'y':
        output += 'Deaf';
        break;

    case 'z':
        output += 'Godly';
        break;
}
    output += ' ';
switch(mnfi) {
    case 'a':
        output += 'Bones';
        break;

        
    case 'b':
        output += 'Man';
        break;

    case 'c':
        output += 'Guitar';
        break;

    case 'd':
        output += 'Legs';
        break;

    case 'e':
        output += 'Hands';
        break;

    case 'f':
        output += 'Eyes';
        break;

    case 'g':
        output += 'Money';
        break;

    case 'h':
        output += 'King';
        break;

    case 'i':
        output += 'Gumbo';
        break;

    case 'j':
        output += 'Po\' Boy';
        break;

    case 'k':
        output += 'Hurricane';
        break;

    case 'l':
        output += 'Fingers';
        break;

    case 'm':
        output += 'VooDoo';
        break;

    case 'n':
        output += 'Feet';
        break;

    case 'o':
        output += 'Mama';
        break;

    case 'p':
        output += 'Dog';
        break;

    case 'q':
        output += 'Gator';
        break;

    case 'r':
        output += 'Skunk';
        break;

    case 's':
        output += 'Tooth';
        break;

    case 't':
        output += 'Smoke';
        break;

    case 'u':
        output += 'Pickles';
        break;

    case 'v':
        output += 'Baby';
        break;

    case 'w':
        output += 'Sugar';
        break;

    case 'x':
        output += 'Death';
        break;

    case 'y':
        output += 'Eggs';
        break;

    case 'z':
        output += 'Zoot';
        break;


}
    output += ' '
switch(lnfi) {
    case 'a':
        output += 'Jones';
        break;

        
    case 'b':
        output += 'Jackson';
        break;

    case 'c':
        output += 'McGee';
        break;

    case 'd':
        output += 'Tuesday';
        break;

    case 'e':
        output += 'Green';
        break;

    case 'f':
        output += 'Rivers';
        break;

    case 'g':
        output += 'Malone';
        break;

    case 'h':
        output += 'Dupree';
        break;

    case 'i':
        output += 'Smith';
        break;

    case 'j':
        output += 'Parker';
        break;

    case 'k':
        output += 'White';
        break;

    case 'l':
        output += 'Walker';
        break;

    case 'm':
        output += 'Lee';
        break;

    case 'n':
        output += 'King';
        break;

    case 'o':
        output += 'Jefferson';
        break;

    case 'p':
        output += 'Davis';
        break;

    case 'q':
        output += 'Franklin';
        break;

    case 'r':
        output += 'Jenkins';
        break;

    case 's':
        output += 'Love';
        break;

    case 't':
        output += 'Johnson';
        break;

    case 'u':
        output += 'Allison';
        break;

    case 'v':
        output += 'Cooper';
        break;

    case 'w':
        output += 'Cobbler';
        break;

    case 'x':
        output += 'Brown';
        break;

    case 'y':
        output += 'Hawkins';
        break;

    case 'z':
        output += 'Bailey';
        break;
}
    output += '.';
    $('.button').css('display','none');
    $('#output').html(output);
}

function dragon() {
    var first = $('#firstName').val();
    var middle = $('#middleName').val();
    middle = middle.toLowerCase();
    var last = $('#lastName').val();
    last = last.toLowerCase();
    var a = first.slice(first.length - 2, first.length - 1);
    a = a.toUpperCase();
    var b = first.slice(first.length - 1 , first.length);
    var x = Math.floor(last.length/2);
    var c = last.slice(x - 1 , x + 1);
    var d = middle.slice(0 , 2);
    var e = last.slice(0 , 1);
    output = `The great wyrm, ${a}${b}${c}${d}${e}, awakens`;
    $('.button').css('display','none');
    $('#output').html(output);
}

function pokemon() {
var type1 = '';
var type2 = '';
var a = '-';
switch(month) {
    case '01':
        type1 = 'Ice';
        break;
        
    case '02':
        type1 = 'Normal';
        break;
        
    case '03':
        type1 = 'Water';
        break;
        
    case '04':
        type1 = 'Electric';
        break;
        
    case '05':
        type1 = 'Psychic';
        break;
        
    case '06':
        type1 = 'Bug';
        break;
        
    case '07':
        type1 = 'Fire';
        break;
        
    case '08':
        type1 = 'Grass';
        break;
        
    case '09':
        type1 = 'Dragon';
        break;
        
    case '10':
        type1 = 'Dark';
        break;
        
    case '11':
        type1 = 'Steel';
        break;
        
    case '12':
        type1 = 'Ghost';
        break;
        
        
}
switch(day) {
    case '01':
        type2 = 'Psychic';
        break;
        
    case '02':
        type2 = 'Fire';
        break;
    case '03':
        type2 = 'Ice';
        break;
    case '04':
        type2 = 'Electric';
        break;
    case '05':
        type2 = 'Dragon';
        break;
    case '06':
        type2 = 'Grass';
        break;
    case '07':
        type2 = 'Steel';
        break;
    case '08':
        type2 = 'Rock';
        break;
    case '09':
        type2 = 'Water';
        break;
    case '10':
        type2 = 'Normal';
        break;
    case '11':
        type2 = 'Fighting';
        break;
    case '12':
        type2 = 'Ghost';
        break;
    case '13':
        type2 = 'Flying';
        break;
    case '14':
        type2 = 'Flying';
        break;
    case '15':
        type2 = 'Flying';
        break;
    case '16':
        type2 = 'Flying';
        break;
    case '17':
        type2 = 'Poison';
        break;
    case '18':
        type2 = 'Ground';
        break;
    case '19':
        type2 = 'Dark';
        break;
    case '20':
        type2 = 'Fighting';
        break;
    case '21':
        type2 = 'Psychic';
        break;
    case '22':
        type2 = 'Dark';
        break;
    case '23':
        type2 = 'Steel';
        break;
    case '24':
        type2 = 'Dragon';
        break;
    case '25':
        type2 = 'Fire';
        break;
    case '26':
        type2 = 'Ice';
        break;
    case '27':
        type2 = 'Electric';
        break;
    case '28':
        type2 = 'Normal';
        break;
    case '29':
        type2 = 'Poison';
        break;
    case '30':
        type2 = 'Fighting';
        break;
    case '31':
        type2 = 'Bug';
        break;
}

if(type1 == type2) {
    a = '';
    type2 = '';
}
var base = $('#animal').val();
var random = Math.floor(Math.random() * base.length/2);
var name1 = base.slice(random , random + 1);
name1 = name1.toUpperCase();
var name2 = base.slice(random + 1, random + 4);
var typerandom = Math.floor(Math.random() * 2);
var name3 = '';
switch(type1) {
    case 'Ice':
        switch (typerandom) {
            case 0:
                name3 = 'frost';
                break;
            
            case 1:
                name3 = 'chill';
                break;

            case 2:
                name3 = 'snow';

        }
        break;
        
    case 'Normal':
            switch (typerandom) {
                case 0:
                    name3 = 'khan';
                    break;
                
                case 1:
                    name3 = 'don';
                    break;
    
                case 2:
                    name3 = 'therium';
    
            }
        break;

    case 'Water':
            switch (typerandom) {
                case 0:
                    name3 = 'deep';
                    break;
                
                case 1:
                    name3 = 'flow';
                    break;
    
                case 2:
                    name3 = 'rain';
    
            }
        break;

    case 'Electric':
            switch (typerandom) {
                case 0:
                    name3 = 'zap';
                    break;
                
                case 1:
                    name3 = 'bolt';
                    break;
    
                case 2:
                    name3 = 'buzz';
    
            }
        break;

    case 'Psychic':
            switch (typerandom) {
                case 0:
                    name3 = 'star';
                    break;
                
                case 1:
                    name3 = 'esp';
                    break;
    
                case 2:
                    name3 = 'kine';
    
            }
        break;

    case 'Bug':
            switch (typerandom) {
                case 0:
                    name3 = 'bee';
                    break;
                
                case 1:
                    name3 = 'shell';
                    break;
    
                case 2:
                    name3 = 'horn';
    
            }
        break;

    case 'Fire':
            switch (typerandom) {
                case 0:
                    name3 = 'burn';
                    break;
                
                case 1:
                    name3 = 'char';
                    break;
    
                case 2:
                    name3 = 'blaze';
    
            }
        break;

    case 'Grass':
            switch (typerandom) {
                case 0:
                    name3 = 'ish';
                    break;
                
                case 1:
                    name3 = 'eed';
                    break;
    
                case 2:
                    name3 = 'root';
    
            }
        break;

    case 'Dragon':
            switch (typerandom) {
                case 0:
                    name3 = 'don';
                    break;
                
                case 1:
                    name3 = 'ite';
                    break;
    
                case 2:
                    name3 = 'king';
    
            }
        break;

    case 'Dark':
            switch (typerandom) {
                case 0:
                    name3 = 'shade';
                    break;
                
                case 1:
                    name3 = 'moon';
                    break;
    
                case 2:
                    name3 = 'claw';
    
            }
        break;

    case 'Steel':
            switch (typerandom) {
                case 0:
                    name3 = 'ite';
                    break;
                
                case 1:
                    name3 = 'ium';
                    break;
    
                case 2:
                    name3 = 'tine';
    
            }
        break;

    case 'Ghost':
            switch (typerandom) {
                case 0:
                    name3 = 'ade';
                    break;
                
                case 1:
                    name3 = 'tre';
                    break;
    
                case 2:
                    name3 = 'haunt';
    
            }
        break;
}

    var name = name1 + name2 + name3;
    output = `${name} is a ${type1}${a}${type2} type Pokemon`
    $('.button').css('display','none');
    $('#output').html(output);
}