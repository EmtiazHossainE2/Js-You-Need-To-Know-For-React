//আরো পাঁচটা জিনিস জানতে হবে। 

//১.১ অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা ২ দিয়ে গুণ করে গুণফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
const myNumbs = [2, 3, 4, 5, 6, 7, 34, 2, 35, 44]
const arrayMap = myNumbs.map(num => num * 2)
console.log(arrayMap);

//১.২. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয় সেটার একটা সামারি লিখে ফেলো।
/*
    callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

        map ==> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

        You shouldn't be using map if:

        you're not using the array it returns; and/or (use forEach or for ..of )
        you're not returning a value from the callback.

        forEach ==> the forEach() method executes a provided function once for each array element. Return value undefined. 

        Find ==> The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 

        Filter ==> condition check kore return kore ekta array . The filter() method creates a new array with all elements that pass the test implemented by the provided function.
        

*/
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

const items = ['item1', 'item2', 'item3'];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i]);
}

// after
items.forEach((item) => {
    copyItems.push(item);
});


//২. ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে
/* The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.  */
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}
console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
  // expected output: "$10.00"

//৩. লজিক্যাল এন্ড(&&) আর লজিক্যাল or(।।) এই দুইটা সম্পর্কে হালকা ধারণা
/*  && check korbe sob gulai true kina .jodi sob true hoy tahole  return kore . || jekono ekta true holei return kore .

The logical AND (&&) operator  for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.

More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
The logical OR (||) operator  for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values. When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value. */

//৪. JSON এর stringify এবং parse কখন কোনটা ইউজ করে

//৫.++, --, +, +'', +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি।

//৬.Object.keys, Object.values জিনিসগুলা জানা থাকলেও ভালো। 