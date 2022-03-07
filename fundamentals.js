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




