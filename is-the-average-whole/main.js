function isTheAverageWhole(numbersArray){
  var sum = 0;

  for(var start = 0; start < numbersArray.length; start++){
    sum += numbersArray[start];
  }
  var total = sum/numbersArray.length;

  if(total % 1){
    return false;
  } else
  return true;
}
