function calculateCartPrice(...num){ // ... this is rest operator
  return num
}

console.log(calculateCartPrice(200, 300, 400)); // [ 200, 300, 400 ]

const user = {
  username : "kshitij",
  price : 199
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user) // username is kshitij and price is 199