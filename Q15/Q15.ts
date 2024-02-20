let guests :string [] = ["Marie Curie", "Leonardo da Vinci", "Isaac Newton"];

console.log(`${guests[1]}," Will not be joinning us."`);
guests[1] = "Ali";

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would be honored if you could join me for dinner.`);
}
