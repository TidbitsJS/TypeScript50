/*
 * Generic class
 */
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "a");
let pair2 = new KeyValuePair<string, number>("b", 2);
let pair3 = new KeyValuePair("o", "o");

/*
 * Generic functions
 */
class ArrayUtils {
  static createArray<T>(value: T) {
    return [value];
  }
}

function wrapInArray<T>(value: T) {
  return [value];
}

let strings = wrapInArray("1");
let numbers = wrapInArray(1);

let utils = ArrayUtils.createArray(1);
console.log(utils);

/*
 * Generic Interfaces
 */
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<User>("url");

/*
 * Generic Constraints
 */
interface Person {
  name: string;
}

function echo<T extends Person>(value: T): T {
  return value;
}

echo({ name: "a" });

class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echoPro<T extends Person>(value: T): T {
  console.log(value);
  return value;
}

echoPro(new Customer("a"));
echoPro(new Person("b"));

/*
 * Extending Generic Classes
 * keyof operator
 * Type mapping
 */
interface ProductPro {
  name: string;
  price: number;
  category: string;
}

// Type Mapping
type ReadOnlyProduct = {
  readonly [Property in keyof ProductPro]: ProductPro[Property];
};

// More generic ReadOnly type
type ReadOnly<T> = {
  readonly [Key in keyof T]: T[Key];
};

// Optional properties
type Optional<T> = {
  [Key in keyof T]?: T[Key];
};

// Nullable properties
type Nullable<T> = {
  [Key in keyof T]: null;
};

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  findItem(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<ProductPro> {
  filterByCategory(category: string): ProductPro[] {
    return this._objects.filter((obj) => obj.category === category);
  }
}

let store = new Store<ProductPro>();
store.add({ name: "a", price: 1, category: "food" });
store.find("name", "a");
store.find("price", 1);

let readonlyProduct: ReadOnlyProduct = {
  name: "a",
  price: 1,
  category: "food",
};

let readonly: ReadOnly<ProductPro> = {
  name: "More generic",
  price: 100,
  category: "generic",
};
