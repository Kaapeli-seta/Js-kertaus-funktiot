const Fruits = ["apple", "banana", "orange", "grape", "kiwi"]


Vegetables = []


for (let i=0; i < 3; i++) {
  pro = prompt("Vegetables")
  Vegetables.push(pro)
}

console.log("Fruits: " + Fruits)
console.log("Length of Fruits: " + Fruits.length)
console.log("Element at Index 2: " + Fruits[2])
console.log("Last Element of Fruits: " + Fruits[Fruits.length-1])
console.log("Vegetables: " + Vegetables)
console.log("Length of Vegetables: " + Vegetables.length)
