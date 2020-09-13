function f1 ( num)
{
  return num * num;
};

function f2 ( num)
{
    return num * num;
};

function Main ( num1 , num2)
{
    function InnerFunc( smthNum)
    {
        return Math.cos(smthNum)
    }

    return num1 / num2 * InnerFunc(1);
};

console.log( "Main() : " + Main()); // NaN

console.log("Main( f1(2) , f2(10,10)) ; " + Main( f1(2) , f2(10,10)));
//
OneMoreFunc = function( x)
{
    let result = 0;
    for( let i=0; i < arguments.length ; i++ )
    {
        result += arguments[i];
    }
    return result;
}

console.log("OneMoreFunc :" + (1,2,3,4,5,6,7,8,9,10, -54));

// Closure example

let smthFunc = function (arg)
{
let v = function inner()
{
    return arg;
}

    return v;
}

caller = smthFunc("SomeData");
console.log("smthFunc(\"SomeData\" :" + smthFunc("SomeData")); //inner func
console.log("smthFunc() : " + caller()); // return closure from inner func

/*
var pet = function(name) {   // Внешняя функция объявила переменную "name"
    var getName = function() {
        return name;             // Вложенная функция имеет доступ к "name" внешней функции
    }
    return getName;            // Возвращаем вложенную функцию, тем самым сохраняя доступ
                               // к ней для другого scope
}
myPet = pet('Vivie');
console.log(myPet);
console.log(myPet());
*/

//
let func = function(number)
{
    if ( number === 1)
    {
        return number;
    }

    return number * arguments.callee(number-1);
}

console.log("func(10) :" + func(10));

