//
var emptyObject = {};

//
var simpleObject = { prop1 : 1, prop2 : "Name property"};

console.log("simpleObject.prop1 : " + simpleObject.prop1);
console.log("simpleObject.prop2 : " + simpleObject.prop2);
console.log("simpleObject.prop1 : " + simpleObject["prop1"]);
console.log("simpleObject.prop2 : " + simpleObject["prop2"]);

delete simpleObject.prop2

console.log("simpleObject.prop1 : " + simpleObject.prop1);
console.log("simpleObject.prop2 : " + simpleObject.prop2);
console.log("simpleObject.prop1 : " + simpleObject["prop1"]);
console.log("simpleObject.prop2 : " + simpleObject["prop2"]);

console.log("simpleObject.prop3 : " + simpleObject.prop3);
simpleObject.prop3 = "Smth value";
console.log("simpleObject.prop3 : " + simpleObject.prop3);

// check property whether is owned to an object
console.log("prop1" in simpleObject);

// show all properties of objects
console.log("\nPropert list: ");
for ( let prop in simpleObject)
{
    console.log("\nproperty : " + prop);
    console.log("\nproperty value : " + simpleObject[prop]);
}