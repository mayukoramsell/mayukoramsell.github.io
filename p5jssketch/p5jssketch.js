function setup() {
  createCanvas(600, 600);
  background(255, 183, 210);
}

function draw(){
  strokeWeight(0);
  //back hair
  fill(30);
  ellipse(300,250,370,370);
  fill(0);
  rect(150,300,300,320)
  //face
  fill(252, 228, 212);
  ellipse(300,300,330,350);
  //ears
 
  ellipse(140,330,80,120)
  ellipse(460,330,80,120)
  //neck
  rect(275,450,50,100)
 
  //eyes
  strokeWeight(4);
  line(200,330,180,335)
  line(200,320,180,325)
  strokeWeight(0);
    fill(255)
  ellipse(235,330,80,70)
   fill(20);
  ellipse(220,330,50,60)
  fill(255)
  ellipse(220,320,30,30)
   
  strokeWeight(4);
  noFill();
  arc(235, 330, 80, 70, radians(180),radians(350));
  
  
  line(350,325,400,300);
  line(350,325,400,350);
  //mouth
   strokeWeight(0);
  fill(245, 187, 210);
  ellipse(325,405,40,50);
  strokeWeight(4);
  noFill();
  arc(300, 400, 100, 70, radians(30),radians(150));

  fill(30);
  strokeWeight(0);
  arc(250, 230, 260, 260, radians(140),radians(320));

  arc(332, 230, 170, 170, radians(60),radians(340));
  arc(410, 230, 150, 150, radians(60),radians(240));
  arc(440, 230, 150, 150, radians(60),radians(240));
  arc(290,235,330,350, radians(180),radians(0));
  arc(160,360,90,350, radians(90),radians(270));
  arc(440,360,90,350, radians(270),radians(90));
  
  //body
  
  
  fill(252, 228, 212);
  quad(200,550,275,500,275,600,150,600);
  quad(400,550,325,500,325,600,450,600);
  rect(275,550,50,100)
  fill(99, 25, 66);
  quad(200,550,265,505,265,600,150,600);
  triangle(400,550,325,600,450,600);

  triangle(400,550,265,900,265,505);
 
  
  
  
 


  
  
}
