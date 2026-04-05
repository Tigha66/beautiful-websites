// Enhance cards with 3D hover
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `perspective(1000px) rotateX(${(y - rect.height / 2) / 10}deg) rotateY(${(x - rect.width / 2) / 10}deg)`;
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});