function makeAlbum(artist, title, tracks) {
    var musicAlbum = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        musicAlbum.tracks = tracks;
    }
    return musicAlbum;
}
var album1 = makeAlbum("The Beatles", "Abbey Road");
var album2 = makeAlbum("Queen", "A Night at the Opera");
var album3 = makeAlbum("Nirvana", "Nevermind", 12);
console.log(album1);
console.log(album2);
console.log(album3);
