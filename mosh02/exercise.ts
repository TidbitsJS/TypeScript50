/*
 * Given the data below, define a type alis for representing user.
 */
type Users = {
  name: string;
  age: number;
  occupation?: string;
};

let users: Users[] = [
  {
    name: "John Smith",
    age: 30,
    occupation: "Software Engineer",
  },
  {
    name: "Kate Muller",
    age: 28,
  },
];

/*
 * Birds fly. Fish swim. A pet can be a Bird or Fish. Use type aliases to represent these
 */
type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

let pet: Bird | Fish;

/*
 * Define a type for representing the days of week. Valid values are "Monday", "Tuesday", etc.
 */
type DaysOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

/*
 * Simplify the following code snippets
 */
let user = getUser();
console.log(user && user.address ? user.address.street : undefined);
// simplified
console.log(user?.address?.street);

let x = foo !== null && foo !== undefined ? foo : bar();
// simplified
let x = foo ?? bar();

/*
 * What is the problem in this piece of code?
 */
let value: unknown = "a";
console.log(value.toUpperCase());

// value is declared as unknown type. In order to call methods on an unknown object, we have to use type narrowing first:
if (typeof value === "string") console.log(value.toUpperCase());
