class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 1100 + 70);
    this.top = 0;
    this.width = 75;
    this.height = 57;
    this.element = document.createElement("img");

    this.directions = ["left", "right", "straight"];
    this.direction =
      this.directions[Math.floor(Math.random() * this.directions.length)];

    this.element.src = "./images/shark-7265786_640.gif";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.top += 2;

    if (this.direction === "right") {
      this.left += 1;
    } else if (this.direction === "left") {
      this.left -= 1;
    } else if (this.direction === "straight") {
      this.left = 0;
    }

    this.updatePosition();
  }
}
