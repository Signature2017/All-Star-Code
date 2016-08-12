var x;
var stop;
var dx; 
function setup(){
	x = 0;
	dx = 1;
	createCanvas(500,500);
	stop = true
}
function draw(){
	x += dx; 
	rectMode(CENTER);
	background(0);
	rect(x,250,100,100);
	if(x>=width/2 && stop) {
		myBtn = document.createElement("button");
		myBtn.textContent = "Change direction!";
		$("body").append(myBtn);
		stop = false;
	}
	$("button").click(changeDxn);
function changeDxn() {
	dx = -1*dx 
	}
}