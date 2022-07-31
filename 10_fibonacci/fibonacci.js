const fibonacci = function(index) {
    if (index <= 0) {
        return 'OOPS';
    }

    if (!+index) {
        return 'OOPS';
    }

    index = +index;

    if (index === 1 || index === 2) {
        return 1;
    }

    let currentSequenceIndex = 3;
    let previousMember = 1, latterMember = 1;

    while (index >= currentSequenceIndex) {
        [previousMember, latterMember] = [latterMember, previousMember + latterMember];
        currentSequenceIndex++;
    }

    return latterMember;
}

const fibonacciRecursive = function(index) {
    if (index <= 0) {
        return 'OOPS';
    }

    if (!+index) {
        return 'OOPS';
    }

    index = +index;
    if (index === 1 || index === 2) {
        return 1;
    }

    return fibonacci(index - 1) + fibonacci(index - 2);
};

// Do not edit below this line
module.exports = fibonacci;
