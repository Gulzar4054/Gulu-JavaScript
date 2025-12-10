// ======= 1. Case Methods =======
let str = "hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"

// ======= 2. Trim Methods =======
let space = "   hello   ";
console.log(space.trim());      // "hello"
console.log(space.trimStart()); // "hello   "
console.log(space.trimEnd());   // "   hello"

// ======= 3. Substring / Slice =======
let text = "JavaScript";
console.log(text.slice(0,4));      // "Java"
console.log(text.substring(4,10)); // "Script"
console.log(text.substr(4,3));     // "Scr"

// ======= 4. Search Methods =======
let word = "Hello Gulzar";
console.log(word.indexOf("Gul"));   // 6
console.log(word.lastIndexOf("l")); // 9
console.log(word.includes("Hello")); // true
console.log(word.startsWith("He"));  // true
console.log(word.endsWith("zar"));   // true

// ======= 5. Replace =======
let msg = "Hello Gulzar";
console.log(msg.replace("Gulzar", "Hitesh")); // "Hello Hitesh"
console.log("banana".replaceAll("a","A"));    // "bAnAnA"

// ======= 6. Split / Join =======
let names = "Gulzar,Hitesh,Ali";
console.log(names.split(","));      // ["Gulzar","Hitesh","Ali"]
let arr = ["Gulzar","Hitesh","Ali"];
console.log(arr.join("-"));         // "Gulzar-Hitesh-Ali"

// ======= 7. Repeat =======
console.log("Ha".repeat(3));       // "HaHaHa"

// ======= 8. Char Access =======
console.log(str.charAt(0));        // "h"
console.log(str.charCodeAt(0));    // 104 (ASCII code)

// ======= 9. Template Literal =======
let nameVar = "Gulzar", age = 18;
console.log(`Hello ${nameVar}, you are ${age} years old.`);

// ======= 10. Padding =======
let num = "5";
console.log(num.padStart(3,"0"));  // "005"
console.log(num.padEnd(3,"*"));    // "5**"

// ======= 11. Repeat / Convert =======
console.log(String(123));          // "123"
console.log(Boolean(""));          // false
console.log(Number("123"));        // 123

// ======= 12. Advanced Search =======
console.log("abc def ghi".match(/d/)); // ["d"]
console.log("abc def ghi".search(/f/)); // 6
console.log("abc def ghi".replace(/ /g, "_")); // "abc_def_ghi"

// ======= 13. Iteration =======
for(let char of "Gulzar"){
    console.log(char);
}

// ======= 14. Template Multi-line =======
let multi = `Hello
Gulzar
World`;
console.log(multi);

// ======= 15. Includes / IndexOf edge =======
console.log("Hello".includes("h")); // false (case sensitive)
console.log("Hello".indexOf("H") !== -1); // true

// ======= 16. Converting to Array =======
console.log(Array.from("Gulzar")); // ["G","u","l","z","a","r"]

// ======= 17. Reverse String =======
let rev = "Gulzar".split("").reverse().join("");
console.log(rev); // "razluG"

// ======= 18. Char Access Alternative =======
console.log("Gulzar"[0]); // "G"

// ======= 19. startsWith / endsWith with position =======
console.log("JavaScript".startsWith("Script",4)); // true
console.log("JavaScript".endsWith("Script",10)); // true

// ======= 20. localeCompare =======
console.log("a".localeCompare("b")); // -1 (a < b)
console.log("b".localeCompare("a")); // 1 (b > a)
console.log("a".localeCompare("a")); // 0

// ======= 21. raw Template =======
console.log(String.raw`Hello\nWorld`); // "Hello\\nWorld"

// ======= 22. search with regex =======
console.log("I love JS".search(/JS/)); // 7

// ======= 23. repeat multi =======
console.log("abc".repeat(2)); // "abcabc"

// ======= 24. valueOf =======
console.log("Gulzar".valueOf()); // "Gulzar"

// ======= 25. normalize =======
console.log("ê".normalize("NFD")); // "ê"

// ======= 26. matchAll =======
for(const match of "test1 test2".matchAll(/\d/g)){
    console.log(match[0]); // "1" then "2"
}

// ======= 27. padStart / padEnd examples =======
console.log("7".padStart(3,"0")); // "007"
console.log("7".padEnd(3,"*"));   // "7**"

// ======= 28. trimStart / trimEnd =======
console.log("  hello  ".trimStart()); // "hello  "
console.log("  hello  ".trimEnd());   // "  hello"

// ======= 29. slice with negative =======
console.log("Gulzar".slice(-3)); // "zar"

// ======= 30. repeat + pad =======
console.log("Ha".repeat(3).padEnd(10,"*")); // "HaHaHa****"

// ======= 31. includes + case =======
console.log("Hello".toLowerCase().includes("he")); // true

// ======= 32. chaining =======
console.log("  Gulzar  ".trim().toUpperCase().slice(0,4)); // "GULZ"

// ======= 33. backticks expression =======
let a=5, b=10;
console.log(`Sum = ${a+b}`); // "Sum = 15"

// ======= 34. split by char =======
console.log("Gulzar".split("")); // ["G","u","l","z","a","r"]

// ======= 35. match with global =======
console.log("abc abc".match(/abc/g)); // ["abc","abc"]

// ======= 36. replace with function =======
console.log("abc".replace(/a/, ()=>"X")); // "Xbc"

// ======= 37. slice + negative =======
console.log("abcdef".slice(-4,-1)); // "bcd"

// ======= 38. substring edge =======
console.log("abcdef".substring(2)); // "cdef"

// ======= 39. substr edge =======
console.log("abcdef".substr(2,3)); // "cde"

// ======= 40. repeat + split =======
console.log("ab".repeat(3).split("")); // ["a","b","a","b","a","b"]

// ======= 41. startsWith + endsWith =======
console.log("JavaScript".startsWith("Java")); // true
console.log("JavaScript".endsWith("Script")); // true

// ======= 42. length property =======
console.log("Gulzar".length); // 6

// ======= 43. charCodeAt =======
console.log("A".charCodeAt(0)); // 65

// ======= 44. fromCharCode =======
console.log(String.fromCharCode(65)); // "A"

// ======= 45. indexOf edge =======
console.log("Gulzar".indexOf("z")); // 3

// ======= 46. lastIndexOf edge =======
console.log("Gulzar".lastIndexOf("a")); // 4

// ======= 47. includes case =======
console.log("Gulzar".includes("z")); // true

// ======= 48. chaining example =======
console.log("  Gulzar  ".trim().replace("Gul","Ali").toUpperCase()); // "ALIZAR"

// ======= 49. split + map =======
console.log("1,2,3".split(",").map(Number)); // [1,2,3]

// ======= 50. repeat + template =======
console.log(`${"Ha".repeat(3)}!`); // "HaHaHa!"
