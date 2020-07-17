// var feet = 5000;
// var mile = feet/5280;
// console.log(mile);

function feetToMile(feet){
    var mile = feet / 5280
    return mile; 
}

var howMuchMile = feetToMile(5000);
console.log(howMuchMile);

var secondResult = feetToMile(10000);
console.log(secondResult);