//প্রোগ্রামিংয়ের ছয়রত্ন কি তুমি কি জানো: 

// ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?
const myName = 'Emtiaz Emon ' // const jeta change hobe nah 
let myAge = 22;
let herAge = 21;
myAge = 23  // let jeta change hote pare . 

//২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে  

if (myAge > herAge) {
    // console.log('true');
}
if (myAge < herAge) {
    // console.log('false'); 
}
if (myAge === 23) {
    // console.log('true');
}
if (myAge !== herAge) {
    // console.log('true');
}
if (myAge >= herAge) {
    // console.log('Yes');
}
if (myAge <= herAge) {
    console.log('No');
}
if (myAge === 23 && herAge === 21) {
    // console.log('True');
}
if (myAge === 23 || herAge !== 21) {
    console.log('True');
}
else {
    console.log('No');
}

//২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো 

function herMark(mark) {
    if (mark > 100 || mark < 0) {
        console.log('Please input valid mark !!');
    }
    else if (mark >= 0 && mark <= 32) {
        console.log('You are fail in the exam');
    }
    else if (mark === 33) {
        console.log('You are pass in the exam');
    }
    else if (mark >= 34 && mark <= 40) {
        console.log('Your grade is E');
    }
    else if (mark >= 41 && mark <= 50) {
        console.log('Your grade is D');
    }
    else if (mark >= 51 && mark <= 60) {
        console.log('Your grade is C');
    }
    else if (mark >= 60 && mark <= 65) {
        console.log('Your grade is B');
    }
    else if (mark >= 66 && mark <= 69) {
        console.log('Your grade is A - ');
    }
    else if (mark >= 70 && mark <= 79) {
        console.log('Your grade is A');
    }
    else if (mark >= 80 && mark <= 100) {
        console.log('Your grade is A+');
    }

}
const result = 78
herMark(result)

//৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো? 

const myArray = ['Emtiaz', 'Hossain ', 'Emon', 'DoraEmon', 'Nobita']
console.log(myArray);
console.log(myArray.length);
console.log(myArray[3]); // index 0 theke suru hoy .
console.log(myArray.push('Shizuka')); //append new element to the end .
console.log(myArray);
console.log(myArray.pop('Shizuka')); //remove last element .
console.log(myArray);
console.log(myArray.indexOf('Emon'));
console.log(myArray.indexOf('2')); // array er moddhe element jodi na thake tahole -1 return kore . 
console.log(myArray.includes('DoraEmon')); //return boolean (true)
console.log(myArray.includes('Dorami')); //return boolean (false)
/* for of 
for (const element of myArray) {
    console.log(element);
} */

//for each
myArray.forEach(element => {
    console.log(element);
})

//৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো। 

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */
let i = 1
while (i <= 5) {
    console.log(i);
    i++
}
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     sum += i
// }
// console.log(sum);


//৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। 

function multyply(num1, num2) {
    const result = num1 * num2
    return result
}
const value = multyply(10, 15)
console.log(value);

//৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়।  

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
console.log(mySelf);
console.log(mySelf.bestFriends[2]);


