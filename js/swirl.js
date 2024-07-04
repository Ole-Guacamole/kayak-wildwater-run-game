class Swirl {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 1100 + 70);
    this.top = Math.floor(Math.random() * 700 + 70);
    this.width = 100;
    this.height = 90;
    this.element = document.createElement("img");
    this.directions2 = ["leftdown", "leftup", "rightdown", "rightup"];
    this.direction2 =
      this.directions2[Math.floor(Math.random() * this.directions2.length)];
    this.element.src = "./images/Swirl.gif";
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
    if (this.direction2 === "rightdown") {
      this.top += 1;
      this.left += 1;
      this.updatePosition();
    } else if (this.direction2 === "leftdown") {
      this.top += 1;
      this.left -= 1;
      this.updatePosition();
    } else if (this.direction2 === "rightup") {
      this.top -= 1;
      this.left += 1;
      this.updatePosition();
    } else if (this.direction2 === "leftup") {
      this.top -= 1;
      this.left -= 1;
      this.updatePosition();
    }

    this.updatePosition();
  }
}
