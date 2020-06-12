//Declare a function that is named and prepared to recieve two parameters of number and rangeObject
//Create a conditional to check if a number is between a min AND a max
//if it is, return true, if not, return false
function isWithinRange(number, rangeObject){

  if (number >= rangeObject["min"] && number <= rangeObject["max"]){
    return true;
  } else
    return false;
  }

console.log(isWithinRange(5, { min: 1, max: 9 }))
console.log(isWithinRange(12, { min: 15, max: 29 }));
console.log(isWithinRange(9, { min: 0, max: 9 }));
