var
apple= 0;
seethru=255;
function setup() {
	createCanvas(500, 500);
  background(apple,255,230);  
}


function draw() {
  
  //circle
  stroke(255,255,127);
  strokeWeight(10); 
  fill(255,255,127,150); 
  ellipse(mouseX,mouseY+50,200,20);
  fill(36,95,103,255);
  stroke(123,250,189);
  strokeWeight(5); 
  rect(150,apple,apple,50);
  fill(239,22,182,seethru);
  seethru=seethru-1;
  strokeWeight(0);
  textSize(26);
  textFont("Helvetica");
  text('How is it Going?',apple,150);
  stroke(255);
  fill(255);
  line(apple,0,100,apple);
 
}

function mousePressed(){
  if(apple>=300){
    apple=0;
  }else{
   apple= apple+10;
  }
  }

