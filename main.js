"use strict"

class User {

  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // methods
  register() {
    console.log(this.username + ' is now registered.')
  }

  // static methods provide the same result no matter what 
  static countUsers() {
    console.log('There are 50 users');
  }
}

// create an instance of the class
let bob = new User('bob', 'bob@gmail.com', '123456');
// use the register method
bob.register();

// call the static method
// notice we use the class to call, not the instance
User.countUsers();



// INHERITANCE
class Member extends User {

  constructor(username, email, password, memberPackage) {
    // since the first 3 params will be the same as its parent class User, 
    // to save time we can just do:
    super(username, email, password); 
    // assign the remaining params 
    this.package = memberPackage;
  }

  getPackage() {
    console.log(this.username + ' is subscribed to the ' + this.package + ' package.');
  }
}

let mike = new Member('mike', 'mike@gmail.com', '456789', 'standard');
// instances of Member can use methods from the parent class User
mike.register();
mike.getPackage();