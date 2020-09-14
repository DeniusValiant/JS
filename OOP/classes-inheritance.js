'use strict'
class Animal
{
    constructor( name)
    {
        this.Name = name;
    }

    get GetName()
    {
        return this.Name;
    }

    set Setname( newvalue)
    {
        this.Name = newvalue;
    }

    getInfo()
    {
        return `Name : ${this.Name}`;
    }
}

class Cat extends Animal
{
    constructor( color)
    {
        super("Tom");
        this.Color = color;
    }

    getInfo()
    {
        return `Name : ${this.Name}, color :  ${this.Color}. From parent class : ${super.getInfo()}.`;
    }
}

let animal = new Animal("Horse");
console.log(animal.getInfo()); //

let cat = new Cat("White");
console.log(cat.getInfo());

