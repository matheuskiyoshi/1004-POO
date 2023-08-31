// Exercício 9: Criar uma classe `Product` com propriedades 'name', 'price' e 'quantity'. Depois foram adicionados métodos para calcular o valor total e exibir os detalhes.

class Product{
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    private equacaoValorTotal():number | false {
        if(this.price > 0 && this.quantity > 0){
            return this.price * this.quantity;
        }else{
            return false;
        }

    }

    valorTotal(): string {
        const valorTotal = this.equacaoValorTotal();
        if(valorTotal){
            return `O valor total do produto '${this.name}' é de: R$${valorTotal}!`
        }else{
            return `Preço ou quantidade inválida. Tente novamente.`
        }
    }
}

let produto1 = new Product('Chocolate', 8.99, 10);
console.log(produto1.valorTotal());

let produto2 = new Product('Ovos', 7.90, 0);
console.log(produto2.valorTotal());

let produto3 = new Product('leite', 5.79, 21);
console.log(produto3.valorTotal());