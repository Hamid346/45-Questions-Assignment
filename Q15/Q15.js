var guests = ["Marie Curie", "Leonardo da Vinci", "Isaac Newton"];
console.log("".concat(guests[1], ",\" Will not be joinning us.\""));
guests[1] = "Ali";
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", I would be honored if you could join me for dinner."));
}
