const repeatString = function(string, num) {
   let finalStr = '';
   let i = 0;

   if(num < 0){
       finalStr = 'ERROR';
       return finalStr;
   }

    while(i < num){
        finalStr += string;
        i++;

    }

   return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
