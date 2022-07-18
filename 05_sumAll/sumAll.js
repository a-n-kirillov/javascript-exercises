const sumAll = function(lowerBound, upperBound) {
    if (lowerBound < 0 || upperBound < 0) {
        return "ERROR";
    }

    if (!(typeof lowerBound === 'number') || !(typeof upperBound === 'number')) {
        return "ERROR";
    }

    if (lowerBound > upperBound) {
        [lowerBound, upperBound] = [upperBound, lowerBound];
    }

    let sum = lowerBound;

    while (lowerBound++ < upperBound) {
        sum += lowerBound;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
