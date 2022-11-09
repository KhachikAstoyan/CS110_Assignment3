let num = 3;
let quotient = num;
let remainder;
let bin = [];

while (quotient !== 0) {
  remainder = quotient % 2;
  quotient = Math.floor(quotient / 2);
  bin.push(remainder);
}

console.log(bin.reverse().join(""), num.toString(2));
