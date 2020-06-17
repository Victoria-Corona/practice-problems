//create a function that takes in an array
//if number at index is odd, increment by one
//if even, decrement by one
//a conditional will check (%) if the number passed is even
//if even, decrement, else, increment
//push new value into the array
//return the new array outside of the for loop

function oddUpEvenDown(array){

  var newArray = [];

  for(var index = 0; index < array.length; index++){
    if(array[index] % 2){
      array[index]++;
      newArray.push(array[index]);
    } else {
      array[index]--;
      newArray.push(array[index]);
    }
  }
  return newArray;
}

// oddUpEvenDown([1, 2, 3, 4, 5]) // -> [2, 1, 4, 3, 6]
// oddUpEvenDown([23, 15, 18, 14, 32]) // -> [24, 16, 17, 13, 31]
// oddUpEvenDown([72, 212, 77, 124, 53]) // -> [71, 211, 78, 123, 54]
