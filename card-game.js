class VisualCard   {
    constructor(card) {
        this.card = card;
    }

}










   // Get a card dealer:
     let dealer = new Dealer();
     // Get some cards:
     let card = dealer.getCard();

let drawCard = function(card) {
    Rect(20, 20, 150, 200, 7);





    
    fill(card.color);
    textSize(100)
    text(card.suit, 50, 50);
};

var setup = function(){
    createCanvas(1000, 800)

}
var draw = function(){
    background("forestgreen");
    drawcard9(Card);
};













