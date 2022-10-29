// PRACTICE ON NUMBERS & STRINGS:

// let food = Number(prompt("How much was the food?"));
// let tip = food * Number(prompt("tip%?")) / 100;
// let total = food + tip;
// alert(`Food: ${food} \nTip: ${tip} \nTotal: ${total}`);

// const receipt = (foodAmount, tipPercent) => {
//     let food = Number(foodAmount);
//     let tip = food * Number(tipPercent) / 100;
//     let total = food + tip;
//     return `Food: ${food} \nTip: ${tip} \nTotal: ${total}`;
// };
// alert(receipt(prompt("How much was the food?"), prompt("tip%?")));

// -----------------------------------------------------------------
// PRACTICE ON ARRAYS:

// const groceries = ["banana", "apple", "orange", "pear"];
// console.log(groceries);
// groceries.push("cookies", "berry");
// console.log(groceries);
// console.log(groceries.slice(0, 2));
// console.log(groceries.slice(3));
// console.log(groceries.slice(1, 4));
// console.log(groceries.indexOf("orange"));
// console.log(groceries.length);

// const numbers = [1, 2, 3, 4, 5, 6]; 
// console.log(numbers.map(num => num * 2));
// console.log(numbers.map(num => num ** 2));
// console.log(numbers.filter(num => num >= 3));

// const numbers = [1, 2, 3, 4];
// console.log(numbers.reduce((a, b) => a + b));
// console.log(numbers.reduce((a, b) => a - b));
// console.log(numbers.reduce((a, b) => a * b));
// a represents the "pre" or the initial variable like let sum = 0, and b represents the "curr" like sum += b

// const actors = [
//     {name: "Joe Biden", networth: 200000},
//     {name: "Donald Trump", networth: 400000},
//     {name: "Barack Obama", networth: 500000}
// ];
// console.log(actors.map(actor => actor.name).join(", "));
// console.log(JSON.stringify(actors.filter(actor => actor.networth > 300000)));
// console.log(actors.reduce((a, b) => a + b.networth, 0));

// -----------------------------------------------------------------

// PRACTICE ON OBJECTS:

// const person = {
//     name: "Quazi",
//     shirt: "black"
// };
// console.log(person);
// console.log(person.name);
// console.log(person.shirt);

// const introducer = (name, shirt, assets, liabilities) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: assets,
//         liabilities: liabilities,
//         netWorth: function() {
//             return this.assets - this.liabilities;
//         }
//     };
//     const intro = `Hi, my name is ${person.name}, the color of my shirt is ${person.shirt}, and my net worth is ${person.netWorth()}`;
//     return intro;
// };
// console.log(introducer("Quazi", "black", 10000, 50));

// -----------------------------------------------------------------

// PRACTICE ON CONDITIONAL STATEMENTS:

// let weather = prompt("How is the weather today?");
// if (weather == "rainy") {
//     alert("Grab your umbrella!");
// } else {
//     alert("Wear your sunglasses!");
// }

// -----------------------------------------------------------------

// PRACTICE ON LOOPS:

// const fruits = ["banana", "apple", "orange", "pear"];
// let len = fruits.length;
// for (let i = 0; i < len; i++) {
//     console.log(i, fruits[i]);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = [];
// for (const num of numbers) {
//     result.push(num * 2);
// }
// console.log(result);

// const doubleNum = (numbers) => {
//     const result = [];
//     for (const num of numbers) {
//         result.push(num * 2);
//     }
//     return result;
// };
// console.log(doubleNum([1, 2, 3, 4, 5, 6]));

// const expNum = (numbers, exponent) => {
//     const result = [];
//     for (const num of numbers) {
//         result.push(num ** exponent);
//     }
//     return result;
// };
// console.log(expNum([1, 2, 3, 4, 5, 6], 2));

// const sumNum = (numbers) => {
//     let result = 0;
//     for (const num of numbers) {
//         result += num;
//     }
//     return {result};
// };
// console.log(sumNum([1, 2, 3, 4, 5, 6]));

// const maxNum = (numbers) => {
//     let result = numbers[0];
//     for (const num of numbers) {
//         if (num > result) {
//             result = num;
//         }
//     }
//     return {result};
// };
// console.log(maxNum([1, 2, 3, 4, 5, 6]));

// const letterCounter = (phrase) => {
//     for (const letter in phrase) {
//         console.log(Number(letter) + 1);
//     }
// };
// letterCounter("Hey, can you go to the grocery store for me?");

// const letterCounter = (phrase) => {
//     let result = 0;
//     for (const letter in phrase) {
//         result = Number(letter) + 1;
//     }
//     return result;
// };
// console.log(letterCounter("Hey, can you go to the grocery store for me?"));

// const letterCounter = (phrase) => {
//     let result = phrase.length;
//     return {result};
// };
// console.log(letterCounter(prompt("Your Phrase?")));

// const letterFrequency = (phrase) => {
//     const frequency = {};
//     for (const letter of phrase) {
//         if (letter in frequency) {
//             frequency[letter]++;
//         } else {
//             frequency[letter] = 1;
//         }
//     }
//     return frequency;
// };
// console.log(letterFrequency("haha"));

// const wordFrequency = (phrase) => {
//     let frequency = {};
//     const words = phrase.split(" ");
//     for (const word of words) {
//         if (word in frequency) {
//             frequency[word]++;
//         } else {
//             frequency[word] = 1;
//         }
//     }
//     return frequency;
// }
// console.log(wordFrequency("lol what lol"));

// const wordFrequency = (phrase) => {
//     const words = phrase.split(" ");
//     return letterFrequency(words);
// }
// console.log(wordFrequency("lol what lol"));

// const filter = (numbers, greaterThan) => {
//     const result = [];
//     for (const num of numbers) {
//         if (num > greaterThan) {
//             result.push(num);
//         }
//     }
//     return result;
// };
// console.log(filter([1, 2, 3, 4, 5, 6], 3));

// -----------------------------------------------------------------