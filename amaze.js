var ballx;
var bally;
var move;
var totalB
var totalR

function sum(anArray, num){
  var count = 0;
  for (var i = 0; i < anArray.length; i++){
    if (anArray[i]==num){
      count+=1;        
    }
  }
  return count;
}

function setup(){
        createCanvas(600, 600);
        ballx = 25
        bally = 25
        move = true
        background(0)
        fill(255, 255, 255)
        rect(0, 0, 600, 600)
        fill(0, 0, 10)
        rect(100, 450, 485, 5)
        rect(50, 0, 5, 550)
        rect(100, 20, 5, 580)
        rect(0, 0, 5, 600)
        rect(0, 595, 600, 5)
        rect(595, 0, 5, 600)
        rect(0, 0, 600, 5)
        rect(100, 20, 485, 5)
        rect(580, 20, 5, 565)
        rect(180, 582.5, 405, 5)
        textSize(20)
        fill(0, 0, 40)
        text("Finish", 500, 525)
        loadPixels()
        totalB = sum(pixels, 10)
        totalF = sum(pixels, 40)
}

function draw(){
        background(0)
        fill(255, 255, 255)
        rect(0, 0, 600, 600)
        fill(0, 0, 10)
        rect(100, 450, 485, 5)
        rect(50, 0, 5, 550)
        rect(100, 20, 5, 580)
        rect(0, 0, 5, 600)
        rect(0, 595, 600, 5)
        rect(595, 0, 5, 600)
        rect(0, 0, 600, 5)
        rect(100, 20, 485, 5)
        rect(580, 20, 5, 565)
        rect(180, 582.5, 405, 5)
        textSize(50)
        fill(random(0, 255), random(0,255), random(0,255))
        text("LEVEL 3: KOTCH", 150, 250)
        textSize(20)
        fill(0, 0, 40)
        text("Finish", 500, 525)
        fill(245, 0, 0)
        rect(ballx, bally, 4, 4)
        //bally += 0.5

        if (keyIsDown(LEFT_ARROW) && move)
            ballx-=1

        if (keyIsDown(RIGHT_ARROW) && move)
            ballx+=1

        if (keyIsDown(UP_ARROW) && move)
            bally-=2

        if (keyIsDown(DOWN_ARROW) && move)
            bally+=2

         //Collision detection and "bouncing"
        loadPixels();
        if (sum(pixels,10)<totalB){
            ballx = 25
            bally = 25
        }

        if (sum(pixels,40)<totalF){
            ballx = 25
            bally = 25
        }
}