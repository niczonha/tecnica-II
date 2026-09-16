
class Livro {
  #disponivel; 

  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.#disponivel = true;
  }

  get disponivel() {
    return this.#disponivel; 
  }

  emprestar() {
    if (this.#disponivel) {
      this.#disponivel = false;
      console.log(`Livro "${this.titulo}" emprestado.`);
    } else {
      console.log(`Livro "${this.titulo}" já está emprestado.`);
    }
  }

  devolver() {
    this.#disponivel = true;
    console.log(`Livro "${this.titulo}" devolvido.`);
  }
}


class Pessoa {
  #cpf; 

  constructor(nome, cpf, dataCadastro) {
    this.nome = nome;
    this.#cpf = cpf;
    this.dataCadastro = dataCadastro;
  }

  get cpf() {
    return this.#cpf; 
  }

  exibirDados() {
    console.log(`Nome: ${this.nome} | Cadastro: ${this.dataCadastro}`);
  }
}

class Usuario extends Pessoa {
  pegarLivro(livro) {
    livro.emprestar();
  }

  devolverLivro(livro) {
    livro.devolver();
  }
}

class Funcionario extends Pessoa {
  constructor(nome, cpf, dataCadastro, matricula, cargo) {
    super(nome, cpf, dataCadastro);
    this.matricula = matricula;
    this.cargo = cargo;
  }

  cadastrarUsuario(nome, cpf, dataCadastro) {
    console.log(`${this.nome} cadastrou o usuário ${nome}.`);
    return new Usuario(nome, cpf, dataCadastro);
  }

  cadastrarLivro(titulo, autor, anoPublicacao) {
    console.log(`${this.nome} cadastrou o livro "${titulo}".`);
    return new Livro(titulo, autor, anoPublicacao);
  }
}


const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new Livro("O Cortiço", "Aluísio Azevedo", 1890);

const usuario1 = new Usuario("João Silva", "123.456.789-00", "02/09/2026");
const usuario2 = new Usuario("Maria Oliveira", "987.654.321-00", "15/08/2026");

const funcionario1 = new Funcionario("Carlos Santos", "111.222.333-44", "01/01/2020", "F001", "Bibliotecário");
const funcionario2 = new Funcionario("Ana Costa", "555.666.777-88", "10/03/2021", "F002", "Assistente de Biblioteca");

