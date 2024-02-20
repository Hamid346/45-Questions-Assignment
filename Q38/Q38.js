function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity("Islamabad");
describeCity("Lahore");
describeCity("Istanbul", "Turkey");
