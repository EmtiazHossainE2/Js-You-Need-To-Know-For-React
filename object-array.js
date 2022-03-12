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

*/

//২. ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে

//৩. লজিক্যাল এন্ড(&&) আর লজিক্যাল or(।।) এই দুইটা সম্পর্কে হালকা ধারণা

//৪. JSON এর stringify এবং parse কখন কোনটা ইউজ করে

//৫.++, --, +, +'', +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি।

//৬.Object.keys, Object.values জিনিসগুলা জানা থাকলেও ভালো। 