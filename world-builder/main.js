function wordBuilder(wordToSpell){

  var array = [];
  var newWord = "";

  for(var index = 0; index < wordToSpell.length; index++){
    newWord += wordToSpell[index];
    array.push(newWord);
  }
  return array;
}
