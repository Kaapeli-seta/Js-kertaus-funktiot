'use strict'

function sortArray(array) {
  array.sort((a, b) => b-a)
  return array
}

const array = [21,4,5,87,22,21,12,9,7,4,1];
console.log("starting array " + array);
sortArray(array);
console.log("sorted array " + array);
