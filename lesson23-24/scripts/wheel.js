const wheel = document.querySelector('.flip__body');
let deg = 0;

document.addEventListener('wheel', (event) => {
    event.preventDefault();
    wheel.style.transform = 'rotateY(' + deg + 'deg)';
    deg += 180;
  });