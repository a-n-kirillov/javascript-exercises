const removeFromArray = function(array, ...forRemoving) {
    return array.filter(element => !forRemoving.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
