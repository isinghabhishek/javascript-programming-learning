
// we want that ki prototype wali key ko naa read kare

function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.sing = function(){
    return 'sa re ga ma....';     
};
const user1 = new CreateUser('Abhishek', 'Singh', 'singh@gmail.com', '18', 'Mirzapur uttar pradesh');
const user2 = new CreateUser('Abimaniyu', 'dev', 'singh@gmail.com', '16', 'prayagraj uttar pradesh');
const user3 = new CreateUser('prithivi', 'chauhan', 'singh@gmail.com', '24', 'varanasi uttar pradesh');
const user4 = new CreateUser('Raaj', 'Rajput', 'singh@gmail.com', '14', 'Delhi ');

for(let key in user1){
    // console.log(key);  // these will give both user key and prototype key
//  we want that ki prototype wali key ko naa read kare

    if(user1.hasOwnProperty(key)){ // we can use these method
        console.log(key);
    }
}