function removeNullValues(array){

  var container = [];

  for(var index = 0; index < array.length; index++){
    if(array[index] !== null){
    container.push(array[index]);
  }

  }
  return container;
}
