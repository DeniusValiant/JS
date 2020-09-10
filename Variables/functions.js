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

console.log(Main( f1(2) , f2(10,10)));

OneMoreFunc = function( x)
{
    let result = 0;
    for( let i=0; i < arguments.length ; i++ )
    {
        result += arguments[i];
    }
    return result;
}

console.log(OneMoreFunc(1,2,3,4,5,6,7,8,9,10, -54));