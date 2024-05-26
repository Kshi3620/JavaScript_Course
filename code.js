// ************************ interesting ****************

console.log(addOne(5)) // 6 Since We have declare function it will show outout

function addOne(num){
  return num + 1
}


console.log(addTwo(5)) // Error - We have declare function but it is in variable

const addTwo = function(num){
  return num + 2
}

