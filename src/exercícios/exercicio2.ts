// Exercício 2. A mesma coisa que o exercício 1 só que adicionando um método de saudação na classe com o nome da pessoa.

class Person2 {
    name: string;
    age: number;
    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }

    saudacao(): string{
        return `Olá, me chamo ${this.name}!`
    }
}

let pessoa12 = new Person2('João', 20);
let pessoa22 = new Person2('Maria', 30);
let pessoa32 = new Person2('Carlos', 25);

console.log(pessoa12);
console.log(pessoa12.saudacao());
console.log(pessoa22);
console.log(pessoa22.saudacao());
console.log(pessoa32);
console.log(pessoa32.saudacao());