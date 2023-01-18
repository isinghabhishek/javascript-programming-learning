//    Nested Destructuring

const users = [
    {userID: 1, firstName: 'abhishek', gender: 'male'},
    {userID: 2, firstName: 'ashutosh', gender: 'male'},
    {userID: 3, firstName: 'vaibhav', gender: 'male'}
]
const [{firstName: user1firstName, userID}, , {gender: user3Gender}] = users;
console.log(user1firstName);
console.log(userID);
console.log(user3Gender);