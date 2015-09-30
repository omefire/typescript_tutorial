class Student {
      fullname: string;
      constructor(public firstname, public middleInitial, public lastname) {
          this.fullname = firstname + " " + middleInitial + " " + lastname;         		 
      }     			 
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = {firstname: "Jane", lastname: "User"};

document.body.innerHTML = greeter(user);
