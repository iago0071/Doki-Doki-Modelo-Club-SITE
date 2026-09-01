// Coloque aqui os efeitos/interações do site.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});
function mostrarNeguinho() {
    document.getElementById("neguinho-container").style.display = "none";
    document.getElementById("easter-egg").style.display = "flex";
}