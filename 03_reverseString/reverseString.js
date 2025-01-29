const reverseString = function(string) {

    let stringArray = string.split("");
    //creates array letter by lettter

    stringArray.reverse();

    let output = stringArray.join('');

    return output;

};

// Do not edit below this line
module.exports = reverseString;
