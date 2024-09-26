//PROBLEM NO 8


function Animal() {
    this.type = "Animal";
}

Animal.prototype.sound = function() {
    console.log("Animal sound");
};

function Dog() {
    Animal.call(this); 
    this.type = "Dog";
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.sound = function() {
    console.log("Bark");
};

const myDog = new Dog();

myDog.sound(); 

//PROBLEM NO 9

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
    Person.call(this, name, age); 
    this.jobTitle = jobTitle;    
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; 

Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};


const person = new Person("nrupul", 50);

const employee = new Employee("Bob", 30, "Software Engineer");

person.introduce();  
employee.introduce(); 

employee.work(); 



