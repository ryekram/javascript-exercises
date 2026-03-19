const removeFromArray = function(arr, ...args) {
   let argsArray = [...args] 
   let result = []
   for (let i = 0; i < arr.length; i++) {
    if (argsArray.includes(arr[i]) === false) {
        result.push(arr[i])
    }
   }
   return result;
};

// Do not edit below this line
module.exports = removeFromArray;
