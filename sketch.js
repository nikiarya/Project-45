var gameState = 0; 
var playerCount = 0; 
var database; 

var form, player, game; 
var roleDecider; 

function preload()
{

}

function setup() {
  createCanvas(800, 700);

  database = firebase.database(); 
  game = new Game(); 
  game.getState(); 
  game.start(); 
  

}


function draw() {   


}



