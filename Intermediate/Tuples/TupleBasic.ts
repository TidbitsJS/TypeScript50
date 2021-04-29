// Initialization
var userData = ["John", 12]
console.log(userData[0], "is", userData[1], "years old")

// Looping
let k: number = 0
while(userData[k]) {
    console.log(userData[k])
    k++
}

for(k = 0; k < 2; k++) {
    console.log(userData[k])
}

// get length
console.log("There are", userData.length, "elements in the `userData` tuple")

// Mutate
userData[0] = "Joe"
userData[1] = 10

console.log(userData[0], "is", userData[1], "years old")

// Add elements
userData.push("Jack")
userData.push(5)

for(k = 0; k < userData.length; k++) {
    console.log(userData[k])
}

// Add more than on elements
userData.push("John", 15, "Doe", 20)

userData.forEach(user => console.log(user))

// Remove elements
userData.pop()
console.log(userData)

userData.shift()
console.log(userData)

userData.splice(0,2)
console.log(userData)

// destructuring
const [firstAge, fristName, secondAge, secondName ] = userData

console.log(firstAge, fristName, secondAge, secondName)