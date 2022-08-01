
const { uuid } = require('uuidv4');


const sayHello = () => {
    console.log("Hello Wolrd!");
}

const hello = sayHello;

hello();

let str = "ceci est une chaîne de caractères";

for (let char in str) {
    console.log(str[char])
}

// Steps // 

const steps = (n) => {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let columns = 0; columns < n; columns++) {
            if (columns <= row) {
                stair += '#'
            } else {
                stair += ' ';
            }
        }
        console.log(stair)
    }
}
steps(10)

// Fibonacci //

const fibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib
}

console.log(fibonacci(8))

// Remove vowel // 

const disemvowel = str => str.replace(/[aeiou]/gi, '');

console.log(disemvowel("This website is for losers LOL!"))

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2)
};

console.log(binaryArrayToNumber([0, 0, 0, 1]))


const digitize = n => n.toString().split('').reverse().map(x => parseInt(x));



console.log(digitize(35231))


// Find occurence //

const occurence = str => {
    let words = {};
    for (let word of str) {
        words[word] = words[word] + 1 || 1
    }
    return words

}

console.log(occurence("ceci est une chaine de caractère"))


function warnTheSheep(queue) {
    if (queue[queue.length - 1] == "wolf") {
        return "Pls go away and stop eating my sheep"
    }

    return `Oi! Sheep number ${queue.reverse().indexOf("wolf")}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "wolf"]))


function shortcut(string) {
    return string.match(/[^aeiou]/g).join('')
}

console.log(shortcut('complain'))


function solve(s) {
    let upperCase = s.match(/[A-Z]/g) ? s.match(/[A-Z]/g) : 0;
    let lowerCase = s.match(/[a-z]/g) ? s.match(/[a-z]/g) : 0;
    if (upperCase.length > lowerCase.length) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase()
    }
}

console.log(solve("code"))



function countPositivesSumNegatives(input) {
    let result = []
    let pos = (input.filter(e => e > 0)).length;
    let neg = (input.filter(e => e < 0)).reduce((a, b) => a + b);
    result.push(pos, neg)
    return result;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


function removeUrlAnchor(url) {
    console.log(url.replace(/#.*/gi, ""))
}

console.log(removeUrlAnchor('www.codewars.com#about'))

function whoIsPaying(name) {
    return [name, name[0] + name[1]]
}

console.log(whoIsPaying("Melania"))


function array(arr) {
    return arr.split('')
}


console.log(array('1,2,3,4,5'))

const reverseStr = str => {
    return str.toLowerCase().split("").reverse().join("")
}

console.log(reverseStr("Hello"))


const consoleName = [
    {
        name: "Master System",
        class: "mastersystem"
    },
    {
        name: "Nintendo",
        class: "nintendo"
    }
]
console.log(consoleName.map(x => "console " + x.name))

let unique = uuid();
let uniquev2 = uuid();

console.log(unique)
console.log(uniquev2)
console.log(uuid())


const user = {
    name: "Laurent",
    greet : (name) => {
        return `Hello ${name}`
    }
}

console.log(user.greet(user.name))

class Player {
    constructor(gender, age, plateform) {
        this.gender = gender;
        this.age = age;
        this.plateform = plateform
    }
}

const laurent = new Player('male', 44, 'PC');

console.log(laurent)
console.log(laurent.plateform);

class Country extends Player {
    constructor(gender, age, plateform, country) {
        super(gender, age, plateform)
        this.country = country
    }
}

let france = new Country('Male', 44, 'PC', 'French');

console.log(france)