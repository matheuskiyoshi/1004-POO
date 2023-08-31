class Person {
    name: string;
    age: number;
    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }
}

let pessoa1 = new Person('João', 20);
let pessoa2 = new Person('Maria', 30);
let pessoa3 = new Person('Carlos', 25);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);