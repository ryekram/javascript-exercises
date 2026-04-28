const getAge = function(birth, death) {
        if(!death) {
            death = new Date().getFullYear()
        }
        return death - birth;
    }

const findTheOldest = function(people) {
    let oldestPerson = people.reduce((prev, current) => {
        let prevAge = getAge(prev.yearOfBirth, prev.yearOfDeath)
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
        return prevAge > currentAge ? prev : current
    })
    return oldestPerson
};

const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
