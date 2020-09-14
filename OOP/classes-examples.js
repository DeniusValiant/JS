'use strict'
// base example
class Animal
{
    constructor(name, color, sex)
    {
        this.Name = name;
        this.Color = color;
        this.Sex = sex;
    };

    getFullInfo()
    {
        return `Name : ${this.Name}, Color : ${this.Color} , Sex : ${this.Sex}`;
    }
}

let dog = new Animal("Dick","Brown","male");
console.log(dog.getFullInfo());

// Class Expression
function CreateAnimal ( Model , args)
{
    let animal =  new Model(args[0], args[1], args[2]);
    animal.id = Math.random().toString().slice(2);
    return animal;
}

let cat = CreateAnimal(Animal, ["Tom","Striped","male"]);
console.log(cat.getFullInfo());
console.log(cat.id);

// Getters , Setters

class User
{
    constructor(){
        this.firstName = null;
        this.lastName = null;
    };


    //getter
    get Fullname()
    {
        return `${this.firstName} ${this.lastName}`;
    }

    set FirstName( newvalue)
    {
        this.firstName = newvalue;
    }

    set LastName( newvalue)
    {
        this.lastName = newvalue;
    }
}
 let user = new User();
user.FirstName = "Bon";
user.LastName = "Kotov";

console.log(user.firstName);
console.log(user.Fullname);

// add new method through prototype
console.log(user.key); // undefined
User.prototype.key = "Key1";
console.log(user.key);


