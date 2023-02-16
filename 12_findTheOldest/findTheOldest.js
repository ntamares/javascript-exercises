const findTheOldest = function(peopleArr) {
  const currentYear = new Date().getFullYear();
  let maxAge = 0;
  let oldestPerson = {};  
  let age = 0;

  peopleArr.forEach(person => {
    age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth 
                              : currentYear - person.yearOfBirth;
  
    if(age > maxAge){
      maxAge = age;
      oldestPerson = person;
    }

  });

  return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
