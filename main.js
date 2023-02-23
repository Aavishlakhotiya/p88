
var canvas= new fabric.Canvas('myCanvas');
player_x=0;
player_y=0;
hole_x=400;
hole_y=800;



function loadimg(){
	fabric.Image.fromURL("golf-h.png",function (Img) {
		hole_obj=Img;
		 hole_obj.scaleToWidth(50);
		 hole_obj.scaleToHeight(50);
		 hole_obj.set({
		 top:hole_y,
		 left:hole_x
	 });
	 canvas.add(hole_obj);
	 });
	new_image();
}

function new_image(){
    fabric.Image.fromURL("ball.png",function (Img) {
       ball_obj=Img;
	   ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
		ball_obj.set({
        top:player_y,
		left:player_y
    });
    canvas.add(ball_obj);
    });
}
    

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_y==hole_y)&&(ball_x==hole_x)){
		canvas.remove(ball_obj)
		getElmentById("h3").innerHTML="you have hit the Goal!";
		getElmentById("myCanvas").style.boderColour="red";
	}
	else{
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
	}
	function up()
{
  if(ball_y>0)
  {
ball_y=ball_y-block_image_height;
console.log("up arrow is pressed x="+ball_x+"y="+ball_y);
canvas.remove(ball_obj);
new_image();
  }
}

function down()
{
  if(player_y<500)
  {
player_y=player_y+blockimage_height;
console.log("down arrow is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
  }
}
function right()
{
  if(player_x<800)
  {
player_x=player_x+blockimage_width;
console.log("right arrow is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
  }
}

function left()
{
  if(player_x>0)
  {
player_x=player_x-blockimage_width;
console.log("left arrow is pressed x="+player_x+"y="+player_y);
canvas.remove(player_object);
player_update();
  }

}
}