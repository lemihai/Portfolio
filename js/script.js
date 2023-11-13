
console.log('Hello, World!');

const cards = document.querySelectorAll('.card');

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Move the selected card to the center
      const cardRect = card.getBoundingClientRect();
      const carouselRect = document.getElementById('carousel').getBoundingClientRect();
      const offset = carouselRect.width / 2 - cardRect.width / 2 - cardRect.left + carouselRect.left;

      document.getElementById('carousel').style.transform = `translateX(${offset}px)`;
    });
  });
});
