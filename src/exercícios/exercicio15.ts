// Exercício 15: Crie uma hierarquia de classes para representar diferentes tipos de veículos. Cada classe deve ter métodos específicos, como `startEngine()` e `stopEngine()`.

abstract class Veiculo{

    constructor(public marca: string, public modelo: string, public ano: number){}

    startEngine(): void{
        console.log(`O motor do ${this.marca} ${this.modelo}-${this.ano} foi ligado.`);
    }
    
    stopEngine(): void{
        console.log(`O motor do ${this.marca} ${this.modelo}-${this.ano} foi desligado.`);
    }

}

class Carro extends Veiculo{
    constructor(public marca: string, public modelo: string, public ano: number){
        super(marca, modelo, ano);
    }

    acelerar(): void{
        console.log(`O ${this.modelo} está acelerando.`);
    }
}

class Moto extends Veiculo{
    constructor(public marca: string, public modelo: string, public ano: number){
        super(marca, modelo, ano);
    }

    empinar(): void{
        console.log(`O ${this.modelo} está empinando.`);
    }
}

const carro = new Carro('Toyota', 'RAV4', 2023);
carro.startEngine();
carro.acelerar();
carro.stopEngine();

const moto = new Moto('Harley Davidson', 'Sportster S', 2023);
moto.startEngine();
moto.empinar();
moto.stopEngine();