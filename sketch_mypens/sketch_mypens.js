//note: use ctrl/Cmd + t to auto format your code (indentations)
function input(){
  
  myInput = createInput();
  myInput.position(600, 100);
  
}

function gradientCircle(){
  //background(230, 30, 23);
if (mouseIsPressed){
  radialGradient(
    mouseX, mouseY, 0,//Start pX, pY, start circle radius
    mouseX, mouseY, 350,//End pX, pY, End circle radius
     color(208, 0, 255, 0),
     
    color(208, 0, 255, 225),
   

     //Start color
     //End color
  );
  ellipse(mouseX, mouseY, 70, 70);
  // shadow();
}
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    mouseX, mouseY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
}

function shadow(){
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 16;
  drawingContext.shadowColor = color(230, 30, 18, 100);
}


function hyperGradient2(){
  linearGradient(
    // width, 500,//Start pX, pY, start circle radius
    // width, height -700,//End pX, pY, End circle radius
    mouseX,mouseY -100,
    mouseX,mouseY +60,
    
    color(255, 179, 102), //Start color
    color(128, 0, 255), //End color
  );
  ellipse(mouseX, mouseY, 50, 50);

  // radialGradient(
  //   width-100, 100, 0,//Start pX, pY, start circle radius
  //   width-100, 100, 550,//End pX, pY, End circle radius
  //   color(190, 100, 100, 100), //Start color
  //   color(0, 0, 0, 0), //End color
  // );
  // ellipse(width/2, height/2, 400, 400);
}

function crayon(){
  if (mouseIsPressed){
    for (let x = 0; x < 5; x += 1) {

  let col = myInput.value();
  stroke(col);
   let x = random(mouseX -5,mouseX + 5);
   let y = random(mouseY - 5, mouseY + 5);
  strokeWeight(1);
  point(x, y);
      }
  }
}

function linearGradient(sX, sY, eX, eY, colorS, colorE){
  let gradient = drawingContext.createLinearGradient(
    sX, mouseY, eX, eY
    // mouseX, mouseY, pmouseX, pmouseY
    // mouseX, mouseY, eX, eY
    // sX, sY, mouseX, mouseY
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
  // drawingContext.strokeStyle = gradient;
}



var img;
//var img2;
//var img3;
var initials ='ar'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

let button; //https://p5js.org/reference/p5/createButton/

function preload() {
  // preload() runs once, it may make you wait
  //  img = loadImage('cat.png');  // cat.jpg needs to be next to this .js file
  // you can link to an image on your github account
  //img = loadImage('https://arao-sjsu.github.io/images/cat.jpg');
  img = loadImage('https://scontent-sjc6-1.cdninstagram.com/v/t51.82787-15/859521674_18478081060117160_7396639485319435288_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=NDAxNDA1MDQyOTEyNTMxMjAxOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTAxMS5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=AbHcMgy9DsIQ7kNvwFu_PZM&_nc_oc=AdqjAVgtX1kkJoFGRRO0xRLhgfUiy7LzpExFwwwLDwpisz8AY9v3pQPqHgrrxT6DwSSREwkDGUXFRtZ4V4ExLzcG&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=K6xscG1CPt4mlagWqeHlQw&_nc_ss=7b6a8&oh=00_AQRm6Pk6WNp1t5d7dWgdxahpeiju5gTIjGsolHTx8taK6w&oe=6AED5C23');
  //  img2 = loadImage('https://arao-sjsu.github.io/images/round.png');
  //  img3 = loadImage('https://veryprofessional3d.github.io/images/rainbow.gif');
}
//function sketch2(p) {
//  p.setup = function () {
//    p.createCanvas(600, 200);
//    p.background(250);
//    text('1=', -10, 500);
//    //p.fill(0);
//    //p.stroke(255);
//  };
//  //p.draw = function () {
//  //  p.square(p.mouseX, p.mouseY, 50);
//  //};
//}

// Run second p5 instance
//new p5(sketch2);

function setup() {
  createCanvas(600, 600);
  // canvas size
  background(screenbg);   // use our background screen color
  input();
  button = createButton('clear canvas');
  button.position(500, 645);
  //call clear_print() when the button is pressed
  button.mousePressed(clear_print);

  button = createButton('save img');
  button.position(500, 620);
  //call saveme() when the button is pressed
  button.mousePressed(saveme);
  
  button = createButton('help text');
  button.position(500, 670);
  //call helptext() when the button is pressed
  button.mousePressed(helpText);
  
  //want to style your buttons?? https://editor.p5js.org/msboyles/sketches/Vdfl8pLCB_
  //use css - https://editor.p5js.org/kjhollen/sketches/58WL8zYu1
  
  helpText();
  
 
}

function draw() {

  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
  }
  if (mouseIsPressed) {
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic functionx

  if (toolChoice == '1' ) {  // first tool

    strokeWeight(0);
    stroke(0);
    //line(mouseX, mouseY, pmouseX, pmouseY);
     let col = myInput.value();
    fill(col);
    for (var y = mouseY -5 ; y <= mouseY +5; y += 5) {
    for (var x = mouseX - 5; x <= mouseX + 5; x += 5) {
      
      ellipse(x, y, 5, 5);
    }
  }
    
  } else if (toolChoice == '2') { // second tool

    strokeWeight(2);
    
    let col = myInput.value();
  stroke(col);
   // line(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseX - 10, mouseY-10, mouseX + 10, mouseY+10);
      line(mouseX, mouseY-10, mouseX + 20, mouseY +10);
    
    
  } else if (toolChoice == '3') { // third tool
//stroke(255, 207, 223,70);
    strokeWeight(50);
   // fill(255, 207, 223,70);
     let col = myInput.value();
  stroke(col);
     line(mouseX - 10, mouseY-10, mouseX + 10, mouseY+10);
    
    
  } else if (toolChoice == '4') {
 strokeWeight(0);
    //stroke(0, 0, 255,);
    //fill(250, 230, 210);
     let col = myInput.value();
  fill(col);
    rect(mouseX-10,mouseY-10,20,20)
    //line(mouseX, mouseY, pmouseX, pmouseY);
//ellipse(mouseX,mouseY,mouseX/4, mouseY/4);    
    
  } else if (key == '5') { // this tool calls a function
    noFill();
    strokeWeight(1);
    let col = myInput.value();
  stroke(col);
  ellipse(mouseX,mouseY,50,50)

    // make testbox do something!
    //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(250);
    strokeWeight(25);
    
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
  } else if (toolChoice == '7') {
      fill(179, 255, 0)
  noStroke();
    hyperGradient2();
     
  } else if (toolChoice == '8') {
noStroke();
    crayon();
     let col = myInput.value();
  stroke(col);
    
  } else if (toolChoice == '9') {
      fill(179, 255, 0)
noStroke();
    gradientCircle();
    
  } else if (toolChoice == '0') {
  
  noStroke();
   //fill(255, 35, 99, 255)
  
 ellipse(mouseX+5,mouseY-3,12,11)
   ellipse(mouseX-5,mouseY-3,12,11)
  triangle(mouseX-10, mouseY,mouseX,mouseY+9,mouseX+10, mouseY)
 let col = myInput.value();
  fill(col);
  
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded

    image(img, mouseX-400, mouseY-400, 800, 800); //what does this do?
    //  } else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    //    image(img2, mouseX-25, mouseY-25, 50, 50,20);
    //  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    //    image(img3, mouseX-25, mouseY-25, 50, 50,20);
  } //else if (toolChoice == 'x' || key == 'X') {

  //clearflag = 1;

  //} 
  else if (key == 'p' || key == 'P') {

    saveme();  // call saveme which saves an image of the screen
  }

  function testbox(r, g, b) {
    // this function is called in brush #5
    x = mouseX;
    y = mouseY;
    fill(r, g, b);
    rect(x-50, y-50, 100, 100);
  }
}

function clear_print() {
  // clears the screen by resetting the background
  background(screenbg); // set the screen back to the background color
}

function saveme() {
  //this will save the name as the intials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}

function keyPressed() { //https://p5js.org/reference/p5/keyPressed/
  if (key === 'x' || key === 'X') {
    clear_print();
  } else if (key === 'p' || key === 'P') {
    saveme();
  }
}

function helpText(){
  fill("black");
  strokeWeight(0.2);
  textSize(15);
  let a = createA('https://rgbcolorpicker.com/','Use this color picker!', '_blank');
  //let b = createB('hello');
  a.position(600, 120);
  //b.position(800, 120);
  text('press numerical keys from 1 - 0 for different strokes', 60, 30);
  text('use buttons to save or clear canvas, or press x or p', 60, 45);
  text('try g for secret bonus', 60, 60);
  text('type color code in textbox as rbg(0,0,0) to change colors!', 60, 90);
  //text('use this', 60, 120);
  
  
}
