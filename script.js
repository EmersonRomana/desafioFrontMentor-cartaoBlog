// ===============================
// Textos em cada idioma
// ===============================
const textos = {
  pt: {
    h2: "Aprendizado",
    h3: "Publicado em 21 de dezembro de 2023",
    h1: "Fundamentos de HTML e CSS",
    p: "Essas linguagens são a espinha dorsal de todo site, definindo estrutura, conteúdo e apresentação.",
  },
  en: {
    h2: "Learning",
    h3: "Published 21 Dec 2023",
    h1: "HTML & CSS foundations",
    p: "These languages are the backbone of every website, defining structure, content, and presentation.",
  },
};

// ===============================
// Seletores do DOM
// ===============================
const btnTraducao = document.getElementById("traducao");
const btnLang = document.querySelector(".none");
const EN = document.getElementById("en");
const PT = document.getElementById("pt");
const h2 = document.querySelector("h2.traduzir");
const h3 = document.querySelector("h3.traduzir");
const h1 = document.querySelector("h1.traduzir");
const p = document.querySelector("p.traduzir");

// ===============================
// Menu de idiomas (abre/fecha)
// ===============================
btnTraducao.addEventListener("click", function () {
  if (btnLang.style.display === "none" || btnLang.style.display === "") {
    btnLang.style.display = "inline-block";
    btnTraducao.classList.add("active"); // adiciona borda preta
    btnTraducao.src = "assets/trans-amarelo.svg";
  } else {
    btnLang.style.display = "none";
    btnTraducao.classList.remove("active"); // rmove a borda de ativado
    btnTraducao.src = "assets/trans.svg";
  }
});

// ===============================
// Trocar para inglês
// ===============================
EN.addEventListener("click", function () {
  h2.textContent = textos.en.h2;
  h3.textContent = textos.en.h3;
  h1.textContent = textos.en.h1;
  p.textContent = textos.en.p;

  // alterna ativo
  EN.classList.add("active");
  PT.classList.remove("active");
});

// ===============================
// Voltar para português
// ===============================
// Trocar para português
PT.addEventListener("click", function () {
  h2.textContent = textos.pt.h2;
  h3.textContent = textos.pt.h3;
  h1.textContent = textos.pt.h1;
  p.textContent = textos.pt.p;

  // alterna ativo
  PT.classList.add("active");
  EN.classList.remove("active");
});
