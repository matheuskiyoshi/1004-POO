// Exercício 18: Crie uma classe `Shape` com método `draw()`. Crie subclasses como `Circle`, `Square` e `Triangle` com implementações de desenho.

abstract class Shape1 {
    abstract draw(context: CanvasRenderingContext2D | null): void;
}

class Circle1 extends Shape1{
    constructor(private radius: number){
        super();
    }

    draw(context: CanvasRenderingContext2D | null): void{
        context?.beginPath();
        context?.arc(context?.canvas.width / 2, context?.canvas.height / 1.68, this.radius, 0, 2*Math.PI);
        context?.stroke();
    }
}
class Square1 extends Shape1{
    constructor(private lado: number){
        super();
    }

    draw(context: CanvasRenderingContext2D | null): void{
        context?.beginPath();
        context?.rect(canvas.width / 2 - this.lado / 2, canvas.height / 2 - this.lado / 2, this.lado, this.lado);
        context?.stroke();
    }
}

class Triangle1 extends Shape1{
    constructor(private base: number, private altura: number){
        super();
    }

    draw(context: CanvasRenderingContext2D | null): void{
        context?.beginPath();
        context?.moveTo(canvas.width / 2 - this.base / 2, canvas.height / 2 + this.altura / 2);
        context?.lineTo(canvas.width / 2 + this.base / 2, canvas.height / 2 + this.altura / 2);
        context?.lineTo(canvas.width / 2, canvas.height / 2 - this.altura / 2);
        context?.closePath();
        context?.stroke();
    }
}

const canvas = document.getElementById('canvasShapes') as HTMLCanvasElement;
const context = canvas.getContext('2d');
const circle = new Circle1(60);
const square = new Square1(200);
const triangle = new Triangle1(200,200);

circle.draw(context);
square.draw(context);
triangle.draw(context);