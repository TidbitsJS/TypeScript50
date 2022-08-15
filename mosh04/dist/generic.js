"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, "a");
let pair2 = new KeyValuePair("b", 2);
let pair3 = new KeyValuePair("o", "o");
class ArrayUtils {
    static createArray(value) {
        return [value];
    }
}
function wrapInArray(value) {
    return [value];
}
let strings = wrapInArray("1");
let numbers = wrapInArray(1);
let utils = ArrayUtils.createArray(1);
console.log(utils);
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
let result = fetch("url");
function echo(value) {
    return value;
}
echo({ name: "a" });
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echoPro(value) {
    console.log(value);
    return value;
}
echoPro(new Customer("a"));
echoPro(new Person("b"));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    findItem(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return this._objects.filter((obj) => obj.category === category);
    }
}
let store = new Store();
store.add({ name: "a", price: 1, category: "food" });
store.find("name", "a");
store.find("price", 1);
let readonlyProduct = {
    name: "a",
    price: 1,
    category: "food",
};
let readonly = {
    name: "More generic",
    price: 100,
    category: "generic",
};
