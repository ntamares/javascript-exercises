const fibonacci = function(num) {
  if(num < 0) return 'OOPS';

  let current = 0;
  let next = current + 1;
  
  function fibSum(num){
    while(num > 1){
      let tmp = next;
      next += current;
      current = tmp;
      num--;
    }
    return next;
  }

  return fibSum(num);
};

// Do not edit below this line
module.exports = fibonacci;
