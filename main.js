//Create a reference for canvas 

//Give specific height and width to the car image
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 100;
greencar_height = 90;

greencar_x = 10;
greencar_y = 10;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadgreencar; // setting a function, onloading this variable
	rover_imgTag.src = greencar_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}function up(){
	if(rover_y >= 0)
	{
		rover_y = rover_y -10;
		uploadBackground();
		uploadrover();
	}
}

function down(){
	if(rover_y <= 500)
	{
		rover_y = rover_y +10;
		uploadBackground();
		uploadrover();
	}
}

function left(){
	if(rover_x >= 0)
	{
		rover_x = rover_x -10;
		uploadBackground();
		uploadrover();
	}
}

function right(){
	if(rover_x <= 700)
	{
		rover_x = rover_x +10;
		uploadBackground();
		uploadrover();
	}
}


