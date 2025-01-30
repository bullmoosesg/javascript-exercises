const fibonacci = function(num) {

//convert strings to int
if (typeof num == "string"){
    parseInt(num);
}

let array = [1,1,2];
//starts with 1,1,2 the nest number is the sum of the last two;
for (let i = 4; i<num; i++){
    //loop sequence to the number needed 
    let len = array.length-1;
    let prec1 = array[len];
    let prec2 = array[len-1];
    
    let newNum = prec1 + prec2 ;
    array.push(newNum);
}



let sum = array[array.length-1]+ array[array.length-2];//the answer

//condition handling
if (num == 0){
    return 0;
} else if (num == 1) {
    return 1;
} else if (num == 2) {
    return 1;
}else if (num < 0){
    return "OOPS";
} else {
    return sum;
};

};

// Do not edit below this line
module.exports = fibonacci;
