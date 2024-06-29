const add = function(val1, val2) {
  let result = val1 + val2;
  
  return result;
	
};

const subtract = function(value1, ...values) {
  let result = value1;
  for(let value of values){
    result -= value;
  }
  return result;
	
};

const sum = function(values) {
	let result = 0;
  for(let value of values){
    
    result += value;
    
  }
  return result;
};

const multiply = function(values) {
  let result = 1;
  for(let value of values){
    result *= value;
  }
  return result;
};

const power = function(base, pow) {
    return base ** pow;
};

const factorial = function(val) {
    let result = val;
  if(val == 1 || val == 0){
    return 1;
  }else{
    result *= factorial(val - 1);
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
