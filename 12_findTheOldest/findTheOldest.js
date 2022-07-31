const findTheOldest = function(people) {
    return people.sort((a, b) => getAge(a) > getAge(b) ? 1 : -1)[people.length - 1];
};

function getBirthDate(person) {
    return person.yearOfBirth;
}

function getAge(person) {
    birthDate = getBirthDate(person);
    capDate = "yearOfDeath" in person ? person.yearOfDeath : (new Date()).getFullYear();

    return capDate - birthDate;
}

// Do not edit below this line
module.exports = findTheOldest;
