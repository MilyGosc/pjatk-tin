let currentWeekDay = new Date().getDay();

if (currentWeekDay % 2 == 0) {
    console.log("Dziś jest parzysty dzień tygodnia");
} else {
    console.log("Dziś jest nieparzysty dzień tygodnia");
}