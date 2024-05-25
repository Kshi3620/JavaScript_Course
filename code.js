

let myDate = new Date()

console.log(myDate); // 2024-05-25T08:55:57.730Z
console.log(myDate.toString()); // Sat May 25 2024 14:26:38 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); // 25/5/2024

console.log(typeof(myDate)); // object

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toString()); // Tue Jan 23 2024 00:00:00 GMT+0530 (India Standard Time)

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toString()); // Sat Jan 14 2023 05:30:00 GMT+0530 (India Standard Time)


let myTimeStamp  = Date.now()
console.log(myTimeStamp.toString()); // 1716627914933

console.log(Math.round(Date.now()/1000)); 1716628667

let newDate = new Date()

console.log(newDate.toLocaleDateString('default', {
    weekday : "long",
})); // Saturday

