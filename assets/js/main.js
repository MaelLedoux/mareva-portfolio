// Charger le header

fetch("layouts/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Erreur chargement header:", error));

// Charger le footer

fetch("layouts/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Erreur chargement footer:", error));

// Mouvement de l'image de fond à l'entrée de la souris

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  if (!hero) return;

  hero.addEventListener("mouseenter", () => {
    hero.classList.add("is-animated");
  });

  hero.addEventListener("mouseleave", () => {
    hero.classList.remove("is-animated");
  });
});
