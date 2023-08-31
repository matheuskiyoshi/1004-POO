// Exercício 3: criar uma classe rectangle, passar os atributos de 'width' e 'length' e um método para calcular a área.

class Rectangle{
    constructor(public width: number, public height: number){}

    areaDoRetangulo():string {
        return `A área do retângulo com comprimento de ${this.width} e altura de ${this.height} é: ${this.width * this.height}.`
    }
}

let retangulo1 = new Rectangle(2, 5);
console.log(retangulo1.areaDoRetangulo()); 

let retangulo2 = new Rectangle(3, 7);
console.log(retangulo2.areaDoRetangulo()); 

let retangulo3 = new Rectangle(4, 8);
console.log(retangulo3.areaDoRetangulo()); 

let retangulo4 = new Rectangle(6, 9);
console.log(retangulo4.areaDoRetangulo()); 

let retangulo5 = new Rectangle(10, 3);
console.log(retangulo5.areaDoRetangulo()); 
