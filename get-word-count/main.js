function getWordCount(sentence) {

  var total = 0; //my container

for(var count = 0; count < sentence.length; count++) {

  if(sentence[count] === " "){
    total += 1;
  }
}
  total += 1;
return total;
}
