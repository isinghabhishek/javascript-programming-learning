//   Object Destructuring

const band = {
    singerName: "Lata Mangeshkar Ji",
    famousSong: "Aakh me bhar lo paani",
    year: 1965,
    anotherFamousSong: "Jai Hind",
};

let { singerName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);

//  Another Way
let { singerName:var1, famousSong:var2 } = band;
console.log(var1);