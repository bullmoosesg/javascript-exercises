const sumAll = function(num1, num2) {

switch(true){

    case ( num1 <= 0 || num2 <= 0 ) : 
    case ( isNaN(num1) || isNaN(num2)) :
    case ( num1 % 1 > 0 || num2 % 1 > 0) :
    case ( typeof num1 != 'number' || typeof num2 != 'number') :
        return 'ERROR'
        break;
    default:

        let max = Math.max(num1,num2);
        let min = Math.min(num1,num2);
        let sumTotal = min + max;


        for (let i = min+1; i < max; i++){
            sumTotal += i;
        };

        return sumTotal
}};

// Do not edit below this line
module.exports = sumAll;
