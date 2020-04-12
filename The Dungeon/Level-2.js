//Conditional rendering, different approaches

//Using if else
/* 
    To use if else a function need to be declared
    e.g 
*/

function conditionalRendering() {
  if (true) {
    return console.log("statement if true");
  } else {
    return console.log("statement if false");
  }
}

/* 
    Using ternary operator.
    Using ternary operator can be convinient as ternary operator is considered an expression rather that a statement, like if-else.
    e.g
*/

true ? console.log("statement if true") : console.log("statement if false");
//here return is just a placeholder for the statement

/* 
    Using &&
    Like the ternary operator && can be used to create an expression instead of statement.
    && operator should be used like this
    Condition && Expression
*/

true && console.log("It returned this statement");

//where as
false && console.log(`This statement won't execute`);
