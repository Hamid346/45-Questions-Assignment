let guests: string[] = ["Marie Curie", "Ali", "Thomas Edison", "Nikola Tesla", "Galileo Galilei"];

console.log("I just found out that my new dinner table won’t arrive in time for the dinner, and I have space for only two guests.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Dear ${removedGuest}, I'm sorry to inform you that I can't invite you to dinner.`);
}

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you're still invited to dinner.`);
}

guests.splice(0, guests.length); // Remove the last two names from your list, so you have an empty list.

console.log(guests); // Print your list to make sure you actually have an empty list at the end of your program.
