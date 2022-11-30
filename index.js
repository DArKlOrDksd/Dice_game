// alert("working");
/////////////////////////////////////////////////
// for Image part 1

// Random number generator!!!!
var randomNumber1 = Math.floor((Math.random()*6)+1);

// images from 1 to 6 chnage according to  the random number generator
var RandomDiceImage = "images/dice" +randomNumber1+".png";

// choosing the image place
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", RandomDiceImage);


////////////////////////////////////////////////////////////////////////////////////////

////// For Image Part 2

var randomNumber2 = Math.floor((Math.random()*6)+1);
var RandomDiceImage2 = "images/dice" +randomNumber2+".png";


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", RandomDiceImage2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 win!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}