const Livro = require("./Livro");

class LivroDigital extends Livro {
  #tamanhoArquivo;
  constructor(titulo, autor, preco, estoque, tamanhoArquivo) 
  {
    super(titulo, autor, preco, estoque);
    this.#tamanhoArquivo = tamanhoArquivo;
  }

  get tamanhoArquivo() 
  {
    return this.#tamanhoArquivo;
  }

  descrever() {
    super.descrever();
    console.log("Tipo: LivroDigital");
    console.log("Tamanho: " + this.#tamanhoArquivo + "MB");
  }

  calcularFrete() 
  {
    return 0;
  }
}

module.exports = LivroDigital;
