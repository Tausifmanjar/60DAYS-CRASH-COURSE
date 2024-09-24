class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    getInfo() {
      return `${this.title} by ${this.author}, published in ${this.year} (Genre: ${this.genre})`;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    filterByAuthor(author) {
      return this.books.filter(book => book.author.toLowerCase() === author.toLowerCase());
    }
  
    filterByGenre(genre) {
      return this.books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    }
  
    filterByYear(year) {
      return this.books.filter(book => book.year === year);
    }
  
    totalBooks() {
      return this.books.length;
    }
  
    averagePublicationYear() {
      if (this.books.length === 0) return 0;
      const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
      return totalYears / this.books.length;
    }
  
    getAllBooks() {
      return this.books.map(book => book.getInfo()).join("\n");
    }
  }
  
  
  const library = new Library();
  
  const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
  const book2 = new Book("1984", "George Orwell", 1949, "Dystopian");
  const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic");
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  console.log("All books in library:");
  console.log(library.getAllBooks());
  
  console.log("\nBooks by George Orwell:");
  console.log(library.filterByAuthor("George Orwell").map(book => book.getInfo()).join("\n"));
  
  console.log("\nBooks in Dystopian genre:");
  console.log(library.filterByGenre("Dystopian").map(book => book.getInfo()).join("\n"));
  
  console.log("\nAverage publication year of all books:");
  console.log(library.averagePublicationYear());
  



  //PROBLEM 11

  // Car Class
class Car {
  constructor(name, accelerationPower, brakingPower) {
    this.name = name;
    this.accelerationPower = accelerationPower; // in meters per second squared
    this.brakingPower = brakingPower; // in meters per second squared
    this.speed = 0; // starting speed in meters per second
  }

  // Method to accelerate the car
  accelerate() {
    this.speed += this.accelerationPower;
    console.log(`Accelerating: Current speed is ${this.speed.toFixed(2)} m/s`);
  }

  // Method to brake the car
  brake() {
    this.speed -= this.brakingPower;
    if (this.speed < 0) {
      this.speed = 0; // Ensure speed does not go below 0
    }
    console.log(`Brakes applied: Current speed is ${this.speed.toFixed(2)} m/s`);
  }

  // Method to get the current speed of the car
  getCurrentSpeed() {
    return this.speed;
  }
}

// Example Usage

const car = new Car("Ferrari", 5, 3);

console.log(`Starting ${car.name} simulation:`);

// Accelerating the car
car.accelerate(); // Should increase speed by accelerationPower
car.accelerate(); // Should increase speed again

// Applying the brakes
car.brake(); // Should reduce speed by brakingPower
car.brake(); // Should reduce speed again

// Check the final speed
console.log(`Final speed: ${car.getCurrentSpeed().toFixed(2)} m/s`);
