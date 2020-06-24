//define a function named spellChecker that takes two arguments
//first para has a string of attempts array and second has
//string of correct array
//compare both arrays and put the correct spelling into one
//new array, and then the other in a "incorrect" category



function spellChecker(userWords, correctWords){

  var correctSpelling = [];
  var incorrectSpelling = [];
  var results = {correctSpelling, incorrectSpelling}

  for(var index = 0; index < userWords.length; index++){
      if(userWords[index] === correctWords[index]){
        correctSpelling.push(userWords[index]);
      } else {
        incorrectSpelling.push(userWords[index]);
      }
  }
  return results;
}

console.log(spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"]));
console.log(spellChecker(["jam", "breat", "sound"], ["jam", "bread", "sound"]));
console.log(spellChecker(["java", "CDS", "HTMO"], ["java", "CSS", "HTML"]))
