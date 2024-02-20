function describeCity(city: string, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Islamabad");
describeCity("Lahore");
describeCity("Istanbul", "Turkey");
