const leapYears = function(year) {
    
// if the number is divisible by 4, and not by 100, true
// if the number is divisble by 100, and is divisible by 400, true
let div100 = year % 100 == 0;

let div400 = year % 400 == 0;

let div4 = year % 4 == 0;

switch (true){
    case ( year % 4 == 0 && year % 100 != 0) :
    case ( year %400 == 0) :
        return true
        break;
    default :
        return false;
};


};

// Do not edit below this line
module.exports = leapYears;
