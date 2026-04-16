const numero = "51942303829";

document.querySelectorAll('.whatsapp').forEach(btn => {
  btn.addEventListener('click', () => {
    window.open(`https://wa.me/${numero}`, '_blank');
  });
});

document.querySelector('.whatsapp-float').addEventListener('click', () => {
  window.open(`https://wa.me/${numero}`, '_blank');
});