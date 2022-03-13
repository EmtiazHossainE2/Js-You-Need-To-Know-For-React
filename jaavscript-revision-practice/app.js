var name = "hero alom";
var lname = "Uganda";
//আমরা  যদি  সাধারণ  ভাবে  করি  তাহলে এভাবে  করতে   পারি
console.log("Hello " + name + " Welcome to " + lname);

//এবং  খুব  সহজে  টেমপ্লেট স্ট্রিং  বাববার  করে  যে  কোনো  জায়গায়  ডাইনামিক  ভ্যালু  ব্যবহার  করতে   পারি
console.log(`Hello, ${name}!Welcome to ${lname}`);

// spread operators can be used for arrays or objects

// cloning to prevent mutation.
let numList = [1, 2, 3];
let numListClone = [...numList]; // [1, 2, 3]

// spread operator for destructuring.
let animal = {
  name: "dog",
  color: "brown",
  age: 7,
};
let { age, ...rest } = animal;

// let { age, ...rest } = animal || {};
console.log(rest);

// spread operator as rest operator
function sum({ name, ...rest }) {
  console.log(rest);
}

sum(animal);

// spread operator for merging arrays or objects
const numList1 = [1, 2, 3];
const numList2 = {
  name: "hero",
  Age: 18,
};
let numLists = [...numList1, numList2];
console.log(numLists);

let animalWithBreed = {
  ...animal,
  breed: "",
};

console.log(animalWithBreed);


