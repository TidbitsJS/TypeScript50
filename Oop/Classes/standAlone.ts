// Creating property fields
function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

var joe = new Person("Joe", "kong", 12)
console.log("Name: ", joe.firstName, joe.lastName)
console.log("Age: ", joe.age)

// Defining a method
function Place(name, price) {
    this.name = name
    this.price = price

    this.details = details

    function details() {
        console.log(this.name, "will cost $", this.price)
    }
}

let netherlands = new Place('Netherlands', 12345)
netherlands.details()
