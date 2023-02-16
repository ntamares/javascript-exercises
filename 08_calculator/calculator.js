const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	if(arr.length === 0) return 0;
  if(arr.length === 1) return arr[0];
  
  let result = 0;

  arr.forEach(num => {
    result += num;
  });

  return result;
};

const multiply = function(arr) {
  let result = 1;

  arr.forEach(num => {
    result *= num;
  });

  return result;
};

// const power = function(arr) {
//   let num = arr[1];
//   let result = arr[1];

//   for(let i = 0; i < arr[0]; i++){
//     // result *= num;
//     result = result * num
//   }

//   return result;
// };

const power = function(num1, num2) {
  let mult = num1;
  let result = num1;

  for(let i = 1; i < num2; i++){
    result = result * mult;
  }

  return result;
};

const factorial = function(num) {
  if(num === 0 || num === 1) return 1;

	let result = num;

  while(num > 1){
    num--;
    result *= num;
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
