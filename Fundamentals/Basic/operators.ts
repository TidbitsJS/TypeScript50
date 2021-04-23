// Calculations
console.log(5 * 3 / 5 + 3)

// Concatenation
console.log("Quite " + " tough")

// Arithmetic Operations
let num1 : number = 10
let num2 = 2

num1 += num2
console.log("num1 += num2: ", num1)

num1 -= num2
console.log("num1 -= num2: ", num1)

num1 *= num2
console.log("num1 *= num2: ", num1)

num1 /= num2
console.log("num1 /= num2: ", num1)

num1 %= num2
console.log("num1 %= num2: ", num1)

// Compariosn operations
let result : boolean

result = 1 === 1
console.log("1 === 1", result)

result = 1 !== 1
console.log("1 !== 1", result)

result = 1 > 5
console.log("1 > 5", result)

result = 1 < 5
console.log("1 < 5", result)

result = [] === []
console.log("[] === []", result)

result = {} === {}
console.log("{} === {}", result)

result = undefined === null
console.log("undefined === null", result)

result = null === {}
console.log("null === {}", result)

result = null == {}
console.log("null == {}", result)

result = undefined == null
console.log("undefined == null", result)

result = undefined == {}
console.log("undefined == {}", result)

// Logical operations
let logic1 : boolean = true
let logic2 : boolean = false

console.log("logic1 AND logic2 = true: ", logic1 && logic2) // AND operations

console.log("logic1 OR logic2 = true: ", logic1 || logic2) // OR operation

console.log("logic1 = NOT true: ", !logic1) // NOT Operation
console.log("logic2 = NOT true: ", !logic2) // NOT Operation

// Negation Operator
let num : number = 5
console.log(-num) // Negartion -

// TypeOf Operator
let a = 1
let b = 5.5
let c = "Hello"
let d = false
let e = []
let f = {}
let g
let h = undefined
let i = null
let j : null
let x : never 

console.log("a ( ", a ," ) type: ", typeof a )
console.log("b ( ", b ," ) type: ", typeof b )
console.log("c ( ", c ," ) type: ", typeof c )
console.log("d ( ", d ," ) type: ", typeof d )
console.log("e ( ", e ," ) type: ", typeof e )
console.log("f ( ", f ," ) type: ", typeof f )
console.log("g ( ", g ," ) type: ", typeof g )
console.log("h ( ", h ," ) type: ", typeof h )
console.log("i ( ", i ," ) type: ", typeof i )
console.log("j ( ", j ," ) type: ", typeof j )
console.log("x ( ", x ," ) type: ", typeof x )
