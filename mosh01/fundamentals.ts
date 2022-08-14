/*
 * Annotaion
 */
let sales: number = 123_456_789;
let numbers: number[] = [1, 2, 3, 4, 5];

/*
 * Tuples
 */
let user: [number, string] = [1, "Mosh"];

/*
 * enum - enumeration
 */
const enum Size {
  Small = 1,
  Medium,
  Large,
}

const mySize: Size = Size.Medium;
console.log(mySize);

/*
 * function
 */
function calcultateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 50_000) return income * 1.2;
  return income * 1.5;
}

const tax = calcultateTax(100);
console.log(tax);

/*
 * Object
 */
let employee: {
  readonly id: number;
  name: string;
  isVIP?: boolean;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

employee.name = "Mosh";
employee.isVIP = true;

employee.retire(new Date());
