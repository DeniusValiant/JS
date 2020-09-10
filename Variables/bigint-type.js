let bigint1 = 111111n;
let bigint2 = 222222n;
let bigint3 = BigInt("55555");
//console.log(bigint1 +2); // error

console.log(bigint1 + bigint2); //333333n
console.log(1n + 2n); //3n

//console.log(1n + 2); // Error
console.log(1n + BigInt("2")); //3n
console.log(1n + BigInt(111)); //112n