# 📘 README - Blog Preview Card (Frontend Mentor)

Este projeto é baseado no desafio **[Blog Preview
Card](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS)**
do Frontend Mentor.\
O objetivo é recriar um cartão de blog responsivo com HTML e CSS,
adicionando interatividade em JavaScript.

---

## 🚀 Tecnologias usadas

- **HTML5** -- Estrutura do conteúdo.\
- **CSS3** -- Estilização com variáveis, tipografia e responsividade.\
- **JavaScript (DOM)** -- Manipulação dinâmica para alternância de
  idiomas e controle de interface.

---

## 🎨 Layout

O cartão contém: - Imagem de capa\

- Categoria do post\
- Data de publicação\
- Título e descrição\
- Informações do autor\
- Um seletor de idioma (PT / EN)

---

## 🖥️ Funcionalidades

### 1. Alternância de Idiomas

- O usuário pode escolher entre **Português (PT)** e **Inglês (EN)**.
- Ao clicar em cada opção, o conteúdo do card é atualizado
  dinamicamente.
- O idioma ativo recebe destaque visual (texto e borda amarela).

### 2. Menu de Seleção de Idioma

- O ícone de tradução abre/fecha a área de seleção de idiomas.
- Quando aberto, o ícone muda para a versão amarela.
- Quando fechado, retorna à versão padrão.

---

## 📜 Explicação do JavaScript

### Estrutura de textos

```js
const textos = {
  pt: { ... },
  en: { ... }
};
```

Criamos um objeto com os textos em **PT** e **EN**.

### Seletores do DOM

```js
const btnTraducao = document.getElementById("traducao");
const btnLang = document.querySelector(".none");
const EN = document.getElementById("en");
const PT = document.getElementById("pt");
```

Capturamos os elementos principais: ícone de tradução, container das
opções e botões PT/EN.

### Toggle do menu

```js
btnTraducao.addEventListener("click", function () {
  if (btnLang.style.display === "none" || btnLang.style.display === "") {
    btnLang.style.display = "inline-block";
    btnTraducao.src = "assets/trans-amarelo.svg";
  } else {
    btnLang.style.display = "none";
    btnTraducao.src = "assets/trans.svg";
  }
});
```

Aqui fazemos o **abre/fecha** do menu de idiomas e a troca da imagem do
botão.

### Alterar idioma

```js
EN.addEventListener("click", function () {
  h2.textContent = textos.en.h2;
  ...
  EN.classList.add("active");
  PT.classList.remove("active");
});
```

Cada botão substitui os textos e aplica a classe `.active` para destacar
o idioma selecionado.

---

## 📂 Estrutura de pastas

    📦 projeto
     ┣ 📜 index.html
     ┣ 📜 style.css
     ┣ 📜 script.js
     ┣ 📂 assets
     ┗ 📜 README.md

---

## ✨ Emerson Romana

Projeto desenvolvido como parte dos desafios do **Frontend Mentor**.
