const removeFromArray = function(array, arg1, arg2 = '', arg3 = '', arg4 = '', ) {
// turns args into array, removes nulls 
  let argArray = [arg1, arg2, arg3, arg4];
  argArray = argArray.filter(function(el){
    return el != null;
    });

  for (let i = 0; i < argArray.length; i++) {
    if (array.includes(argArray[i])) {
      console.log(`\"${argArray[i]}\" is inside the array`);
      array = array.filter(removeArgs);

      function removeArgs(value) {
        return value != argArray[i];
      };
    };
  };
  return array;

};

// Do not edit below this line
module.exports = removeFromArray;
