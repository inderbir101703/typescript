"use strict";
let message = "yoyo";
//istances types
let reg = new RegExp('ab+c');
let array = [1, 2, 3];
let arra = [1, 2, 3];
let tuple = [0, 0]; //fixed length array also known as tuple
let set = new Set([1, 2, 3]); //will remove duplicates internally even if passsed
//let queque Queue<number>
console.log(message);
let center = {
    x: 0,
    y: 0
};
let center2 = {
    x: 1,
    y: 1,
};
// functions 
// as how many values  are pasedd it will be array of numbers
function sum(...values) {
    return values;
}
// type dec for add funxction which returns a number
let add;
