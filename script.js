let players = ["MS Dhoni", "Jadeja", "Rohit", "Virat"]
let runs = [45, 83, 90, 12];

players.push("Kane");   // Add to end

players.pop("Ruturaj"); // delete from end & return

runs.toString();     // coverts array to string

players.concat(runs);   // joins multiple arrays & return results

players.unshift("Rinku");      // add to start 

players.shift("Conway");        // delete from start and return

players.slice(1, 3);          // returns a poece of the array -->  strat indx, end indx

players.splice(2, 3, "Surya", "Bumrah");    // change original array (add, remove, replace) --> start indx, delCount, newElement

