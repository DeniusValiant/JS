'use strict'
function ShowArrayElements(arr)
{
    for(let i=0; i< arr.length; i++)
    {
        console.log(arr[i]);
    }
}

// Init

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2_odd = [1,3,5,7,9];
let arr3_even = [2,4,6,8,10];

// push/pop

//arr1.push(11,12,13,14);
//ShowArrayElements(arr1);

//arr1.pop();
//ShowArrayElements(arr1);

// shift/unshift

//arr1.shift();
//ShowArrayElements(arr1);

//arr1.unshift(-1,0,1);
//ShowArrayElements(arr1);

// splice
//arr1.splice(5,5); // delete 5 elements start from 5th element
//ShowArrayElements(arr1);

// splice
//arr1.splice(5,5, 11, 12,13,14,15); //delete 5 elements start from 5th element then add 5 new elements
//ShowArrayElements(arr1);

//arr1.splice(5,0, 11, 12,13,14,15); //delete 0 elements start from 5th element
// then add 5 new elements after 5th element
//ShowArrayElements(arr1);

// slice
//let arr_result = arr1.slice(2,5);
//ShowArrayElements(arr2);

// concat
let arr_tmp = [];
let arr_result =  arr_tmp.concat(arr1, arr2_odd, arr3_even, 12, 13, 14, "1231", 33.44);
ShowArrayElements(arr_result);

// distinct
function onlyUnique (value, index, self)
{
    return self.indexOf(value) == index;
}

let arr_result2 = arr_result.filter(onlyUnique);
ShowArrayElements(arr_result2);