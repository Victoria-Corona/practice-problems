function accountNumberProtector(cardNumberString){
  var newCardDisplay = "**";
  var cardNum = ""

  for(let index=0; index < cardNumberString.length; index++){
    if(index > 11){
      cardNum += cardNumberString[index];
    }
  }
  return newCardDisplay + cardNum;
}
