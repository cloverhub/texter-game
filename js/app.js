// Draw game environment elements on the screenm e.g. game level no.
var bugSpeed = 40;
var bugSpeedFast = 120;
var gameLevel = 1;
var lifeNumber = 3;

var InfoDisplay = function(){}
var GameOver = function(){}

InfoDisplay.prototype.render = function() {
    // Draw other game specific details like game level
    ctx.font="56px Verdana";
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.textAlign = "left";
    ctx.fillText("Level: " + gameLevel + "       Lives: " + lifeNumber,55,105,ctx.canvas.height); 
}


if (lifeNumber < 1) {
    // Draw other game specific details like game level
    ctx.font="56px Verdana";
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.textAlign = "center";
    ctx.fillText("Game Over",255,700,ctx.canvas.height); 
}


// Enemies our player must avoid
var EnemyCarBottom = function(x,y) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-car-bottom.png';
	this.x = x;
	this.y = y;
}

var EnemyCarTop = function(x,y) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-car-top.png';
	this.x = x;
	this.y = y;
}

var EnemyTrainOne = function(x,y) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-train1.png';
	this.x = x;
	this.y = y;
}

var EnemyTrainTwo = function(x,y) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-train2.png';
	this.x = x;
	this.y = y;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
EnemyCarBottom.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x += Math.round((Math.random()* 100) + bugSpeed) * dt;

	// Check for collision between bugs and player 
	// Reset player to starting position when any of the bugs collides with the player
	if ((this.x - player.x <  50 && this.y - player.y < 50) && 
		(this.x - player.x > -50 && this.y - player.y > -50)) {
		player.crash();
	}

	// Check if bug location has reached the right end, then reset bug's location to random starting point
	if (this.x > 600) {
	   this.x = -(Math.round(Math.random()*500));
	}
}

EnemyCarTop.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x -= Math.round((Math.random()* 100) + bugSpeed) * dt;

	// Check for collision between bugs and player 
	// Reset player to starting position when any of the bugs collides with the player
	if ((this.x - player.x <  50 && this.y - player.y < 50) && 
		(this.x - player.x > -50 && this.y - player.y > -50)) {
		player.crash();
	}

	// Check if bug location has reached the right end, then reset bug's location to random starting point
	if (this.x < 1) {
	   this.x = +(Math.round(Math.random()*500)+500);
	}
}


EnemyTrainOne.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x -= Math.round((Math.random()* 100) + bugSpeedFast) * dt;

	// Check for collision between bugs and player 
	// Reset player to starting position when any of the bugs collides with the player
	if ((this.x - player.x <  50 && this.y - player.y < 50) && 
		(this.x - player.x > -50 && this.y - player.y > -50)) {
		player.crash();
	}

	// Check if bug location has reached the right end, then reset bug's location to random starting point
	if (this.x < 1) {
	   this.x = +(Math.round(Math.random()*500)+500);
	}
}

EnemyTrainTwo.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x += Math.round((Math.random()* 100) + bugSpeedFast) * dt;

	// Check for collision between bugs and player 
	// Reset player to starting position when any of the bugs collides with the player
	if ((this.x - player.x <  50 && this.y - player.y < 50) && 
		(this.x - player.x > -50 && this.y - player.y > -50)) {
		player.crash();
	}

	// Check if bug location has reached the right end, then reset bug's location to random starting point
	if (this.x > 600) {
	   this.x = -(Math.round(Math.random()*500));
	}
}

// Draw the enemy on the screen, required method for game
EnemyCarBottom.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

EnemyCarTop.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

EnemyTrainOne.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

EnemyTrainTwo.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {
	this.playerImage = 'images/char-texter.png';
	this.x = x;
	this.y = y;
}

Player.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.

	this.playerImg = this.playerImage;
	this.x * dt;
	this.y * dt;
}

Player.prototype.handleInput = function(keynum) {
	switch(keynum) {
		case 'up':
			if(this.y > 50) {
				this.y = this.y - 83;
			}
			// player hits end, increase bugSpeed and gameLevel and reset player
			else {
				bugSpeed  = bugSpeed + (bugSpeed + gameLevel) * 1.5 / (gameLevel * gameLevel);
				bugSpeedFast  = bugSpeedFast + (bugSpeedFast + gameLevel) * 1.5 / (gameLevel * gameLevel);
				gameLevel = gameLevel + 1;
				// setTimeout(function(){player.reset()},1000);
				player.reset();
			}
			break;
		case 'down':
			if(this.y < 550){
				this.y = this.y + 83;
			}
			break;
		case 'left':
			if(this.x > 10){
				this.x = this.x - 100;
			}
			break;
		case 'right':
			if(this.x < 600){
				this.x = this.x + 100;
			}
			break;
		default:
			return;
	}
};  

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.playerImg), this.x, this.y);
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var infodisplay = new InfoDisplay();
var gameover = new GameOver();
var player = new Player(304,568);
var enemyCarTop1 = new EnemyCarTop(Math.round(Math.random()*100),60);
var enemyCarTop2 = new EnemyCarTop(Math.round(Math.random()*100),143);
var enemyTrain1 = new EnemyTrainOne(Math.round(Math.random()*100),226);
var enemyTrain2 = new EnemyTrainTwo(Math.round(Math.random()*100),309);
var enemyCarBottom1 = new EnemyCarBottom(Math.round(Math.random()*100),392);
var enemyCarBottom2 = new EnemyCarBottom(Math.round(Math.random()*100),475);
allEnemies = [enemyCarTop1, enemyCarTop2, enemyTrain1, enemyTrain2, enemyCarBottom1, enemyCarBottom2];

// If player collides subtract a life and reset player
Player.prototype.crash = function() {
	lifeNumber = lifeNumber - 1;
	if (lifeNumber === 0) {
		GameOver();
	}
	player.reset();
}

// Reset player position to starting point 
Player.prototype.reset = function() {
	// Default starting point for player, 
	// prefer to start always in middle of screen
	this.x = 304;
	this.y = 568;
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});
