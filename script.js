// ============================================================
// Feira Cultural Centro-Oeste — Colégio Simetria · 9º Ano
// Interações do site em JavaScript puro
// ============================================================

// --- 1. Menu muda de aparência ao rolar a página ---
const navbar = document.getElementById("navbar");

function atualizarNavbar() {
  if (window.scrollY > 40) {
    navbar.classList.add("rolado");
  } else {
    navbar.classList.remove("rolado");
  }
}

window.addEventListener("scroll", atualizarNavbar);
atualizarNavbar(); // garante o estado certo ao carregar

// --- 2. Menu hambúrguer no celular ---
const botaoMenu = document.getElementById("menu-toggle");
const menuMobile = document.getElementById("mobile-menu");
const iconeAbrir = document.getElementById("icon-open");
const iconeFechar = document.getElementById("icon-close");

botaoMenu.addEventListener("click", () => {
  const aberto = menuMobile.classList.toggle("aberto");
  iconeAbrir.style.display = aberto ? "none" : "block";
  iconeFechar.style.display = aberto ? "block" : "none";
});

// Fecha o menu ao clicar em um link
menuMobile.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("aberto");
    iconeAbrir.style.display = "block";
    iconeFechar.style.display = "none";
  });
});
