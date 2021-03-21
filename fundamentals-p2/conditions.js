// Basic if else conditional
/* Write an if condition to check that age is between 
   14 and 90 inclusively.

   “Inclusively” means that age can reach the edges 14 or 90.
*/
let age = 101;
if (age >= 14 && age <= 90) {
  console.log("Valid range");
}

/* Write an if condition to check that age is NOT
   between 14 and 90 inclusively

   Create two variants: the first one using NOT !, the second one – without it
*/
if (!(age >= 14 && age <= 90)) {
  console.log("Age out of range");
}

if (age < 14 || age > 90) {
  console.log("Age out of range");
}

// A question about "if"
/* Which of these alerts are going to execute?
   What will the results of the expressions be inside if(...)?
*/
if (-1 || 0) alert("first"); // this one
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third"); // this one

// Check the login
let user = prompt("Who's there?");
if (user === "" || user === null) {
  alert("Canceled");
} else if (user !== "Admin") {
  alert("I don't know you");
} else {
  let pass = prompt("Password: ");
  if (pass === "" || pass === null) {
    alert("Canceled");
  } else if (pass !== "TheMaster") {
    alert("Wrong password");
  } else {
    alert("Welcome!");
  }
}
