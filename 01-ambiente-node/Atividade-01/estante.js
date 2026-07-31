// ===== LIVRO 1 =====
const livro1 = {
titulo: "Clean Code",
autor: "Robert C. Martin",
preco: 89.9,
estoque: 12,
};
// ===== LIVRO 2 — TROQUE os quatro valores abaixo =====
const livro2 = {
titulo: "A Razão Do Amor",
autor: "Ali Hazelwood",
preco: 65.00,
estoque: 10,
};

const livro3 = {
titulo: "Estilhaça-me",
autor: "Tahereh Mafi",
preco: 216.04,
estoque: 5,
};
// Esta linha entrega os dois livros para os outros arquivos usarem
module.exports = { livro1, livro2, livro3};