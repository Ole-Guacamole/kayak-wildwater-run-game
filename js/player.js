class Player {
    constructor (gameScreen,left,top,width,height,imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        /* direction x initially set to 0. It is used to specify the horizontal movement direction and can have the following values:
            0: not moving horizontally
            1: moving horizontally to the right
            -1: moving horizontally to the left */
       this.directionX = 0;
       this.directionY = 0; // veritcal movement
       this.element = document.createElement("img");

       this.element.src = imgSrc;
       this.element.style.position = "absolute";
       this.element.style.width = `${this.width}px`;
       this.element.style.height = `${this.height}px`;
       this.element.style.top = `${this.top}px`;
       this.element.style.left = `${this.left}px`;

       this.gameScreen.appendChild(this.element);
        
    }

    move () {
        this.left += this.directionX;
        this.top += this.directionY;

        if (this.left < 10) {
            this.left = 10;
        }

        if (this.top < 10) {
            this.top = 10;
        }

        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10
        }

        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.heigth = this.gameScreen.offsetHeight - this.height - 10
        }
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle)  {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false;
        }

    }
}