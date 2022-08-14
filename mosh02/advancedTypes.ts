/*
 * Type Aliases
 */
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

/*
 * Union Types
 */
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

/*
 * Intersection Types
 */
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

/*
 * Literal(exact, specific) Types
 */
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = "cm" | "inch";

/*
 * Nullable Types
 */
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);

/*
 * Optional Chaining
 */
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// optional element access operator
// customers?.[0]

// optional call
let log: any = null;
log?.("a");

/*
 * Nullish Coalescing Operator
 */
let speed: number | null = null;
let ride = {
  // Falsy (undefined, nullm '', false, 0)
  // Nullish coalescing Operator (Either undefined or null)
  speed: speed ?? 30,
};

/*
 * Type Assertions
 */
let phone = document.getElementById("phone") as HTMLInputElement;
let phoneII = <HTMLInputElement>document.getElementById("phone");

/*
 * Unknown Type
 */
function render(document: unknown) {
  // Narrowing
  if (document === "string") {
    document.toUpperCase();
  }

  document.move();
  document.fly();
  document.whatEverWeWant();
}

/*
 * Never type
 */
function reject(message: string): never {
  throw new Error(message);
}

reject("...");
console.log("Done");
