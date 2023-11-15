function left() {
  var cards = document.querySelectorAll('.card');
  var firstCard = cards[0];
  var firstOrder = parseInt(getComputedStyle(firstCard).order);

  for (var i = 0; i < cards.length - 1; i++) {
      var currentCard = cards[i];
      var nextCard = cards[i + 1];
      var nextOrder = parseInt(getComputedStyle(nextCard).order);

      currentCard.style.order = nextOrder;
  }

  // Move the last card to the first position
  cards[cards.length - 1].style.order = firstOrder;

  // Update the classes based on the new order
  cards.forEach(function (box) {
      var order = getComputedStyle(box).order;
      // ... (your existing code to update classes)
      console.log("Box " + box.id + " has flex order: " + order);
  });

  for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var order = parseInt(getComputedStyle(card).order);

      if (order === 0) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('left');
          console.log("here");
      } else if (order === 1) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('middle');
      } else if (order === 2) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('right');
      } else if (order === 3) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('right-right');
      } else if (order === 4) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('left-left');
      }
  }
}


function right() {
  var cards = document.querySelectorAll('.card');
  var lastCard = cards[cards.length - 1];
  var lastOrder = parseInt(getComputedStyle(lastCard).order);

  for (var i = cards.length - 1; i > 0; i--) {
      var currentCard = cards[i];
      var prevCard = cards[i - 1];
      var prevOrder = parseInt(getComputedStyle(prevCard).order);

      currentCard.style.order = prevOrder;
  }

  // Move the first card to the last position
  cards[0].style.order = lastOrder;

  // Update the classes based on the new order
  cards.forEach(function (box) {
      var order = getComputedStyle(box).order;
      // ... (your existing code to update classes)
      console.log("Box " + box.id + " has flex order: " + order);
  });
  
  
  for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var order = parseInt(getComputedStyle(card).order);

      if (order === 0) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('right-right');
          console.log("here");
      } else if (order === 1) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('left-left');
      } else if (order === 2) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('left');
      } else if (order === 3) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('middle');
      } else if (order === 4) {
          card.classList.remove(card.classList.item(2));
          card.classList.add('right');
      }
  }

}
