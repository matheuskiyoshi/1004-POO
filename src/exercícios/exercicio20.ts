// Exemplo 20: Crie uma classe `Game` com propriedades `name` e `players`. Adicione métodos para adicionar e remover jogadores, e determinar se o jogo está ativo.

class Game{
    private name: string;
    private players: string[];
    private ligado: boolean;
    private tempoDeJogo: number | null;

    constructor(name: string){
        this.name = name;
        this.players = [];
        this.ligado = false;
        this.tempoDeJogo = null;
    }

    adicionarPlayer(playerName: string): void{
        if(!this.ligado){
            this.players.push(playerName);
            console.log(`${playerName} foi adicionado ao jogo ${this.name}.`);
        }else{
            console.log(`Não é possível adicionador jogadores enquanto o ${this.name} está ativo.`);
        }
    }

    removerPlayer(playerName: string): void{
        if(!this.ligado){
            const index = this.players.indexOf(playerName);
            if(index != -1){
                this.players.splice(index,1);
                console.log(`${playerName} foi removido do jogo ${this.name}.`);
            } else{
                console.log(`${playerName} não está no jogo ${this.name}`);               
            }
        } else{
            console.log(`Não é possível remover o ${playerName} enquanto o jogo ${this.name} estiver ativo.`);
        }
    }

    startGame(duracaoJogo: number): void{
        if(!this.ligado){
            if(this.players.length >=1 ){
                this.ligado = true;
                console.log(`O jogo ${this.name} foi iniciado com ${this.players.length} jogadores. O tempo de jogo acabará em ${duracaoJogo} segundos.`);

                this.tempoDeJogo = setTimeout(() => {
                    this.endGame();
                }, duracaoJogo*1000);
            }else{
                console.log(`Não é possível iniciar o jogo ${this.name} com menos de 1 jogador.`);
            }
        }else{
            console.log(`O jogo ${this.name} já está ativo.`);
        }
    }

    endGame(): void{
        if(this.ligado && this.tempoDeJogo !== null){
            this.ligado = false;
            clearTimeout(this.tempoDeJogo);
            console.log(`O jogo ${this.name} foi encerrado.`);
        }
    }

    jogoAindaLigado(): void{
        const aindaLigado = this.ligado;
        return console.log(`O jogo ${this.name} está ativo? ${aindaLigado}`);
    }
}

const jogo = new Game('Fifa');
jogo.adicionarPlayer('João');
jogo.adicionarPlayer('Luis');
jogo.adicionarPlayer('Lucas');
jogo.removerPlayer('Luis');

jogo.startGame(3);

const jogo2 = new Game('Starfield');
jogo2.adicionarPlayer('Marcos');
jogo2.startGame(10);

jogo2.jogoAindaLigado();

jogo2.adicionarPlayer('Lucas');
jogo2.startGame(2);

setTimeout(() => {
    jogo.jogoAindaLigado();
}, 4000);

