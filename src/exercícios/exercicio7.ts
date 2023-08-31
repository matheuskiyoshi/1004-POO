// Exercício 7: Criar uma classe `BankAccount` com propriedades `balance` e `owner`. Dsepois adicionar métodos para 'depositar' e 'sacar' dinheiro.

class BankAccount{
    balance: number;
    owner: string;

    constructor(balance: number, owner: string){
        this.balance = balance;
        this.owner = owner;
    }

    sacarDinheiro(valor: number): void{
        if(valor > 0 && valor <= this.balance){
            this.balance -= valor;
            console.log(`${this.owner} o seu saque foi concluído com sucesso. Saldo atual: ${this.balance}.`);  
        } else if(valor <= 0){
            console.log(`${this.owner} o valor: ${valor} deve ser maior que 0.`);
        }else{
            console.log(`${this.owner} o seu saldo é insuficiente para sacar ${valor}. Saldo atual: ${this.balance}`);   
        }
    }

    depositarDinheiro(valor: number): void{
        if(valor <= 0){
            console.log(`Valor de depósito incorreto, tente outro valor.`);
        } else{
            this.balance += valor;
            console.log(`${valor} foram depositados com sucesso! Saldo atual: ${this.balance}.`);
        }
    }
}

let usuario1 = new BankAccount(1000, 'José');
usuario1.sacarDinheiro(500);
usuario1.depositarDinheiro(20);
usuario1.sacarDinheiro(700);
usuario1.depositarDinheiro(-10);