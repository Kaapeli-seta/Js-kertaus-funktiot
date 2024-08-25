const numbers = [];
const k = document.querySelector('#target');
const main = document.createElement("main")
k.appendChild(main)

function write (custom){
  p = document.createElement("p");
  text = document.createTextNode(custom);
  p.appendChild(text);
  main.appendChild(p);
}



for(let i = 0; i < 5; i++) {
  const num = prompt(`give the number ${i+1}/5`);
  numbers.push(num);
}

console.log(numbers);
write("Numbers:" + numbers);

const isNum = prompt("Number to search in array");

if (numbers.includes(isNum)) {
  console.log(`Number ${isNum} found in array`);
  write(`Number ${isNum} not found in array`);
}
else {
  console.log(`Number ${isNum} not found in array`);
  write(`Number ${isNum} not found in array`);
}

numbers.pop();
console.log(numbers);
write("Updated numbers: " + numbers);

numbers.sort((a, b) => b - a)
console.log(numbers);
write("Sorted numbers: " + numbers);
