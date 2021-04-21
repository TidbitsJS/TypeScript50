// Data Type - Number
let num1 : number = 15
let num2 : number = 1.5

let result : number = num1 * num2
console.log("int * float = ", result)

// Data Type - Boolean
const AUTH : boolean = false

if(!AUTH) console.log("Sorry, you are not allowed to read this")
else console.log("Welcome, you can have fun here")

// Data Type - String
var message : string = "Keep Learning"
var hackedMessage : string = message + " & hacking"

console.log("Message  - ", message, "\nhackedMessage - ", hackedMessage )

// Data Type - Void
function myLogs():void {
    console.log("Void represents functions that do not return a value")
}

myLogs()

// Data Type - null
let declareNull = null
console.log(declareNull)

// Data Type - undefiend
var myY : number
var myX : number = undefined
console.log(myX, "\n", myY)

// Data Type - any
let coupon // default data type set to any

coupon = 'Lucky 101'
coupon = 25
coupon = true
coupon = undefined
coupon = {
    apply : true
}

coupon.count = 1001
console.log(coupon)

// Data Type - Never
function checkingNever(value: string | number) {
    if(typeof value === "string") {
        value // Type string
    } else if (typeof value === "number") {
        value // Type number
    } else {
        value // Type never
    }
}


// Data Type - Array
let myArray1 : number[]
let myArray2 : boolean[] = []
let myArray3 : string[] = new Array()
let myArray4 : number[] = Array()

myArray1 = [1, 2, 3]

let flags1 : boolean[] = [false, true, true]
let flags2 : Array<boolean> = [true, false, false]

let socres1 : number[] = [10, 20, 30, 40]
let scores2 : Array<number> = [10, 20, 30, 40]

// Data Type - Tuple
let myTuple : [string, boolean]
myTuple = ['Tuple', true]

console.log(myTuple)

// Data Type - Enumeration
enum Weekend {
    Monday = 5,
    Saturday,
    Sunday
}

function getDate(Day : string) : Weekend {
    if(Day === 'TGIF') {
        return Weekend.Sunday
    }
}

let DayType : Weekend = getDate('TGIF')
console.log(DayType)
