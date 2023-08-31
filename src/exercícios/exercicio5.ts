// Exercício 5: criar uma classe 'Car' com os atributos 'make', 'model', 'year' e um método que descreva o carro.

class Car {
    make: string;
    model: string;
    year: number;

    constructor(model: string, make: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    descricaoCarro(): string{
        return `O carro é um ${this.model} da marca ${this.make} e do ano: ${this.year}.`
    }
}

let carro1 = new Car('Argo', 'FIAT', 2018);
console.log(carro1.descricaoCarro());

let carro2 = new Car('Virtus', 'Volkswagen', 2021);
console.log(carro2.descricaoCarro());

let carro3 = new Car('Civic', 'Honda', 2020);
console.log(carro3.descricaoCarro());