let i : number = 0

// while loop
while( i <= 10) {
    console.log("Iteration " + i)
    i++;
}

i = 0
let users : string [] = ["John", "Jane", "Jack", "Jill"]
while(users[i]) {
    console.log("User :", users[i])
    i++
}

// do while loop
i = 1
do {
    console.log("Iteration no. ", i)
    i++
} while( i <= 0)

// for loop
for(let k :number = 10; k >= 0; k--) {
    console.log("Iteration no : ", k)
}

// Loop control break
for(let x: number = 11; x <= 100; x++) {
    if (x === 15) break

    console.log("break", x)
}

// Loop control continue
for(let x: number = 0; x <= 10; x++) {
    if(x === 6) continue

    console.log("continue ",x)
}

