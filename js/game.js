class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameEndScreenVictory = document.getElementById("game-end-victory");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      219,
      "./images/redKayakCenter.gif"
    );
    this.height = 800;
    this.width = 1400;
    this.obstacles = [];
    this.capsizedKayakers = [];
    this.swirls = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
  }

  start() {
   
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
    
    
    
  }

  // Loop Method to call the update method 60 times per minute
  gameLoop() {
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  
  // Update Method to show Movement (update the positions)
  // Detect collisions
  // Detect if objects left the GameScreen
  // update lives and score
  // Call endGame function if lives are 0 or score reached 6


  update() {
    this.player.move();

    const scoreDisplay = document.getElementById("score");
    const livesDisplay = document.getElementById("lives");

    
  
  

    // Check for collision (if yes decrease lives) => and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // If the player's car collides with an obstacle
      if (this.player.didCollide(obstacle)) {
        // Remove the obstacle element from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        livesDisplay.innerText = `${this.lives}`;
        // Update the counter variable to account for the removed obstacle
     
        i--;
      } // If the obstacle is off the screen (at the bottom/ left side / or right side)
      else if (obstacle.top > this.height || obstacle.left > this.width || obstacle.left < 0) {
        
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        
        // Update the counter variable to account for the removed obstacle
        
        i--;
      }
    }

     // Swirls
     for (let i = 0; i < this.swirls.length; i++) {
      const swirl = this.swirls[i];
      swirl.move();

      // If the player's Kayak collides with a swirl
      if (this.player.didCollide(swirl)) {
        // Remove the swirl element from the DOM
        swirl.element.remove();
        // Remove swirl object from the array
        this.swirls.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        livesDisplay.innerText = `${this.lives}`;
        // Update the counter variable to account for the removed swirl
     
        i--;
      } // If the swirl is off the screen (at the bottom)
      else if (swirl.top > this.height || swirl.left > this.width || swirl.top < 0 || swirl.left < 0) {
       
        // Remove the swirl from the DOM
        swirl.element.remove();
        // Remove swirl object from the array
        this.swirls.splice(i, 1);
        
        // Update the counter variable to account for the removed swirl
        
        i--;
      }
    }


    // Check for collision with capsizedKayaker (if yes increase score) => and if there is a capsized Kayaker still on the scren
    for (let i = 0; i < this.capsizedKayakers.length; i++) {
      const kayaker = this.capsizedKayakers[i];
      kayaker.move();

      if (this.player.didCollide(kayaker)) {
        // Remove the capsized Kay element from the DOM
        kayaker.element.remove();
        // Remove obstacle object from the array
        this.capsizedKayakers.splice(i, 1);
        // Increase score by 1
        this.score++;
        scoreDisplay.innerText = `${this.score}`;
        
        i--;

      } else if (kayaker.top > this.height) {
        kayaker.element.remove();
        // Remove capsizedKayaker object from the array
        this.capsizedKayakers.splice(i, 1);
    
        // decrease score by 1
        this.score--;
        scoreDisplay.innerText = `${this.score}`;

        // Update the counter variable to account for the removed capsized Kayaker
        i--;
      }
    }

  

    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() < 0.02 && this.obstacles.length < 5) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    // Create a new capsized Kayaker based on a random probability
    // when there is no other capsized Kayaker on the screen
    if (Math.random() < 0.01 && this.capsizedKayakers.length < 1) {
      this.capsizedKayakers.push(new CapsizedKayaker(this.gameScreen));
    }
// Create a new swirl based on a random probability
    // when there is no other capsized Kayaker on the screen
    if (Math.random() < 0.01 && this.swirls.length < 2) {
      this.swirls.push(new Swirl(this.gameScreen));
    }

  // If the lives are 0, end the game
  if (this.lives === 0) {
    this.endGameReason = "outOfLives"; // Set the reason for game end
    this.endGame();
    
  }

  if (this.score === 6) {
    this.endGameReason = "reachedScore"; // Set the reason for game end
    this.endGame();
    
    
  }
  }


  endGame() {
    
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.capsizedKayakers.forEach((kayaker) => kayaker.element.remove());
    this.swirls.forEach((swirl) => swirl.element.remove());
    this.gameIsOver = true;

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    if (this.endGameReason === "reachedScore") {this.gameEndScreenVictory.style.display = "block"};
    if (this.endGameReason === "outOfLives") {this.gameEndScreen.style.display = "block"};
  }
}
