var person1 = {
  name: 'Paul',
  age: 25
};

var person2 = {
  name: 'Tommy',
  age: 26
};

var person3 = person2;

console.log(person1 == person2); // false
console.log(person2 == person3); // true
console.log(person1 === person2); // false
console.log(person2 === person3); //  true
