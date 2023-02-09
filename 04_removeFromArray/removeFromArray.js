const removeFromArray = function(arr, ...argsToRemove) {
    const newArr = [];
    
    arr.forEach(element => {
        if(!argsToRemove.includes(element)){
            newArr.push(element);
        }
     });

    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
