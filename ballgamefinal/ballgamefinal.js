var ballx = 0;
var bally = 0;
var ballSize = 40;
var score = 0;
var gameState = "L0";
var prank = 0;
var img;
let timer = 5;
var captcha = 0;
var click = 0;


function preload() {
  img2 = loadImage('https://mayukoramsell.github.io/hamster.jpg');
  img =loadImage('https://mayukoramsell.github.io/meimei.jpg');
  cap1 = loadImage('https://mayukoramsell.github.io/captchaone.jpg');
  cap2 = loadImage('https://mayukoramsell.github.io/captchatwo.png');
  cap3 = loadImage('https://mayukoramsell.github.io/captchathree.png');
  cap4 = loadImage('https://mayukoramsell.github.io/captchafour.png');
  cap5 = loadImage('https://mayukoramsell.github.io/captchafive.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  ballx = width/2
    bally = height/2
    input();
}//=================================================

function input() {

  myInput = createInput();
  myInput.position(600, 100);
}


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
    ballSize=40;
    levelThree();
  } else if (gameState == "L4") {
    ballSize=10;
    levelFour();
  } else if (gameState == "L5") {
    levelFive();
  } else if (gameState == "L6") {
    levelSix();
  } else if (gameState == "L7") {
    levelSeven();
  } else if (gameState == "L8") {
    levelEight();
  } else if (gameState == "L9") {
    levelNine();
  }




  text("score: " + score, width / 2, 40);
}//================================================


function tutorial() {
  text("Complete the Game: Tutorial!", width / 2, height - 20);
  text("hover your mouse over the ball!", width / 2, 60);
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
  if (score>=10) {
    gameState = "L2";
  }
}//=================================================

function levelTwo() {
  
 background(207, 178, 255);
  text("level 2", width / 2, height - 20);
  text("HEY! Give it some time, its been a rough week", width / 2, 60);
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
        //timer = 3;
        background(img);
      }
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
   background(img);
  fill(255,  255,  0);
  text("score: " + score, width / 2, 40);
  text("level 3", width / 2, height - 20);
  text("uh oh it's camouflaging!", width / 2, 60);
  
  //text(timer, width / 2, 80);
  var distToBall = dist(ballx, bally, mouseX, mouseY);


  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  noFill();
  strokeWeight(1);
  stroke(100);
  ellipse(ballx, bally, ballSize);
  if (score>=20) {
    gameState = "L4";
  }
 
}//=================================================


function levelFour() {
  background(228, 255, 178);
  text("level 4", width / 2, height - 20);
  text("case sensitive? what's the textbox for?", width / 2, 60);
  //text(captcha, width / 2, 80);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  let ans = myInput.value();

  if (captcha == 0) {
    if (mouseIsPressed) {

      if (distToBall < ballSize / 2) {
        ballx = random(width);
        bally = random(height);
        score = score + 1;
        captcha = 1;
      }
    }
  }



  if (captcha == 1) {
    image(cap1, 200, 250);
    if (ans == 'xyqkdpsx') {
      if (mouseIsPressed) {

        if (distToBall < ballSize / 2) {
          ballx = random(width);
          bally = random(height);
          score = score + 1;
          captcha = 2;
        }
      }
    }
  } else if (captcha == 2) {
    image(cap2, 50, 250);
    if (ans == '6T9JBCDS') {
      if (mouseIsPressed) {

        if (distToBall < ballSize / 2) {
          ballx = random(width);
          bally = random(height);
          score = score + 1;
          captcha = 3
        }
      }
    }
  } else if (captcha == 3) {
    image(cap3, 100, 200, 300, 250);

    if (ans == 'pivjp') {
      if (mouseIsPressed) {

        if (distToBall < ballSize / 2) {
          ballx = random(width);
          bally = random(height);
          score = score + 1;
          captcha = 4
        }
      }
    }
  } else if (captcha == 4) {
    image(cap4, 100, 250);
    if (ans == '23') {
      if (mouseIsPressed) {

        if (distToBall < ballSize / 2) {
          ballx = random(width);
          bally = random(height);
          score = score + 1;
          captcha = 5
        }
      }
    }
  } else if (captcha == 5) {
    image(cap5, 80, 250);
    if (ans == 'poodshi') {
      if (mouseIsPressed) {

        if (distToBall < ballSize / 2) {
          ballx = random(width);
          bally = random(height);
          score = score + 1;
          captcha = 6
        }
      }
    }
  }
  if (captcha == 6) {
    text("done", width / 2, height - 100);
  }

  if (score > 25) {
    gameState = "L5";
  }
  noStroke();
  fill(0);
  ellipse(ballx, bally, ballSize);
}//=================================================
function levelFive() {
  background(207, 178, 255);
  text("level 5", width / 2, height - 20);
  text("this ball won't move...maybe you just have to press its buttons?", width / 2, 60);
  //text(click, width/2, height -80);
  var distToBall = dist(ballx, bally, mouseX, mouseY);



  if (mouseIsPressed) {
    if (distToBall < ballSize / 2) {


      click = click + .5;
      if (click > 50) {
        ballx = random(width);
        bally = random(height);
        score = score + 1;
        click = 0;
      }
    }
  }

  if (score >= 30) {
    gameState = "L6";
  }

  noStroke();
  fill(0);
  ellipse(ballx, bally, ballSize);
}//=================================================

function mouseMoved() {
  if (gameState == "L6") {
    ballx = random(width);
    bally = random(height);
    if (timer > 0) {
      timer = 5;
    }
    if (timer == 0) {
      ballx = random(width);
      bally = random(height);
      timer = 5;
    }
  }
}


function levelSix() {
  background(178, 155, 255);
  text("level 6", width / 2, height - 20);
  text("it didn't like that...maybe let it come to you?", width / 2, 60);
  //text(timer, width / 2, 80);
  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }

  if (timer == 0) {
    ballx = mouseX;
    bally = mouseY;
    if (mouseIsPressed) {
      if (distToBall < ballSize / 2) {
        ballx = random(width);
        bally = random(height);
        score = score + 1;
        timer = 5;
      }
    }
  }



  if (score >= 35) {
    gameState = "L7";
  }

  noStroke();
  fill(0);
  ellipse(ballx, bally, ballSize);
}//=================================================


function levelSeven() {
 background(155, 255, 198);
  text("score: " + score, width / 2, 40);
  text("level 7", width / 2, height - 20);
  text("just corner it already!", width / 2, 60);

  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (mouseX < 550) {
    if (mouseY < 550 && mouseY > 50) {
      if (distToBall < ballSize / 2) {
        ballx = random(width);
        bally = random(height);
      }
    }
  }


  if (mouseIsPressed) {
    if (distToBall < ballSize / 2) {
      ballx = random(width);
      bally = random(height);
      score = score + 1;
    }
  }


  if (score >= 40) {
    gameState = "L8";
  }

  noStroke();
  fill(0);
  ellipse(ballx, bally, ballSize);
}//=================================================
function levelEight() {
  image(img2, 150, 150);
  text("YOU WIN!", width / 2, height - 200);
  
  noStroke();
  fill(0)
    ellipse(ballx, bally, ballSize);
}//=================================================
