const LivroFisico = require("./LivroFisico");
const LivroDigital = require("./LivroDigital");

const l1 = new LivroFisico("Para Todos os Garotos Que Já Amei ", "Jenny Han", 155.50, 12, 1.10);
console.log("");
const l2 = new LivroDigital("Dates & Dragons", "Kristy Boyce", 189.70, 10, 350,);

l1.descrever();
console.log("Frete: R$ " + l1.calcularFrete().toFixed(2));
console.log("");
l2.descrever();
console.log("Frete: R$ " + l2.calcularFrete().toFixed(2));

console.log("");
console.log("----- polimorfismo -----");
console.log("Frete do fisico: R$ " + l1.calcularFrete().toFixed(2));
console.log("Frete do digital: R$ " + l2.calcularFrete().toFixed(2));
