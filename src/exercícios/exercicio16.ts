// Exercício 16: Crie uma classe `Bank` que contém uma coleção de contas bancárias (classe `BankAccount`). Adicione métodos para calcular o saldo médio e encontrar a conta com o saldo mais alto.

class BankAccount1{
    private numeroDaConta: number;
    private saldo: number;

    constructor(numeroDaConta: number, saldo: number){
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo;
    }

    getNumeroDaConta(): number{
        return this.numeroDaConta;
    }

    getSaldo(): number{
        return this.saldo;
    }
}

class Bank1{
    private contas: BankAccount1[] = [];

    addConta(conta: BankAccount1): void{
        this.contas.push(conta);
        console.log(`A conta ${conta.getNumeroDaConta()} foi adicionada ao banco.`);
        
    }

    saldoMedio(): void{
        if(this.contas.length === 0){
            return console.log(`O banco não possui contas. Adicione contas primeiro.`);
        }

        let mediaTotal = 0;
        for(const conta of this.contas){
            mediaTotal += conta.getSaldo();
        }
        return console.log(`O saldo médio das contas do banco: '${mediaTotal / this.contas.length}'`);
    }

    maiorSaldo(){
        let maiorSaldo;

        if(this.contas.length === 0){
            return console.log(`O banco não possui contas. Adicione contas primeiro.`);
        } 

        maiorSaldo = this.contas.reduce((maiorSaldo, saldoAtual) => {
            return saldoAtual.getSaldo() > maiorSaldo.getSaldo() ? saldoAtual : maiorSaldo;
        }, this.contas[0]);

        return console.log(`A conta com maior saldo é: ${maiorSaldo.getNumeroDaConta()}`);
        
    }
}

const banco = new Bank1();

const contaBancaria1 = new BankAccount1(1234, 4500);
const contaBancaria2 = new BankAccount1(8542, 50);
const contaBancaria3 = new BankAccount1(4652, 1400);
const contaBancaria4 = new BankAccount1(9762, 65000);

banco.addConta(contaBancaria1);
banco.addConta(contaBancaria2);
banco.addConta(contaBancaria3);
banco.addConta(contaBancaria4);

banco.maiorSaldo();