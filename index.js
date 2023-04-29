const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');

card1.addEventListener('click', () => {
  window.location.href = './pages/p1.html';
});

card2.addEventListener('click', () => {
  window.location.href = './pages/p2.html';
});

card3.addEventListener('click', () => {
  window.location.href = './pages/p3.html';
});
card4.addEventListener('click', () => {
  window.location.href = './pages/p4.html';
});