//ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে 

//1. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে । 
const myTemp = `
    This is template string demo .
    Totototototototototototototo
`
// console.log(myTemp);

const mySelf = {
    name: 'Emtiaz Hossain Emon',
    age: 22,
    dream: 'React Native Developer',
    bestFriends: ['Rion', 'Ashraful', 'Hazim', 'Sifat', 'Sufian'],
    rionDetails: {
        home: 'Pirgonj',
        age: 23,
        phone: '01712345678'
    }
}
const self = `${mySelf.name}`
console.log(self);
const rionDetail = `Rion lives in ${mySelf.rionDetails.home}`
console.log(rionDetail);
const bestFriend = `My friend is ${mySelf.bestFriends[3]}`
console.log(bestFriend);

//2. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে) 

const bestFriends = ['Rion', 'Ashraful', 'Hazim', 'Sifat', 'Sufian'];

console.log(...bestFriends);
const friend = ['My Friends ', ...bestFriends, 'lives in Rangpur'] // shift,unshift,pop,push er kaj spread operator diye kora jay . 
console.log(...friend);
console.log(bestFriends.filter(frnd => frnd.length > 6));

let arrOne = [0, 1, 2, 3, 4];
let arrTwo = [5, 6, 7, 8, 9];

console.log(...arrOne, ...arrTwo); //concat kora jay 

function calculate(a, b, c, d) {
    console.log('Sum is : ' + (a + b + c + d));
}
(calculate(...arrOne));

//Find all prime numbers in an array 
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}
console.log(array.filter(isPrime));

////Find all prime numbers
let primes = [];
for (let n = 2; n <= 100; n++) {
    if (primes.every(prime => { return n % prime != 0 })) {
        primes.push(n);
    }
}
console.log(primes);