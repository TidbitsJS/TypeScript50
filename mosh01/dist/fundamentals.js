"use strict";
let sales = 123456789;
let numbers = [1, 2, 3, 4, 5];
let user = [1, "Mosh"];
const mySize = 2;
console.log(mySize);
function calcultateTax(income, taxYear) {
    if ((taxYear || 2022) < 50000)
        return income * 1.2;
    return income * 1.5;
}
const tax = calcultateTax(100);
console.log(tax);
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "Mosh";
employee.isVIP = true;
employee.retire(new Date());
