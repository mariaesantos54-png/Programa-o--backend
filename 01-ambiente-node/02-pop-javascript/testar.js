const Livro = require("./Livro");

const livro1 = new Livro("A Razão Do Amor", "RAli Hazelwood", 65.0, 10);
const livro2 = new Livro("Estilhaça-me", "Tahereh Mafi", 216.04, 5);

console.log(livro1.titulo);
console.log(livro2.titulo);
console.log(livro1.preco);

livro1.preco = 50; // inválido → recusa
console.log(livro1.preco);

livro1.descrever();
const valor = livro1.valorEmEstoque();
console.log("Valor total em estoque: R$ " + valor);

