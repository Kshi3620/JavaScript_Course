const marvel = ["thor", "spiderman", "hulk"]
const dc = ["batman", "superman", "flash"]

const arr1 = marvel.concat(dc)
console.log(arr1); // [ 'thor', 'spiderman', 'hulk', 'batman', 'superman', 'flash' ]

const arr2 = [...marvel, ...dc]
console.log(arr2); // [ 'thor', 'spiderman', 'hulk', 'batman', 'superman', 'flash' ]

const arr3 =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const arr4 = arr3.flat(Infinity)
console.log(arr4);

/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]