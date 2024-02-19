// UNIT 2 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Alpha 2024"
// console.log(cohort.split(" "))

// a) Your answer: ["Alpha", "2024"]
// b) Verify and explain: The .split will split the string but also into an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Nothing is defined or asking to be returned, so it should return undefined.
// b) Verify and explain: Nothing is defined or asking to be returned, so it should return undefined.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11,13,15]
// b) Verify and explain: The .filter method of (number => number %2 !== 0) is basically saying "not even numbers" so only logging odd numbers.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: The dot notation is targeting languages and the first index of the array in the variable myCodingSkills.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Alpha"
    this.year = 2024
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: I mistakenly thought It was only going to log George. I did not pay attention the the variable was declaring the "class" named Learn.
