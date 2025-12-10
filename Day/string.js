const name = "Gulzar";
const value = "$50";

console.log(`Hello my name is ${name} and my Salary in Bussines is ${value}`)


const Website = 'Guluzar.com';

console.log(Website.length);
console.log(Website.charAt(8));
console.log(Website.charAt(7));
console.log(Website.trim());

const newString = Website.substring(0, 4)
console.log(newString);
console.log(Website.toUpperCase());
console.log(Website.toLowerCase());


const url = "https://www.Gulzar.com/learn/javascript/";

console.log(url.includes("Gulzar.com"));
console.log(url.includes("python"));
console.log(url.startsWith("https"));
console.log(url.endsWith("/"));

const name2 = " Gulzar HUssain ";
console.log(name2.trim());
console.log(name2.replace("Gulzar HUssain", "Gulu YTZONE"));
console.log(name2.replaceAll("G","g",));
console.log(name2.replace(" ","_"));


let arr = ["gulzar","huSsain","yTzone"];

let newarr = arr.join("_");
console.log(newarr);
console.log(newarr.repeat(5));
console.table({name, value, Website, url, name2, arr, newarr});
