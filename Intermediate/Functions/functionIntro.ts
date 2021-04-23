// Simple Function
sayHello() // before definition call

function sayHello() {
    console.log("Hello World")
}

sayHello()

// Function with Parameters
function displayName(name: string) {
    console.log("Hello, I am ", name )
}

displayName("Tidbits")

/*

Try - displayName(124)

It won't work. know why?
As we have defiend the name parameter explicitly to string. So it accepts nothing but string.

*/

// Function with default Parameters
function greetMessage(name, message: string = "Howzat!") {
    console.log(name, " says ", message)
}

greetMessage("Tidbits", "Hey buddy")
greetMessage(false) // this works as name param has a type of any
greetMessage(123, "321") // this works as well

/*

Place default parameters at the end. 

function greetMessage(message: string = "Howzat!", name) {}
greetMessage(false) 

Above piece of code will throw an error.

*/

// Rest parameter - Passing multiple parameters
function multipleUsers(...name: string[]) {
    console.log(name)
}

multipleUsers("Joe", "Jane", "John", "Jack")

// Return void type
function returnNothing(name: string) :void {
    console.log(name, " cant' return anything")
    // return "hello"  - won't work
    return null // works
}

returnNothing("Tidbits")

// Return value from function
function addNumbers(num1: number, num2: number) {
    return num1 + num2
}

let sum: number = addNumbers(5, 2)
console.log(sum)

// Return value with return type
function multiplyNumbers(num1: number, num2: number) :number {
    return num1 * num2
}

// let multiple : string = multiplyNumbers(5, 2) // can't happen 
let multiple  = multiplyNumbers(5, 2) 
console.log(multiple)

function checkEven(num1: number) : boolean {
    if(num1 % 2 === 0) return true
    return false
}

let checkResult = checkEven(3)
console.log(checkResult ? "3 is even" : "3 is odd")
checkResult = checkEven(4)
console.log(checkResult ? "4 is even" : "4 is odd")

// Arrow functions 
let displayUsers = (users:string[]) : void => users.forEach(user => console.log("Welcome ", user))

displayUsers(['Sam', "Ram", 'Som', 'Rom'])
  