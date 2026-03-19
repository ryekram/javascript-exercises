const sumAll = function (a, b) {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
    return "ERROR";
  let start = a > b ? b : a;
  let end = b < a ? a : b;
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
