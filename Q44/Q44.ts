function Sandwich(...items: string[]): void {
    console.log("Here's your sandwich order:");
    for (let item of items) {
        console.log(`${item}`);
    }
    console.log("Enjoy your delicious sandwich!");
}

Sandwich("turkey", "cheddar", "lettuce", "tomato");
Sandwich("peanut butter", "jelly");
Sandwich("grilled cheese", "bacon");