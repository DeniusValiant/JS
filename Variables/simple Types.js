let a = 1;
let str = "12345";
let d = 2343.564;
let b = a + str; //112345
console.log("b : " + b);

b = a + d; // 2344.564
console.log("a + d : " + b);

//b = a + x ; // error x is undefined
//console.log("a + x : " + b);

x = 55;
console.log("x : " + x);

let bil = 1000000000;
let bil1 =  1e9;
let million = 1000 * 1000;

let bigNumber = 7.45e6; // 7450000
console.log( bigNumber / str); //603.4831915755367
console.log( bigNumber * str); //91970250000

console.log("bigNumber : " + bigNumber);

let ms = 1e-6;
console.log("ms : " + ms);

// NAN
let str2 = "asf22";
console.log( bigNumber * str2); //NaN

if ((bigNumber * str2 ) == NaN)
{
    console.log( "bigNumber * str2 === NaN"); // always false
}

console.log(isNaN(true) ); // false
console.log(isNaN(bigNumber) ); // false
console.log(isNaN(str2) ); // true
console.log(isNaN(bigNumber * str2 ) );  // true

// strings

str = "string object";
str2 = 'second string object';
let str3 = `3rd string object and big number : ${bigNumber}`;
console.log(str3);
str3 = `3rd string object and big number : ${bigNumber * bigNumber }`;
console.log(str3);

// bool

let isTrue = true;
let GreatCheked = 4 > 3;
console.log(GreatCheked);

// null

let checkNull;
console.log(checkNull === null); // true

// undefined
console.log(checkNull ); // undefined
console.log(checkNull === undefined ); // true
let a1 = 5;
console.log("a1 + checkNull : " + a1 + checkNull );

let maybeStr = "a1 + checkNull : " + a1 + checkNull;
console.log(" maybeStr : " + maybeStr ); //
console.log(maybeStr.length); // 27

let smth = a1 + checkNull;
console.log("smth : " + smth ); // NaN

// Symbol
let uniqId = Symbol('id');
console.log(uniqId.toString() ); // Symbol(id)
console.log(uniqId.description);//id

let obj = { name : "object"};
obj[uniqId] = "unique code";
console.log(obj[uniqId]);//id