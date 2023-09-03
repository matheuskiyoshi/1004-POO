// Exercicio 14: Crie uma classe `Person` com propriedade `address`. Crie uma classe `Address` separada e associe-a à classe `Person`.

class Address {

    constructor(private rua: string, private bairro: string, private cidade: string, private cep: number){}

    getRua(): string{
        return this.rua;
    }

    getBairro(): string{
        return this.bairro;
    }

    getCidade(): string{
        return this.cidade;
    }

    getCep(): number{
        return this.cep;
    }

    stringEndereco(): string{
        return `${this.getRua()}, ${this.getBairro()}, ${this.getCidade()} - ${this.getCep()}`;
    }
}

class Person3{
    constructor(private nome: string, private idade: number, private address: Address){}

    getNome(): string{
        return this.nome;
    }

    getIdade(): number{
        return this.idade;
    }

    getAddress(): Address{
        return this.address;
    }

    informacoes(): string{
        return `Nome: ${this.getNome()} - ${this.getIdade()} anos - Endereço: ${this.getAddress().stringEndereco()}`;
    }
}

const enderecoPessoa5 = new Address('Rua principal', 'Centro', 'Brasília', 83495009);
const pessoa5 = new Person3('José', 42, enderecoPessoa5);


const enderecoPessoa6 = new Address('Avenida Central', 'Downtown', 'São Paulo', 12345000);
const pessoa6 = new Person3('Maria', 35, enderecoPessoa6);

console.log(pessoa5.informacoes());
console.log(pessoa6.informacoes());