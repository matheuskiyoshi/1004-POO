// Exercício 13: Crie uma classe `Playlist` que contém objetos da classe `Song`. Adicione métodos para adicionar músicas, remover músicas e calcular a duração total da playlist.

class Song{
    nome: string;
    duracao: number;
    artista: string;
    
    constructor(nome: string, duracao: number, artista: string){
        this.nome = nome;
        this.duracao = duracao;
        this.artista = artista;
    }
}

class Playlist {

    constructor(public name: string){}

    public musicas: Song[] = [];

    addSong(musica: Song): void {
        this.musicas.push(musica);
        console.log(`A música '${musica.nome} - ${musica.artista}' foi adicionada à playlist.`);
    }

    removeSong(musica: Song): void {
        const index = this.musicas.indexOf(musica);
        if(index !== -1){
            this.musicas.splice(index,1);
            console.log(`A música '${musica.nome}' foi removida.`);
        }else{
            console.log(`A música: '${musica.nome}' não pertence a lista.`);
            
        }
    }

    duracaoDaPlaylist(): void{
        let totalMinutos = 0;
        let totalSegundos = 0;

        for(const musica of this.musicas){
            const minutos = Math.floor(musica.duracao);
            const segundos = (musica.duracao - minutos) * 100;
            totalMinutos += minutos;
            totalSegundos += segundos;
        }
        totalMinutos += Math.floor(totalSegundos/60);
        totalSegundos %= 60;

        return console.log(`A duração total da playlist é de: '${totalMinutos} minutos e ${Math.floor(totalSegundos)} segundos'`);
        
    }
}

const minhaPlaylist = new Playlist('Favoritas');

const musica1 = new Song('Count Me Out', 4.44, 'Kendrick Lamar');
const musica2 = new Song('Sober to Death', 5.04, 'Car Seat Headrest');
const musica3 = new Song('sanjake', 3.03, 'cleopatrick');
const musica4 = new Song('Salad Days', 2.26, 'Mac DeMarco');
const musica5 = new Song('The Scale', 3.25, 'Interpol');

minhaPlaylist.addSong(musica1);
minhaPlaylist.addSong(musica2);
minhaPlaylist.addSong(musica3);
minhaPlaylist.addSong(musica4);
minhaPlaylist.addSong(musica5);

minhaPlaylist.removeSong(musica4);

minhaPlaylist.duracaoDaPlaylist();