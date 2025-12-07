const accountId = "1234567890";
let accountEmail = "JohnDoe@gmail.com";
let accountPassword = "securePassword123";
let accountCity = "New York";
let accountState;
let accountCountry = "Pakistan";



// accountId = 2 // not allowed

accountEmail = "newSecure@gmail.com";
accountPassword = "newSecurePassword456";
accountCity = "Los Angeles";
accountCountry = "USA";


console.log(accountId);
console.table({accountEmail, accountPassword, accountCity, accountState, accountCountry});
