"use strict";
let name1 = "Hamid Naeem";
console.log("Lowercase: " + name1.toLowerCase());
console.log("Uppercase: " + name1.toUpperCase());
console.log("Titlecase: " + name1.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }));
