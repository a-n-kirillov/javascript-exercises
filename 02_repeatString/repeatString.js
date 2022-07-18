const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }

    let answer = '';
    while (num--) {
        answer += string;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
