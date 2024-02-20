function makeShirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "'I love TypeScript'"; }
    console.log("Size of the shirt is ".concat(size, " and the message on it is ").concat(message));
}
makeShirt2();
makeShirt2("medium");
makeShirt2("small", "'I love my Mom'");
