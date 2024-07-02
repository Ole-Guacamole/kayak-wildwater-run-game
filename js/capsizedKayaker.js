class CapsizedKayaker {
    constructor (gameScreen) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 1100 + 70);
        this.top = 0;
        this.width = 100;
        this.height = 219;
        this.element = document.createElement("img")

        this.element.src ="./images/yellowKayaker.gif"
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

    updatePostion () {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    move () {
        this.top+=1;
        this.updatePostion();
    }
}