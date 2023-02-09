const sumAll = function(num1, num2) {
    // fail conditions
    if((num1 < 0 || num2 < 0) || (typeof(num1) !== "number")|| (typeof(num2) !== "number")){
        return "ERROR";
    }

    let finalSum = 0;
    let tmp = num1;

    if(num1 > num2){
        let tmp = num1;
        num1 = num2;
        num2 = tmp;
    }

    for(let i = num1; i <= num2; i++){
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
