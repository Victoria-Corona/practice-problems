function phAnalyzer(string){

  if (string >= 0 && string <= 6){
    console.log("acidic");
  } else if (string === 7){
    console.log("neutral");
  } else if (string >= 8 && string <= 14) {
    console.log("alkaline")
  } else
    console.log("invalid pH value")

}


// if (string <= 0 || string >= 6) {
//   console.log("Acidic")
// } else if (string === 7) {
//   console.log("Neutral")
// } else if (string <= 8) {
//   console.log("Basic"){

//   }
// }
// if less than 0 or greater than 14
