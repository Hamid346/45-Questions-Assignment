var guests = ["Marie Curie", "Leonardo da Vinci", "Isaac Newton"];
console.log("".concat(guests[1], " will not be joining us."));
guests[1] = "Ali";
console.log("I just found a bigger dinner table, so now more space is available.");
// Add one new guest to the beginning of your array.
guests.unshift("Galileo Galilei");
// Add one new guest to the middle of your array.
guests.splice(guests.length / 2, 0, "Thomas Edison");
// Use push() to add one new guest to the end of your list.
guests.push("Nikola Tesla");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", I would be honored if you could join me for dinner."));
}
