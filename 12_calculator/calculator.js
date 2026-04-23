const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numArr) {
  return numArr.reduce((acc, current) => acc + current , 0) 
};

const multiply = function(numArr) {
  return numArr.reduce((acc, current) => acc * current ) 
};

const power = function(base, exp) {
  return base ** exp 	
};

const factorial = function(num) {
  if(num === 0 || num === 1) return 1;
  let result = num;
  for(let base = num; base > 1; base--) {
    result *= base-1
  }
  return result
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
