// lexical environment, scope chain

const lastName = "singh";

const printName = function(){
    const firstName = "abhishek";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();