const { count } = require("console");

let username = "Guest";

let newusername = username;
let newusername1 = "Gulzar";

console.log(newusername);
console.log(newusername1);


let User2026 = {

    name: "Gulzar",
    age: 24,
    city: "Karachi",
    country : "Pakistan"
};


let User2027 = User2026;

User2026.age = 59;
User2027.city = "Lahore";
User2026.city = "Islamabad";
console.log(User2026);
console.log(User2027);


