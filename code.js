// Immediately Invoked Function Expression (IIFE)

(function chai(){
  // named IIFE
  console.log(`DB Coonnected`);
}) (); // DB Connected

( (name) => {
  // unnamed IIFE
  console.log(`DB connected ${name}`);
}) ("Kshitij"); // DB connected Kshitij