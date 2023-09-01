// Exercício 12: Crie uma classe `Shape` com método `calculateArea()`. Crie subclasses `Square`, `Triangle` e `Pentagon` que implementam esse método.

abstract class Shape{
    abstract calcularArea(): void;
}

class Pentagon extends Shape{
    lado: number;
    apotema: number;

    constructor(lado: number, apotema: number){
        super();
        if (lado <= 0 || apotema <= 0) {
            throw new Error('Os valores do lado e apótema devem ser maiores que zero.');
        }
        this.lado = lado;
        this.apotema = apotema;
    }

    calcularArea(): string{
        return `A área do pentágono é: ${(5 * this.lado * this.apotema)/2}`;
    }
}

class Triangle extends Shape{
    base: number;
    altura: number;
    
    constructor(base:number, altura: number){
        super();
        if (base <= 0 || altura <= 0) {
            throw new Error('Os valores da base e altura devem ser maiores que zero.');
        }
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): string {
        return `A área do triângulo é: ${(this.base * this.altura)/2}`;
    }
}

class Square extends Shape{
    lado;
    
    constructor(lado: number){
        super();
        if (lado <= 0) {
            throw new Error('O valor do lado deve ser maior que zero.');
        }
        this.lado = lado;
    }

    calcularArea(): string {
        return `A área do quadrado é: ${this.lado * this.lado}`;
    }
}

const pentagono = new Pentagon(5, 6); 
console.log(pentagono.calcularArea());


const triangulo = new Triangle(4, 8); 
console.log(triangulo.calcularArea());

const quadrado = new Square(5);
console.log(quadrado.calcularArea());