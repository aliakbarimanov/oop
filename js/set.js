// let arr = [];

// console.log((Math.floor(Math.random() * 49))+1);

// ------------------------------------------------

let numbers = new Set();

while (numbers.size < 6) {
  let num = Math.floor(Math.random() * 49) + 1;

  numbers.add(num);

  if (numbers.size === 6) break;
}

[...numbers].sort((a, b) => a - b);

console.log(numbers);
