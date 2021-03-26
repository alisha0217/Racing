canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

yellow_car_width = 100;
yellow_car_height = 90;

yellow_car_x = 10;
yellow_car_y = 10;

blue_car_width = 100;
blue_car_height = 90;

blue_car_x = 20;
blue_car_y = 20;

background_image = "racing.gif";

yellow_car_img = "yellow_car.png";
blue_car_img = "blue_car.png";


function uploadcar() {
    ctx.drawImage(blue_car_imgTag,blue_car_x,blue_car_y,blue_car_width,blue_car_height);  
    ctx.drawImage(yellow_car_imgTag,yellow_car_x,yellow_car_y,yellow_car_width,yellow_car_height);  
}

window.addEventListener("keydown", my_keydown);



// ---------------------------------------------------- ARROW KEYS --------------------------------------------------------------------------------



function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == "38") {
        up_yellow_car();
        console.log("up");
    }

    if (keyPressed == "40") {
        down_yellow_car();
        console.log("down");
    }

    if (keyPressed == "37") {
        left_yellow_car();
        console.log("left");
    }

    if (keyPressed == "39") {
        right_yellow_car();
        console.log("right");
    }


// ---------------------------------------------------- WASD KEYS ---------------------------------------------------------------------------------


    keyPressed = e.keyCode;
    if (keyPressed == "83") {
        up_blue_car();
        console.log("W");
    }

    keyPressed = e.keyCode;
    if (keyPressed == "65") {
        left_blue_car();
        console.log("A");
    }

    keyPressed = e.keyCode;
    if (keyPressed == "87") {
        down_blue_car();
        console.log("S");
    }

    keyPressed = e.keyCode;
    if (keyPressed == "68") {
        right_blue_car();
        console.log("D");
    }

}

// ---------------------------------------------------- FUNCTIONS YELLOW CAR --------------------------------------------------------------------------------

function up_yellow_car()
{
	if(yellow_car_y >=0)
	{
		yellow_car_y = yellow_car_y - 10;
		 uploadBackground();
		 uploadcar();
	}
}
function down_yellow_car()
{
	if(yellow_car_y <=500)
	{
		yellow_car_y =yellow_car_y + 10;
		uploadBackground();
		 uploadcar();
	}
}
function left_yellow_car()
{
	if(yellow_car_x >= 0)
	{
		yellow_car_x =yellow_car_x - 10;
		uploadBackground();
		 uploadcar();
	}
}
function right_yellow_car()
{
	if(yellow_car_x <= 700)
	{
		yellow_car_x =yellow_car_x + 10;
		uploadBackground();
		uploadcar();
   }
}

// ----------------------------------------------- FUNCTIONS BLUE CAR -----------------------------------------------------------------------------

function up_blue_car()
{
	if(blue_car_y >=0)
	{
		blue_car_y = blue_car_y - 10;
		 uploadBackground();
		 uploadcar();
	}
}
function down_blue_car()
{
	if(blue_car_y <=500)
	{
		blue_car_y =blue_car_y + 10;
		uploadBackground();
		 uploadcar();
	}
}
function left_blue_car()
{
	if(blue_car_x >= 0)
	{
		blue_car_x =blue_car_x - 10;
		uploadBackground();
		 uploadcar();
	}
}
function right_blue_car()
{
	if(blue_car_x <= 700)
	{
		blue_car_x =blue_car_x + 10;
		uploadBackground();
		uploadcar();
   }
}
	