const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((previous, current) => previous + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((previous, current) => previous * current, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(integer) {
	let result = 1;

  while (integer > 0) {
    result *= integer;
    integer--;
  }

  return result;
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
