"use strict";
// super varuables .. any thing can be assigned
// any--> anything can be assigned and bypass any type error 
let exampleAny;
let exampleunkonn;
//any
exampleAny = 123;
exampleAny = 'heep';
//unkown
exampleunkonn = 123;
exampleunkonn = 'test';
//any
exampleAny.alows.anything.you.can.imagine.imagine();
let anysetBool = exampleAny;
//unkown
exampleunkonn.trim(); // can not acces any propertis
let uksetBool = exampleunkonn; // can not assign any well defined properties
//for unkown first we have to verify that value should be bool
if (typeof (exampleunkonn) === 'boolean') {
    let uksetBool = exampleunkonn;
}
//unkown help us to access anything with more safety
// type checks have to be added for these
let someLegacyVariable;
someLegacyVariable = loadString();
if (typeof someLegacyVariable == 'string') {
    console.log(someLegacyVariable.trim());
}
someLegacyVariable = loadNumber();
if (typeof someLegacyVariable == 'number') {
    console.log(someLegacyVariable.toFixed(2));
}
//typeasssertion
//normal way 
let hello = load(); //do nt known return ttpe oof load
if (typeof (hello) == 'string') {
    const trimmed = hello.trim();
}
// or type assertion help to telling the compiler that you dont have to guess the datattype
const trimmed = hello.trim();
//same as
const trimmed2s = hello.trim(); // ts will error as ts thinks it is jsx element
