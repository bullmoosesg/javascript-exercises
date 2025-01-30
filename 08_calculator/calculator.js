const add = function(num1,num2) {

  let sum = num1 + num2;

  return sum;
	
};

const subtract = function(num1, num2) {

	let diff = num1 - num2;

  return diff;

};

const sum = function(array) {

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

return sum

};

const multiply = function(array) {

  let product = 1;

  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }

return product

};

const power = function(num1, num2) {
	let pow = num1 ** num2;

  return pow
};

const factorial = function(num) {
let fact = num;

  if (num == 0) {
  return 1;
} else {

  for (let i = num-1; i > 0; i--){
    fact *= i;
  };
	return fact;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
