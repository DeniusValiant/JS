// function constructor
function Person(name){
    this.Name = name,
    this.Introduce = function()
    {
        return "Hello, I'm a " + this.name;
    }
}

let Nick = new Person("Nick");
console.log(Nick.Name);
console.log(Nick.Introduce());

//Inheritance

let Animal = function(name)
{
    this.Name = name;
    this.Age = 5;
    this.Method = function()
    {
        return "This animal is " + this.Name;
    }
};

let animal = new Animal("koza");
console.log(animal.Name);
console.log(animal.Method());

Animal.prototype.getClass = function() {return "mammal";};
console.log("animal class : " + animal.getClass());

let Cat =  function(name)
{
    this.Name = name;
    this.Domestic = true;
};

Cat.prototype =  new Animal();
let cat = new Cat("Tom");
console.log(cat.Name);
console.log(cat.Age);
console.log(cat.Method());
console.log("animal class : " + cat.getClass());

Animal.prototype.getType = function() {return "Predator";};
console.log("animal type : " + cat.getType());
