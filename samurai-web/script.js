// Inicializace AOS knihovny
AOS.init({
  duration: 800,
  once: true
});

// Plynulé scrollování tlačítka
document.querySelector(".cta").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
