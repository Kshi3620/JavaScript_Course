const  name = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("Valorant")
 
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

console.log(gameName.slice(-5, 2));

const newString1 = "     hitesh   "
console.log(newString1.trim());

const url = "https://kshtiij.com/kshitij%20nehete"
console.log(url.replace("%20", "-"));
console.log(url.includes("kshitij"));

const newString2 = "kshitij-nehete-hello"
console.log(newString2.split('-'));