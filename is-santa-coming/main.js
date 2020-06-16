//Create a function that passes in one parametr, dataObject
//create two container variables
//getData() returns the day of the month for the specified date
//getMonth() returns the month in the specified date
//take into consideration January starts at 0
//check if it is the day AND year that is being checked in the conditional
//return true or false

function isSantaComing(dataObject){

var day = dataObject.getDate();
var month = dataObject.getMonth();

if(day === 24 && month === 11){
  return true;
} else
  return false;
}
