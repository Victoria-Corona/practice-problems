//define a function that recieves a string, will return either boolean true or false
//within code block, run a conditional check to see if the code is:
//numbers only, has no spaces, is five digits long

// function zipCodeValidator(zipToValidate){
  // for(var index = 0; index < zipToValidate.length; index++){
  //   if(zipToValidate[index] === " "){
  //     return false;

  //     if(zipToValidate[index] < 5){
  //       return false;

  //       if(zipToValidate.isNan())
  //     }
  //   }
  // }
// }
function zipCodeValidator(ziptoValidate){
  return !isNaN(ziptoValidate) && ziptoValidate.length === 5
}
