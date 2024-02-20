function makeAlbum(artist: string, title: string, tracks?: number): void {
    let musicAlbum: any = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        musicAlbum.tracks = tracks;
    }
    return musicAlbum;
}

let album1 = makeAlbum("The Beatles", "Abbey Road");
let album2 = makeAlbum("Queen", "A Night at the Opera");
let album3 = makeAlbum("Nirvana", "Nevermind", 12);

console.log(album1);
console.log(album2);
console.log(album3);
