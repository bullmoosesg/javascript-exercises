const convertToCelsius = function(tempF) {
//cel = (faren -32) * 5 / 9

  let tempC = (tempF - 32) * 5 / 9;

  if( Number.isInteger(tempC) ) {
    return tempC
  } else {
  
  tempC = Math.round(tempC * 10)/10;

  return tempC
}};

const convertToFahrenheit = function(tempC) {
//faren = ( celcius * 9 / 5 ) + 32
  let tempF = (tempC * 9 / 5) + 32;

  if( Number.isInteger(tempF)) {
    return tempF
  } else {
  
  tempF = Math.round( tempF * 10)/10;

  return tempF
}};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
