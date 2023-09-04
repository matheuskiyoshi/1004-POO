// Exercício 17: Crie uma classe `Animal` com métodos `eat()` e `makeSound()`. Crie subclasses como `Dog`, `Cat` e `Bird` com implementações específicas.

interface Animal{
    nome: string;
    eat(): void;
    makeSound(): void;
}

class Dog implements Animal{
    constructor(public nome: string){}

    eat(): void{
        console.log(`${this.nome} está comendo ração.`);
    }

    makeSound(): void {
        console.log(`${this.nome} está latindo: Au Au Au`);
    }
}

class Cat implements Animal{
    constructor(public nome: string){}

    eat(): void {
        console.log(`${this.nome} está comendo sachê`);
    }
    makeSound(): void {
        console.log(`${this.nome} está miando: Miaau Miau`);
    }
}
class Bird implements Animal{
    constructor(public nome: string){}

    eat(): void {
        console.log(`${this.nome} está comendo alpiste`);
    }
    makeSound(): void {
        console.log(`${this.nome} está piando: Pi pi pi pi`);
    }
}

const dog = new Dog('Rex');
const cat = new Cat('Nina');
const bird = new Bird('Chico');

dog.eat();
dog.makeSound();

cat.eat();
cat.makeSound();

bird.eat();
bird.makeSound();