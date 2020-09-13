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
