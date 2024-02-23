// UNIT 2 ASSESSMENT: Coding Practical Questions with Jest

// const { describe } = require("yargs")



// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.




// describe("multiplyByThree", ()=> {
//     it("The function will multiply each number in the array by 3", () => {
//        const numbersArray1 = [6, 7, 8, 9, 10]
//         const numbersArray2 = [24, 27, 30, 33, 36]
//         expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30]); 
//        expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108]); 
//     })
// })




// const multiplyByThree = (array) => {
//     const outcome = [];
//     for (let i = 0; i < array.length; i++) {
//         outcome.push(array[i]*3);
//     }
//     return outcome
// }



// Expected output: [18, 21, 24, 27, 30]

// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Explain your code: I named the function multiplyByThree because that is the action the function is going to take when invoked. The empty "outcome" array will store it. The for loop wil interate through the array, and as long as "i" is less than the length of the input array it will increase by one. The push will multiply the  array by three and  put it in the outcome.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("isDivisibleByThree", ()=> {
    it("The function will determine if the number is divisible by three or not", () => {
        const object1 = { number: 15 }
        const object2 = { number: 0 }
        const object3 = { number: -7 }
        expect(isDivisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(isDivisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(isDivisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

const isDivisibleByThree = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else {
        return `${object.number} is not divisible by three`
    }
}

// console.log(isDivisibleByThree(object1))
// Expected output: "15 is divisible by three"

// Expected output: "0 is divisible by three"

// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Explain your code: I declared a function isDivisibleByThree because when called it will determine if the number in the object is divisible by three. I had to use an if statement with the condition % 3 === 0. If the condition was met than the function would let the user know that the number is divisible by three. If not, then the function will let the user know the number was not divisible by three.  Also, since I am dealing with an object I hade to use .dot notation to access the key and the value in the object.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capitalizeWords", () => {
    it("The function should capitalize the first letter of every word in the array", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
        
    })
})

const capitalizeWords = (array) => {
    let capitalizeArray = []
    for (let i = 0; i <array.length; i++) {
        let word = array[i]
        let capitalizeFirstLetter = word[0].toUpperCase()
        capitalizeFirstLetter += word.slice(1)
        capitalizeArray.push(capitalizeFirstLetter)
    }
    return capitalizeArray
}

// console.log(capitalizeWords(randomNouns1))
// console.log(capitalizeWords(randomNouns2))
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Explain your code: I think I just stayed in my comfort zone and with a for loop. Next time I will take a different approach and .map thought it. I named the function capitalized words, I thought it was appropriate according to the intial directions. But, after looking at the expected output, the result just needed the first letter of each string in the array to be capatilzed. I put capitlized Array as an empty array. I loop through the arrays using a for loop. I created a variable called word, and it targets each individual string in the array. I also created a variable named capitalizeFirstLetter which targets and uppercases the first letter in the "word" variable in the array.  Then this line  (capitalizeFirstLetter += word.slice(1)) basically puts the first capitalized letter back together with the rest of the sting. The .slice had to start with the second letter and concatenate with the first capitalized letter. Then I used .push to  push it into the capitalizeArray variable and return it.
