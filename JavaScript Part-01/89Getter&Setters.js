//  getter   and   setters

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        // [Prithivi, Raaj] 
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName; 
    // }
}

const person1 = new Person("Abhishek", "Singh", 18);
// console.log(person1.fullName());
// console.log(person1.fullName);

person1.fullName = "Prithivi Raaj";
console.log(person1);
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);

// // person1.setName("Prithivi", "Raaj");
// //   these are same
// person1.firstName = "Prithivi";
// person1.lastName = "Raaj"

// console.log(person1.firstName);
// console.log(person1.lastName);