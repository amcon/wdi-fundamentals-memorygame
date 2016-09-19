var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];
/* Cards */
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/* function for board */
var board = document.getElementById('game-board');

   var createBoard = function() {
      for (var i=0; i<cards.length; i++) {
      var cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.setAttribute('data-card', cards[i]);
      cardElement.addEventListener('click', isTwoCards);
      board.appendChild(cardElement);
   }
}

/* See if there are cards in play */
var isTwoCards =function () {
 cardsInPlay.push(this.getAttribute('data-card'));
 /* Show this image */
 console.log(this.getAttribute('data-card'));
 if (this.getAttribute('data-card') === 'king') {
   this.innerHTML = '<img src="king.jpg">';
 } else {
   this.innerHTML = '<img src="queen.jpg">';
 }
 
 /* If there are 2 Cards, compare, then start over*/
 if (cardsInPlay.length === 2) {
   isMatch(cardsInPlay);
   cardsInPlay = [];
 }
}

/* function to alert if it matches */
var isMatch = function(cards) {
 
 if (cards[0] === cards[1]) {
   alert("You found a match!");
 } else {
   alert("Sorry, try again.");

 }
}

createBoard();