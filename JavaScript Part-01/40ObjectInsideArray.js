//   Objects inside Arrays
// very useful in real world application

const users = [
    {userID: 1, firstName: 'abhishek', gender: 'male'},
    {userID: 2, firstName: 'ashutosh', gender: 'male'},
    {userID: 3, firstName: 'vaibhav', gender: 'male'}
]
for(let user of users){
    console.log(user.firstName);
}