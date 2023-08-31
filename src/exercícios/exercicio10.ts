// Exercício 10: Criar uma classe `Employee` com propriedades `name`, `role` e `salary`. Adicione um método que calcula um aumento de salário com base em uma porcentagem.

class Employee{
    constructor(public name: string, public role: 'gerente' | 'analista' | 'engenheiro' | 'assistente' | 'contador', public salary: number) {}

    private calculoSalarioComAcrescimo(): number{
        switch(this.role){
            case 'gerente':
                return this.salary * 1.12;
            case 'analista':
                return this.salary * 1.08;
            case 'engenheiro':
                return this.salary * 1.15;
            case 'assistente':
                return this.salary * 1.05;
            case 'contador':
                return this.salary * 1.10;
            default:
                return this.salary;
        }
    }

    salarioComAcrescimo(): string{
        const salario = this.calculoSalarioComAcrescimo().toFixed(2);
        return `O salário do(a) ${this.name} que ocupa a posição de '${this.role}' é de R$${salario}.`
    }
}

let gerente = new Employee('Ana', 'gerente', 10000);
console.log(gerente.salarioComAcrescimo());

let analista = new Employee('João', 'analista', 6000);
console.log(analista.salarioComAcrescimo());

let engenheiro = new Employee('Carlos', 'engenheiro', 8000);
console.log(engenheiro.salarioComAcrescimo());

let assistente = new Employee('Maria', 'assistente', 4500);
console.log(assistente.salarioComAcrescimo());

let contador = new Employee('Pedro', 'contador', 7000);
console.log(contador.salarioComAcrescimo());