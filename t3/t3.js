const numbers = []
const target = document.querySelector("#target")

do {
num = prompt("Enter a number (or 'q' to end)")
if (!isNaN(num) && num !== ''){
  numbers.push(num)
}
} while (num != "q");

console.log(numbers);
let empty = true
for (let i of numbers) {
  if (i % 2 === 0){
    target.insertAdjacentHTML("beforeend", ` ${i}`);
    empty = false;
  }
}

if (empty) {
  console.log(empty);
  target.insertAdjacentHTML("beforeend", ' None');
}
