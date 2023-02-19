//   sort method

// javascript sort according to there ascii value,
// sort() changes the original given array
// where as  forEach(), map(), filter()  these doesn't change the original array.

// ascii value code

//   'a'  :  97
//   'b'  :  98
//   'c'  :  99
//   'd'  :  100
//   'e'  :  101
//   'f'  :  102
//   'g'  :  103
//   'h'  :  104
//   'i'  :  105
//   'j'  :  106
//   'k'  :  107
//   'l'  :  108
//   'm'  :  109
//   'n'  :  110
//   'o'  :  111
//   'p'  :  112
//   'q'  :  113
//   'r'  :  114
//   's'  :  115
//   't'  :  116
//   'u'  :  117
//   'v'  :  118
//   'w'  :  119
//   'x'  :  120
//   'y'  :  121
//   ' '  :  


// ASCII value code
//   'A'  :   65
//   'B'  :   66
//   'C'  :   67
//   'D'  :   68
//   'E'  :   69
//   'F'  :   70
//   'G'  :   71
//   'H'  :   72
//   'I'  :   73
//   'J'  :   74
//   'K'  :   75
//   'L'  :   76 
//   'M'  :   77
//   'N'  :   78
//   'O'  :   79
//   'P'  :   80
//   'Q'  :   81
//   'R'  :   82
//   'S'  :   83
//   'T'  :   84
//   'U'  :   85
//   'V'  :   86
//   'W'  :   87
//   'X'  :   88
//   'Y'  :   89
//   'Z'  :   90


//   '0'  :   48
//   '1'  :   49
//   '2'  :   50
//   '3'  :   51
//   '4'  :   52
//   '5'  :   53
//   '6'  :   54
//   '7'  :   55
//   '8'  :   56
//   '9'  :   57


// use full in the sorting accordigly alphabatcally

const userNames = [ 'abhishek', 'ashutosh', 'varsha', 'shelly', 'Shelly', 'Abhishek'];
// capital  letters have less ASCII values
// that's why they will come first
userNames.sort();
console.log(userNames);



// sorting 
//  5,9,1200,400,3000 (given to sort)
//  5, 9, 400, 1210, 3000  (result) [expected]

//  sort method
//  changes the original array
const numbers = [5, 9, 1200,410,3000]; // javascript does'nt sort it as a number
// javascript sort according to there ascii value, and
//  javascript consider it as string--> ["5", "9", "1200", "410", "3000"]
// it convert number into string and then sort(), according to ther "ASCII Value"

//  ["5", "9", "1200", "410", "3000"] 
//  [53, 57, 49, 52, 51]

numbers.sort(); // javascript does'nt sort it as a number
console.log(numbers);


// sorting Number using The sort() Method
const numbers1 = [5, 9,1200,410,3000];
// numbers1.sort((a,b)=>{
//     return a-b;   // for descending order--> b-a;
// });
numbers1.sort((a,b)=>a-b);  // simple way using arrow method
console.log(numbers1);

// understaning the working
//  1200, 410
//  a-b ---> 790
//  a-b ---> positive(greater than 0) ---> b, a
//  410, 1200

//  a-b ---> negative ---> a, b
//  5, 9 ---> -4


// real application
const products = [
    {productId: 1, ProductName: "p1", price: 300},
    {productId: 1, ProductName: "p2", price: 3000},
    {productId: 1, ProductName: "p3", price: 240},
    {productId: 1, ProductName: "p4", price: 8000},
    {productId: 1, ProductName: "p5", price: 199},
]
//  lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowToHigh);

//highToLow
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(highToLow);

