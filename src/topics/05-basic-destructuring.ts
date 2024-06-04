interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

//comando para añadir las propiedades faltantes Ctrl + .
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

// const { song: anotherSong, songDuration: duration, details: detail } = audioPlayer;
// const { author: Author} = detail;

// console.log('song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', Author);

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegueta'];

console.error('Personaje 3: ', trunks)
export{};