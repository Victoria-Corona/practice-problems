function createRepeatingLetters (word, numOfRepeats){

  var results ="";
  for(var index = 0; index < word.length; index++){
    for(var x = 0; x < numOfRepeats; x++){
      results += word[index]
    }
  }
  return results
}

//for loop runs and another for loops goes inside that counts the repeats
//first for loop checks the word length
//and for every check, it'll run another for loop and so long as x is less than
//numOfRepeats, it'll run the nested for loop that many times
