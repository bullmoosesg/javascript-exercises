const repeatString = function(string,number) {
    // if(number < 0) {
    //     number = 0;
    // } else {
    //     number = Math.floor(number);
    // }
    //Handles any errors from decimals or negatives
    if (number < 0){
        return 'ERROR'
    } else {

    let output = "";
    for (let i = 0; i < number; i++){
        output = output.concat(string);
    }

    return output;
    }

};


// Do not edit below this line
module.exports = repeatString;
