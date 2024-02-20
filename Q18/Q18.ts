// Store the locations in an array.
let places = ["Paris", "Sydney", "Tokyo", "New York", "Cape Town"];

// Print your array in its original order.
console.log("Original order: ", places);

// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order: ", [...places].sort());

// Show that your array is still in its original order by printing it.
console.log("Original order: ", places);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order: ", [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log("Original order: ", places);

// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("Reversed order: ", places);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("Original order: ", places);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("Alphabetical order: ", places);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.reverse();
console.log("Reverse alphabetical order: ", places);
