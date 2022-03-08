// const person = { name: "Babe" }
// console.log(person['name']);
// const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
// const ratName = adventurer?.rat?.name;
// console.log(ratName);
//8
let person = null;
console.log(person ? person : "person is null");

//10
const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);

//11 
const age = '33';
console.log(typeof +age);