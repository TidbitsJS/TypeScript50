// Simple Class
class car {
    color = 'rainbow'; // property
    type = 'Mercedes-Benz AVTR'; // property
    price = 274521896722130

    // method
    start() {
        console.log(this.type, "is ready to go")
    }

}

// instantiate
let myCar = new car()
console.log("My", myCar.type, "is of", myCar.color, "color")
myCar.start()

// Unanamed class
let unNamed_class = class {
    name = 'unNamed';

    say() {
        console.log("I am", this.name, "class")
    }
}

let myUnNamedClass = new unNamed_class()
myUnNamedClass.say()

// named class
let named_class = class nameIt {
    name = "Named"

    say() {
        console.log("I am", this.name, "class" )
    }
}

// new nameIt().say() - will throw an error
new named_class().say()


// Constructor
class Book {
    name;
    author;

    constructor(name: string, author: string) {
        this.name = name
        this.author = author
    }

    whichBook() {
        console.log(this.name, "is written by", this.author)
    }
}

let thinkBook = new Book("Think again", "Adam Grant")
thinkBook.whichBook()

let atomicBook = new Book("Atomic Habits", "James Clear")
atomicBook.whichBook()

// Different class
class Point {
    x: number;
    y: number;

    locate() {
        console.log("Point is located at (", this.x, ", ", this.y, ") ")
    }
}

const point1 = new Point()
point1.x = 10
point1.y = 20

point1.locate()

// readonly class
class Welcome {
    readonly message: string = "Greeting"
    name;

    constructor(name: string) {
        this.name = name
    }

    sayHello() {
        console.log(this.message, ", ", this.name)
    }
}

const welcomeMe = new Welcome('Tidbit')
welcomeMe.sayHello()
