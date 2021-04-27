// Square brackets
let items: string[] = ['icecream', 'chcocolate', 'chips', 'apple']

// Generic array type
let nums: Array<number> = [34, 54, 64, 74, 84]

// Sort Array
items.sort()
console.log("Sort - ",items)

// Pop element
nums.pop()
console.log("Pop - ", nums)

// Push element
items.push('Orange')
console.log("Push - ", items)

// Concat
let concatArray = items.concat(['grapes', 'pizza'])
console.log("Concat - ", concatArray)

// Index of
console.log("icecream index - ",items.indexOf('icecream'))

// Copy within
let numbers : string[] = new Array()
numbers = ['a', 'b', 'c', 'd', 'e']

console.log(numbers.copyWithin(0, 3, 4))

// fill
numbers.fill('z', 3)
console.log(numbers)

// shift()
numbers.shift()
console.log(numbers)

// unshift()
nums.unshift(15)
console.log(nums)

// includes()
console.log(nums.includes(64))

// join()
let joinArray : boolean[] = [true, false, true]
joinArray.join(' - ')
console.log(joinArray)

// lastIndexOf()
console.log(numbers.lastIndexOf('z'))

// slice
let slicedArray = items.slice(1,3)
console.log(slicedArray)

// toString
nums.toString()
console.log(nums)

// toLocaleString
let localeString : number[] = [23, 45, 12, 65]
localeString.toLocaleString()
console.log(localeString)


