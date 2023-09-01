// Exercício 19: Crie uma classe `Company` com propriedades `name` e `employees`. Adicione métodos para adicionar e remover funcionários, e calcular a folha de pagamento.

class Employee2{
    constructor(public name: string, public role: 'gerente' | 'analista' | 'engenheiro' | 'assistente' | 'contador', public salary: number) {}

    calculoSalarioComAcrescimo(): number{
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
}

class Company {

    constructor(public name: string){}

    private funcionarios: Employee2[] = [];

    adicionarFuncionario(funcionario: Employee2): void {
        this.funcionarios.push(funcionario);
        console.log(`O(A) funcionário(a): '${funcionario.name}' foi adicionado(a).`);
    }

    removerFuncionario(funcionario: Employee2): void {
        const index = this.funcionarios.indexOf(funcionario);
        
        if(index !== -1){
            this.funcionarios.splice(index,1);
            console.log(`O(A) funcionário(a): '${funcionario.name}' foi removido(a).`);
        }else{
            console.log(`${funcionario.name} não é um funcionário(a) dessa companhia.`)
        }
    }

    folhaDePagamento(): void {
        let total = 0;
        for(const funcionario of this.funcionarios){
            total += funcionario.calculoSalarioComAcrescimo();
        }
        return console.log(`A folha de pagamento total da companhia '${this.name}' é de: 'R$${total}'`);
    }
}

const minhaCopanhia = new Company("Minha Empresa");

const funcionario1 = new Employee2("João",'gerente', 5500);
const funcionario2 = new Employee2("Maria",'assistente', 3200);
const funcionario3 = new Employee2("Fernando",'contador', 4350);

minhaCopanhia.adicionarFuncionario(funcionario1);
minhaCopanhia.adicionarFuncionario(funcionario2);
minhaCopanhia.adicionarFuncionario(funcionario3);

minhaCopanhia.removerFuncionario(funcionario2);
minhaCopanhia.folhaDePagamento();