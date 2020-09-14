//Как добавить собственный метод во встроенный JavaScript-объект (например, массив)

Array.prototype.MaxEx = function()
{
    return Math.max.apply(null, this);
}

Array.prototype.MaxPositive = function()
{
    let arr = [];
    for( let i=0; i < this.length; i++)
    {
        if ( this[i] > 0) {
            arr.push(this[i]);
        }
    }
    return Math.max.apply(null, arr);
}

//redefine toString
Array.prototype.toString = function () {
    // noinspection JSAnnotator
    return `Array contains : ${this.length} elements, max positive element : ${this.MaxPositive()}`;

}

var testArray =[1,-2,3,-4,5,-6,7,-8,-9.55, -10];

var result = testArray.MaxEx();
console.log("max element : " + result);

result = testArray.MaxPositive();
console.log("MaxPositive : " + result);

console.log("New Array to string : " + testArray.toString());