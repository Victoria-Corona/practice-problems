function meanCalculator(numbersArray) {
var sum = 0;
  for(var count=0; count < numbersArray.length; count++){
    sum += numbersArray[count];
  }
  var total = sum / numbersArray.length;
  return total;
}
