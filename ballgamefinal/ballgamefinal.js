var ballx = 0;
var bally = 0;
var ballSize = 40;
var score = 0;
var gameState = "L4";
var prank = 0;
var img;
let timer = 5;
var picture = 0;

function preload() {
  //img = loadImage('https://mayukoramsell.github.io/hamster.jpg');
  img =loadImage('https://mayukoramsell.github.io/meimei.jpg');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  ballx = width/2
    bally = height/2
}//=================================================




function draw() {
  background(220);
  if (gameState == "L0") {
    tutorial();
  } else if (gameState == "L1") {
    levelOne();
  } else if (gameState == "L2") {
    ballSize=10;
    levelTwo();
  } else if (gameState == "L3") {
    levelThree();
  } else if (gameState == "L4") {
    levelFour();
  }



  text("score: " + score, width / 2, 40);
}//================================================


function tutorial() {
  text("tutorial", width / 2, height - 20);
  text("hover your mouse over the ellipse!", width / 2, 60);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  noStroke();
  fill(0)
    ellipse(ballx, bally, ballSize);

  if (score>=5) {
    gameState = "L1";
  }
}//=================================================

function levelOne() {
  background(255, 178, 208);
  text("level 1", width / 2, height - 20);
  text("hover your mouse over the ellipse!", width / 2, 60);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (mouseIsPressed) {
    if (distToBall < ballSize / 2) {
      ballx = random(width);
      bally = random(height);
      score = score + 1;
    }
  }
  noStroke();
  fill(0);
  ellipse(ballx, bally, ballSize);
  if (score>=10) {
    gameState = "L2";
  }
}//=================================================

function levelTwo() {
  background(178, 215, 255);
  text("level 2", width / 2, height - 20);
  text("hover? your mouse over the ellipse!", width / 2, 60);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (mouseIsPressed) {
    if (distToBall < ballSize / 2) {
      ballx = random(width);
      bally = random(height);
      score = score + 1;
    }
  }
  noStroke();
  fill(0);
  ellipse(ballx, bally, ballSize);
  if (score>=15) {
    gameState = "L3";
  }
}//=================================================

function levelThree() {
  background(207, 178, 255);
  text("level 3", width / 2, height - 20);
  text("hover? your mouse over the ellipse!", width / 2, 60);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  if (mouseIsPressed) {
    if (timer == 0) {
      if (distToBall < ballSize / 2) {
        ballx = random(width);
        bally = random(height);
        score = score + 1;
        timer = 5;
      }
    }
  }

  noStroke();
  fill(0);
  ellipse(ballx, bally, ballSize);
}//=================================================


function mousePressed() {
  image(img, 300, 300);
}

function levelFour() {
  background(228, 255, 178);
  text("level 3", width / 2, height - 20);
  text("hover? your mouse over the ellipse!", width / 2, 60);
  text(picture, width / 2, 80);
  var distToBall = dist(ballx, bally, mouseX, mouseY);


  if (mouseIsPressed) {
 
    if (distToBall < ballSize / 2) {
      ballx = random(width);
      bally = random(height);
      score = score + 1;
      picture = 1;
    }
     
  }
  
  if (picture == 1){
    image(img,0,0);
  }
  
  noStroke();
  fill(0);
  ellipse(ballx, bally, ballSize);
}//=================================================
