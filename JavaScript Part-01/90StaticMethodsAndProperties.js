//  static methods  and properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }

    static desc = "static property";

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
        // [Prithivi, Raaj]
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("abhishek", "singh", 16);
console.log(person1.eat());

// info method can be call using class
// do not need to creat objects
const info = Person.classInfo();
console.log(info);
console.log(Person.desc);