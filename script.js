// Hold last frame when video ends
const vid = document.getElementById('intro-video');
vid.addEventListener('ended', () => {
  vid.pause();
});

const io = new IntersectionObserver(
  es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
  { threshold: 0.07 }
);
document.querySelectorAll('.fi').forEach(el => io.observe(el));
