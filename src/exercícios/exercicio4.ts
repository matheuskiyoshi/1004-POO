// Exercício 4: criar uma classe circle com a propriedade 'radius' e um método para calcular a área.

class Circle{
    constructor(public radius:number){}

    calcularArea(): string{
        return `A área do círculo de raio ${this.radius} é: ${(Math.PI * this.radius * this.radius).toFixed(2)}.`
    }
}

let circulo1 = new Circle(10);
console.log(circulo1.calcularArea());

let circulo2 = new Circle(5);
console.log(circulo2.calcularArea());

let circulo3 = new Circle(7.5);
console.log(circulo3.calcularArea());

let circulo4 = new Circle(15);
console.log(circulo4.calcularArea());

let circulo5 = new Circle(3.2);
console.log(circulo5.calcularArea());