
// Feet to Mile Convertion
function feetToMile(feet){
    var mile = feet / 5280
    return mile; 
}

var howMuchMile = feetToMile(5000);
console.log(howMuchMile);

var secondResult = feetToMile(10000);
console.log(secondResult);


// For 14 Chair wood required: result in q/feet
function woodCalculator(quantity){
    var forOneChair = quantity * 1
    return forOneChair;
}
var chairWoodReq = woodCalculator(14);
console.log(chairWoodReq);

// For 5 Table wood required: result in q/feet
function woodCalculator(quantity){
    var forOneTable = quantity * 3
    return forOneTable;
}
var tableWoodReq = woodCalculator(5);
console.log(tableWoodReq);

// For 10 Khat wood required: result in q/feet
function woodCalculator(quantity){
    var forOneKhat = quantity * 5
    return forOneKhat;
}
var khatWoodReq = woodCalculator(10);
console.log(khatWoodReq);





 