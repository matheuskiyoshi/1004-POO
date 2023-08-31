// Exercício 8: . Criar uma classe `Book` com propriedades `title`, `author` e `year`. Depois criar um método que retorna os detalhes do livro.

class Book {
    constructor(public title: string, public author: string, public year: number){}

    descricaoLivro(): string{
        return `Livro "${this.title}" do autor "${this.author}" publicado no ano de ${this.year}.`;
    }
}

const livro1 = new Book("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
console.log(livro1.descricaoLivro()); 

const livro2 = new Book("Dom Quixote", "Miguel de Cervantes", 1605);
console.log(livro2.descricaoLivro());

const livro3 = new Book("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997);
console.log(livro3.descricaoLivro());