const palindromes = function (str) {    
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    let reverseStr = str.split('');
    let cleanReverse = reverseStr.filter(function(letter){
        return punctuation.indexOf(letter) === -1;
      });
    
    cleanReverse = cleanReverse.reverse().join('');
    str = str.split('');

    let cleanStr = str.filter(function(letter){
      return punctuation.indexOf(letter) === -1;
    });

    cleanStr = cleanStr.join('');

    return cleanStr.toUpperCase() === cleanReverse.toUpperCase();
};

// Do not edit below this line
module.exports = palindromes;
