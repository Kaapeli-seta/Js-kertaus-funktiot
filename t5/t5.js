'use strict'

function sortArray(array, order) {
  console.log(order)
  if (order === "asc"){
    array.sort((a, b) => b-a)
  }
  else {
    array.sort((a, b) => a-b)
  }

return array
}

const array = [21,4,5,87,22,21,12,9,7,4,1];
console.log("starting array " + array);

console.log("assending array " + sortArray(array, "asc"));
console.log("decending array " + sortArray(array, "desc"));
