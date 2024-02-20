function Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Here's your sandwich order:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("".concat(item));
    }
    console.log("Enjoy your delicious sandwich!");
}
Sandwich("turkey", "cheddar", "lettuce", "tomato");
Sandwich("peanut butter", "jelly");
Sandwich("grilled cheese", "bacon");
