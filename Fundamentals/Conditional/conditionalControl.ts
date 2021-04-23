let check : boolean = true 

// Simple if
if(check) {
    console.log("That's a match")
}

// if-else
if(!check) {
    console.log("Hmm. not a match")
} else {
    console.log("Hye, match!")
}

// if-else ladder
let num1 = 10
let num2 = 10

if(num1 > num2) {
    console.log("num1 is greater than num2")
} else if (num1 < num2) {
    console.log("num1 is less than num2")
} else {
    console.log("num1 and num2 are equal")
}

// Nested if
if(num1 < 20) {
    console.log("num1 is less than 20")

    if(num1 >= 10) {
        console.log("num1 is greater than or equal to 10")
    }
}

// Ternary operator
check ? console.log("You got this") : console.log("Try again")

// Switch
let grade : string = 'B'

switch(grade) {
    case 'A':
        console.log("You got an A, Excellent!")
        break;
    case 'B':
        console.log("You got a B, Good Job.")
        break;
    case 'C':
        console.log("You got a C, Well done.")
        break;
    case 'D':
        console.log("You got a D, Passed.")
        break;
    case 'F':
        console.log("You got an F, It's just a grade.")
        break
    default:
        console.log("You are out of grade thing, Good.")
}
