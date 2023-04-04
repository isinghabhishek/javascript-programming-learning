//   class practice  and  extends  keywoard

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}
// const animal1 = new Animal("tom", 2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());


// class and extend



//  Animal is parent class
//  Dog is sub class

class Dog extends Animal{

}
const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());

// with the help of "extend" keyword we need not to
// write this much of code
// class Dog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }