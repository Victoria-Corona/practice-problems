//define a function named dayFinder, it will pass in one parameter string
//within code block, function will find the day of the week
//use Date

function dayFinder(stringDate){
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const day = new Date(stringDate)
  const newDay = day.getDay();

  return days[newDay];

}
