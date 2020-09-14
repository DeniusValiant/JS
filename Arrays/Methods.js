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
let arr2 = arr1.slice(2,5);
ShowArrayElements(arr2);