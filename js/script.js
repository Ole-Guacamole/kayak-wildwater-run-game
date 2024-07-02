window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");



  
  

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }
  
  

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

      if (key === "ArrowLeft") {game.player.directionX = -1;}
        else if (key === "ArrowRight") {game.player.directionX = +1;}
        else if (key === "ArrowUp") {game.player.directionY = -1;}
        else if (key === "ArrowDown") {game.player.directionY = +1;}
        }
    }

  window.addEventListener("keydown", handleKeydown);

  // Add an event listener to the restart button
restartButton.addEventListener("click", function () {
  // Call the restartGame function when the button is clicked
  restartGame();
});


// The function that reloads the page to start a new game
function restartGame() {
  location.reload();
}

};