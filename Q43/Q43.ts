let greatMagicians: any = [];
function makeGreat(magicians: string[]): any {
    
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    console.log(greatMagicians);
}

function showMagicians2(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
magicians = ["Harry Houdini", "David Blaine", "Criss Angel"];

greatMagicians = makeGreat([...magicians]);

console.log (magicians);
console.log(greatMagicians);