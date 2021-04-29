class VisualCard {
    constructor(card) {
      this.card = card;
    }
  
    x = 20;
    y = 20;
    isDragging = false;
  xOffset = 0;
  yOffset = 0;
  
    dragging() {
      if (
        mouseX > this.x &&
        mouseX < this.x + 150 &&
        mouseY > this.y &&
        mouseY < thisy + 200
      ) {
        this.isDragging = true;
        return true;
      } else {
        return false;
      }
    }
  
    drag() {
      if (this.isDragging) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    //♥ ♦ ♠ ♣
    getIcon() {
      if (this.card.suit === "Diamonds") {
        return "♦";
      } else if (this.card.suit === "Hearts") {
        return "♥";
      } else if (this.card.suit === "Spades") {
        return "♠";
      } else if (this.card.suit === "Clubs") {
        return "♣";
      }
    }
  
    draw() {
      push();
      {
        this.drag();
        translate(this.x, this.y);
  
        fill("white");
        rect(0, 0, 150, 200, 7);
  
        fill(this.card.color);
        textSize(30);
        textAlign(LEFT);
        text(this.getIcon(), 10, 55);
        textAlign(RIGHT);
        text(this.getIcon(), 140, 160);
  
        fill(this.card.color);
        textSize(70);
        textAlign(CENTER);
        text(this.getIcon(), 77, 120);
  
        textSize(30);
        textAlign(LEFT);
        text(this.card.name, 10, 30);
        textAlign(RIGHT);
        text(this.card.name, 140, 190);
      }
      pop();
    }
  }
  // Get a card dealer:
  let dealer = new Dealer();
  
  // Get some cards:
  
  let hand = dealer.getHand();
  
  let visualHand = [];
  
  for (i = 0; i < hand.length; i++) {
    const card = hand[i];
    let visualCard = new VisualCard(card);
    visualHand.push(new VisualCard(card));
  }
  
  let initDraw = visualHand.length;
  
  var setup = function () {
    createCanvas(1000, 800);
  };
  
  var draw = function () {
    background("bisque");
    visualHand.forEach((vc) => vc.draw());
  };
  
  window.mousePressed = function () {
    for (let index = 0; index < visualHand.length; index++) {
      const xyz = visualHand[index];
      xyz.dragging();
    }
    // visualHand.forEach(vc => vc.dragging());
  };
  
  window.mouseReleased = function () {
    // visHand[1].isDragging = false;
  };