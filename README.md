## Udacity FE Web Developer Nanodegree Project 3: Classic Arcade Game

### Clueless Texter (A Frogger Variant)

[Play Clueless Texter](http://shawnclover.com/apps/cluelesstexter)

Our poor character can't stop texting, even when crossing the street. Help our oblivious texter cross San Francisco's busy Market Street amid six lanes of bicycles, cars, and speeding streetcars.

#### Game Play
* Use the four arrow keys to navigate the texter safely across the street without getting squished
* Traffic speeds up with each successful street crossing
* Each successful street crossing scores a point (world record at project submission = 28 points)
* You get three lives--number of spare lives remaining is indicated by the stars in the upper right
* Press Esc for new game

#### Customizations Made
* Changed all graphics to simulate a street scene rather than Frogger game (see attributions below)
* Created six different enemy types--bicycles, cars, and streetcars going in two directions
* Created render functions to draw the enemies on the screen using HTML Canvas
* Used a random seeder to initialise the enemies
* Created separate prototype.update functions for each of the six enemy types so that each has its own speed and direction
* Created a crash function to play squish sound, reset player to start, and deduct a life after a collision is detected in the enemy.prototype.update functions
* Created a success function to play the yipee sound upon reaching upper sidewalk, increase score by one point, and reset player to start
* Set input handlers for the four arrow keys and the esc key
* Created a formula to progressively increase game speed after each successful crossing without letting the speed get impossibly-fast too quickly
* Used unicode symbols to display remaining lives using HTML Canvas
* Created a game over function to prevent further play when number of lives = 0 and to display game over message and cheering sound if a score of 10 is reached
* Added sound effects (all Creative Commons from freesound.org)

#### Files Included
* index.html: default page to load CSS file and three JavaScript files and display the help icon
* css/style.css: sets a responsive-sized background image and aligns the help icon
* js/engine.js: provides the game loop functionality (update entities and render), draws the initial game board on the screen, and  calls the update and render methods on the player and enemy objects from app.js
* js/app.js: renders the enemy images and player image, sets game speed, provides new game and game over functions, listens for keyboard keys, plays sounds, draws score and lives remaining, and handles player collisions and successes
* js/resources.js: an image loading utility to ease the process of loading image files so that they can be used within your game. It also includes a simple "caching" layer so it will reuse cached images when loading the same image multiple times
* images/ : enemy images, player image, play area tiles, and help icon
* sounds/ : three wav files for sound fx
* README.md: you are here

#### Attributions
* Sound effects: freesound.org (Creative Commons)
* Texter character: Udacity's original char-boy.png asset modified by Shawn Clover
* Other graphics: drawn by Shawn Clover
* Background photo: Shawn Clover
* Help icon: Wikimedia Commons public domain image via Adobe