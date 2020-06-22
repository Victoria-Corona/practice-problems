//define a function that takes an array parameter
//within code block, take the highest number and subtracct from the lowest

function payscaleAnalyzer(payList){

  var arrayMin = payList[0];
  var arrayMax = payList[0];

  for(var index=0; index < payList.length; index++){
    if(payList[index] > arrayMax){
      arrayMax = payList[index];
      }
    else if (payList[index] < arrayMin)
      arrayMin = payList[index];

    }
  console.log(arrayMin);
  console.log(arrayMax);
  return arrayMax - arrayMin;
}

// if array[index is]< array[index] then reassign
// if array[index] is > array[index] then reassign
//28, 34, 21, 39
