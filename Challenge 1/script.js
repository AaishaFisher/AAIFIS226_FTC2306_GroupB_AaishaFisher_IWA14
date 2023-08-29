const firstName = 'John';
const age = 35;
const hobbyValue = 'Coding';


    //represents the parameter that the function takes
const logTwice = (parameter) => {  //arrow function syntax
  console.log(parameter);
  console.log(parameter);
}

function greet () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobbyValue}!`);
}

greet();

//no variable(const) declaration.
//hobby was declared twice. Changed to hobbyValue so no 
//  clashing.
// '(...)' => was missing a name
// makes more sense to change function name from hobby to greet
// variable names in the logTwice string did not match 
// console.log and ; !!!