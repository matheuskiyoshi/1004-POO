// Exercício 6: Criar uma classe 'Student' com os atributos 'name' e 'grades' sendo um vetor que recebe as notas e um método para calcular a média desse aluno.

class Student{
    constructor(public name: string, private grades:number[]){}
    
    calcularMedia(): number{
        if(this.grades.length === 0){
            return 0;
        }
       const soma = this.grades.reduce((soma, valor) => soma + valor , 0);
       const media = soma/this.grades.length;

       return media;
    }

    media(): string{
        const media = this.calcularMedia();

        return `A média do aluno ${this.name} é: ${media}.`
    }
}

let aluno1 = new Student('João', [6,5,7]);
console.log(aluno1.media());

let aluno2 = new Student('Maria', [8, 9, 7.5, 8.5]);
console.log(aluno2.media());

let aluno3 = new Student('Pedro', [0]);
console.log(aluno3.media()); 