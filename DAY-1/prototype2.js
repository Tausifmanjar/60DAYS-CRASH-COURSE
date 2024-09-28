// Employee Prototype
function Employee(name, position) {
    this.name = name;
    this.position = position;
  }
  
  Employee.prototype.getDetails = function() {
    return `${this.name} is a ${this.position}.`;
  };
  
  // Manager Prototype inheriting from Employee
  function Manager(name, teamSize) {
    Employee.call(this, name, 'Manager');
    this.teamSize = teamSize;
  }
  
  Manager.prototype = Object.create(Employee.prototype);
  Manager.prototype.constructor = Manager;
  
  Manager.prototype.getDetails = function() {
    return `${this.name} is a ${this.position} managing a team of ${this.teamSize}.`;
  };
  
  // Developer Prototype inheriting from Employee
  function Developer(name, language) {
    Employee.call(this, name, 'Developer');
    this.language = language;
  }
  
  Developer.prototype = Object.create(Employee.prototype);
  Developer.prototype.constructor = Developer;
  
  Developer.prototype.getDetails = function() {
    return `${this.name} is a ${this.position} specializing in ${this.language}.`;
  };
  
  // Test instances
  const manager = new Manager('Alice', 10);
  const developer = new Developer('Bob', 'JavaScript');
  
  console.log(manager.getDetails());
  console.log(developer.getDetails());

  




  // User Constructor
function User(name, role) {
  this.name = name;
  this.role = role;
}

User.prototype.getRole = function() {
  console.log(`${this.name}'s role is ${this.role}.`);
};

// Admin Constructor inheriting from User
function Admin(name) {
  User.call(this, name, 'Admin');
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.manageUsers = function() {
  console.log('Admin managing users.');
};

// Test instances
const admin = new Admin('Charlie');
admin.getRole(); // Charlie's role is Admin.
admin.manageUsers(); // Admin managing users.



// Library Prototype
function Library(name) {
    this.name = name;
  }
  
  Library.prototype.getBooks = function() {
    console.log(`Getting books from ${this.name}.`);
  };
  
  // PublicLibrary Prototype inheriting from Library
  function PublicLibrary(name) {
    Library.call(this, name);
  }
  
  PublicLibrary.prototype = Object.create(Library.prototype);
  PublicLibrary.prototype.constructor = PublicLibrary;
  
  PublicLibrary.prototype.lendBook = function() {
    console.log('Lending a book to a patron.');
  };
  
  // UniversityLibrary Prototype inheriting from Library
  function UniversityLibrary(name) {
    Library.call(this, name);
  }
  
  UniversityLibrary.prototype = Object.create(Library.prototype);
  UniversityLibrary.prototype.constructor = UniversityLibrary;
  
  UniversityLibrary.prototype.addResearchPapers = function() {
    console.log('Adding research papers to the collection.');
  };
  
  // Test instances
  const publicLibrary = new PublicLibrary('Central Public Library');
  const universityLibrary = new UniversityLibrary('University Library');
  
  publicLibrary.getBooks();
  publicLibrary.lendBook(); 

  universityLibrary.getBooks(); 
  universityLibrary.addResearchPapers(); 
  
  // Person Object
const Person = {
    introduce: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  // Athlete Object inheriting from Person
  const Athlete = Object.create(Person);
  Athlete.playSport = function() {
    console.log(`Playing ${this.sport}.`);
  };
  
  // Override introduce method in Athlete
  Athlete.introduce = function() {
    console.log(`Hello, my name is ${this.name} and I play ${this.sport}.`);
  };
  
  // Test instance
  const athlete = Object.create(Athlete);
  athlete.name = 'David';
  athlete.sport = 'Basketball';
  
  athlete.introduce(); 
  athlete.playSport(); 

  


  // Appliance Prototype
function Appliance() {}

Appliance.prototype.turnOn = function() {
  console.log('The appliance is now on.');
};

// WashingMachine Prototype inheriting from Appliance
function WashingMachine() {
  Appliance.call(this);
}

WashingMachine.prototype = Object.create(Appliance.prototype);
WashingMachine.prototype.constructor = WashingMachine;

WashingMachine.prototype.startWashing = function() {
  console.log('The washing machine is now washing clothes.');
};

// Test instance
const washer = new WashingMachine();
washer.turnOn(); 
washer.startWashing();