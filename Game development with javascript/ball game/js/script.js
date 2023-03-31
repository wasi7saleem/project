var count;
var t = Date.now();
var speed = 25;

window.onload = function() {
   
	let count = 0;

	document.onkeydown = function() {
		count += 1;
		speed = 25;

		//moves ball
		y -= 35;

		function draw() {
		//clears canvas
		context.clearRect(0, 0, 600, 400);

		//redraws ball
		context.beginPath();
		context.arc(x, y, 50, 0, 2 * Math.PI);
		context.fillStyle="red";
		context.fill();
	  
		//draws count value
		context.font = "25px Arial";
		context.fillStyle='white';
		context.fillText('Count: ' + count, 20, 30);

		//calculates time difference
		var timePassed = (Date.now() - t) / 1000;
		t = Date.now();

		//adds gravity
		if(y <= 750) {
			speed += 250 * timePassed;
			y += speed*timePassed;
        }

        
		//resets score when ball is dropped
		if(y > 350) {
			count = 0;
			y = 350;
		}

        //reset score if ball touches ceiling
        if(y < 50) {
			count = 0;
			y = 50;
		}

		
		window.requestAnimationFrame(draw);	
		}
		draw();
		
	}


	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = 300;
	var y = 350;

	context.arc(x, y, 50, 0, 2 * Math.PI);
	context.fillStyle="red";
	context.fill();
}