var userName = ["Admin", "Hamid", "Naeem"];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName[i], ", thank you for logging in again."));
    }
}
