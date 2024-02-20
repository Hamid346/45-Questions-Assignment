let currentUsers: string[] = ["Rida", "Naeem", "Erum", "Huda", "Kashaf"];
let newUsers: string[] = ["NAEEM", "NOOR", "KASHAF", "DUA", "HUDA"];

for (let newUser of newUsers) {
    let available = true;
    for (let currentUser of currentUsers) {
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log(`Sorry, ${newUser} is already taken. Please choose a different username.`);
            available = false;
            break;
        }
    }
    if (available) {
        console.log(`${newUser} is available.`);
    }
}
