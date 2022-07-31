const palindromes = function (string) {
    filteredString = string
                        .split('')
                        .filter(char => isLetter(char))
                        .join('')
                        .toLowerCase();

    return filteredString === reverseString(filteredString);
};

function isLetter(char) {
    return (/[a-zA-Z]/).test(char);
}

function reverseString(string) {
    return string.split('').reverse().join('');
}
// Do not edit below this line
module.exports = palindromes;
