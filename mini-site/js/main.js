// navigation
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

// Ouvre / ferme le menu (clic ou clavier)
function toggleMenu() {
  menu.classList.toggle("show");
  const expanded = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!expanded));
}

burger.addEventListener("click", toggleMenu);

// Accessibilité : le burger est focalisable (tabindex="0"), on active aussi Entrée / Espace
burger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});

// Optionnel : Fermer le menu quand on clique à l'extérieur
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
    burger.setAttribute("aria-expanded", "false");
  }
});

// Affiche chaque article lorsque l'utilisateur fait défiler la page
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll("article");

  function handleScroll() {
    articles.forEach((article) => {
      const rect = article.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        article.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
