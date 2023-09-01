// Exercício 11: Crie uma classe `Bank` que contém uma coleção de contas bancárias. Adicione métodos para adicionar contas, fazer transferências e calcular o saldo total do banco.

class Titular {
    constructor(private id: number, private nome: string, private cpf: string) {}
}
  
class ContaBancaria {
    constructor(private numero: number, private digito: number, private saldo: number, private proprietario: Titular) {}

    getNumero(): number {
        return this.numero;
    }

    getSaldo(): number {
        return this.saldo;
    }

    deposito(entrada: number): void {
        this.saldo += entrada;
    }

    saque(saida: number): void {
        this.saldo -= saida;
    }
}
  
class Bank {
    private contasBancarias: ContaBancaria[] = [];

    addContas(contas: ContaBancaria[]): void {
        this.contasBancarias.push(...contas);
    }

    fazerTransferencia(valor: number, numeroContaOrigem: number, numeroContaDestino: number): void {
        let contaDestino = this.contasBancarias.find((value: ContaBancaria) => {
        return value.getNumero() == numeroContaDestino;
        });

        if (!contaDestino) {
        throw Error("A conta destino não existe");
        }

        let contaOrigem = this.contasBancarias.find((value: ContaBancaria) => {
        return value.getNumero() == numeroContaOrigem;
        });

        if (!contaOrigem) {
        throw Error("A conta origem não existe");
        }

        if (valor > contaOrigem.getSaldo()) {
        throw Error("Limite insuficiente para tranferência");
        }
    
        contaDestino.deposito(valor);
        contaOrigem.saque(valor);

        console.log("Estado atual das contas após a transferência:");
        this.contasBancarias.forEach((conta) => {
            console.log(`Conta ${conta.getNumero()}: Saldo total = ${conta.getSaldo()}`);
        });
    }
}
  
  const titular1 = new Titular(1, "Marcos Aurélio", "123456789");
  const titular2 = new Titular(2, "Ana Silva", "987654321");
  const titular3 = new Titular(3, "João Santos", "456789123");
  const titular4 = new Titular(4, "Carla Rodrigues", "789123456");
  const titular5 = new Titular(5, "Pedro Almeida", "321654987");
  
  const conta1 = new ContaBancaria(1234, 5, 1000, titular1);
  const conta2 = new ContaBancaria(5678, 10, 5000, titular2);
  const conta3 = new ContaBancaria(9012, 15, 200, titular3);
  const conta4 = new ContaBancaria(3456, 20, 80000, titular4);
  const conta5 = new ContaBancaria(7890, 25, 1500, titular5);
  
  let bank = new Bank();
  bank.addContas([conta1, conta2, conta3, conta4, conta5]);
  
  bank.fazerTransferencia(200, conta1.getNumero(), conta2.getNumero());
  bank.fazerTransferencia(300, conta2.getNumero(), conta3.getNumero());
  bank.fazerTransferencia(150, conta3.getNumero(), conta4.getNumero());
  bank.fazerTransferencia(50, conta4.getNumero(), conta5.getNumero());
  bank.fazerTransferencia(100, conta5.getNumero(), conta1.getNumero());