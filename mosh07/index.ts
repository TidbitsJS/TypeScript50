import * as _ from "lodash";
import { calculateTax, sayHello } from "./tax";

let tax = calculateTax(10_000);
console.log(tax);

sayHello("Mosh");

_.clone([1, 2, 3]);
