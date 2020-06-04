// function decimalPlaceCounter(stringNumber){

//     var container = 0;
//     var ifZero = 0;

//   for (var index = 0; index < stringNumber.length; index++){
//     if(stringNumber[index] === "."){
//       for(var counter = 0; counter < stringNumber[counter]; counter++){
//         container++;
//       }
//       return container;
//     }
//   } return ifZero;
// }
//counting forward only counts the numbers before the decimal place, not after HAHA

//create a function
//have a container variable to store the placements after the decimal
//look at each character number of the string
//checking for "." in the string
//if ".", a new for loop should be declared to pick up from that spot
//for every placement, the number goes into the container
//return from within the if statement because we are focused from there


//The Right Solution
function decimalPlaceCounter(stringNumber) {
  var counter = 0;
  for (var i = stringNumber.length - 1; i > 0; i--) {
    if (stringNumber[i] === ".") {
      return counter;
    }
    counter++
  }
  return 0;
}


console.log(decimalPlaceCounter("127.245"));
console.log(decimalPlaceCounter("145"));
console.log(decimalPlaceCounter("23.00"));
