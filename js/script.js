window.onload = function () {
  
  // Getting Elements from the DOM
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const restartButton2 = document.getElementById("restart-button-2");

  // Eventlisteners for Buttons
  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
  restartGame();
  });

  restartButton2.addEventListener("click", function () {
  restartGame();
  });

  // Function for starting the Game
  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }
  // Function to handle the keyboard Input to move the player
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowDown",
      "ArrowUp"
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      if (key === "ArrowLeft") {game.player.directionX -= 1;}
        else if (key === "ArrowRight") {game.player.directionX += 1;}
        else if (key === "ArrowUp") {game.player.directionY -= 1;}
        else if (key === "ArrowDown") {game.player.directionY += 1;}
        }
     

    }

  window.addEventListener("keydown", handleKeydown);




// The function that reloads the page to start a new game
function restartGame() {
  location.reload();
}

};