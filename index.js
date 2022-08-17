// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
        let firstTwo = [...drivers]
        return firstTwo.slice(0,2);
   }
const returnLastTwoDrivers = function(){
    let lastTwo = [...drivers]
    return lastTwo.slice(-2)
}
const selectingDrivers  =[returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers[0];

const createFareMultiplier = a=> {
    return function fareQuintupler(){
        return a*5
    }
}

const fareDoubler = ()=> {
    return function (b){
        return b*2
    }(10)
}
const fareTripler = ()=> {
    return function (c){
        return c*3
    }(12)
}
const selectDifferentDrivers = (array, func) =>{
    return func(Math.random(array))
}