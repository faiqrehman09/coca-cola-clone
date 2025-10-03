const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function show(idx) {
  slides.forEach(s => s.classList.remove('active'));
  slides[idx].classList.add('active');
}
function next() {
  current = (current + 1) % slides.length;
  show(current);
}
function prev() {
  current = (current - 1 + slides.length) % slides.length;
  show(current);
}
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

// Auto-advance every 5 s
setInterval(next, 5000);
