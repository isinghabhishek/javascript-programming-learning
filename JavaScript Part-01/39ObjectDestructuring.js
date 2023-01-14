//   Object Destructuring

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);

//  Another Way
let { bandName:var1, famousSong:var2 } = band;
console.log(var1);