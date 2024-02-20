var currentUsers = ["Hamid", "Naeem", "Danish", "Ali", "Anas"];
var newUsers = ["NAEEM", "Ahmad", "Ehmad", "Majid", "HUDA"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var available = true;
    for (var _a = 0, currentUsers_1 = currentUsers; _a < currentUsers_1.length; _a++) {
        var currentUser = currentUsers_1[_a];
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log("Sorry, ".concat(newUser, " is already taken. Please choose a different username."));
            available = false;
            break;
        }
    }
    if (available) {
        console.log("".concat(newUser, " is available."));
    }
}
