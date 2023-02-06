// mindGame() function is take positive number and calculate the number first Multiplication with 3 then addition with 10 and then division by 2 and after then subtraction by 5 then return the subtraction

function mindGame(num) {
    if (typeof num !== "number") {
        return "Please enter a number";
      }
    else if(num < 0){
        return " Please take positive Number"
    }
    const numMulti = num *3;
    const numAddition = numMulti + 10;
    const numDivision = numAddition / 2;
    const numSubtraction = numDivision - 5;
    return numSubtraction;
}


// evenOdd() function is used string length if the length is odd then return odd and if the length is even then return even

function evenOdd(name) {
    if (typeof name !== "string") {
        return "Please enter a String.";
    }
    let nameLength = name.length;
    if (nameLength % 2 === 0){
        return "even";
    }
    else {
        return "odd";
    }
}


//  isLGSeven() function is used if number less than 7 then return the value and the number is getter than 7 then return double of the number;

function isLGSeven(num) {
    if (typeof num !== "number") {
      return "Please enter a number.";
    }
    const difference = num - 7;
    if (difference < 7) {
      return difference;
    } else {
      return 2 * num;
    }
  }
  
  
// findingBadData() function is used for count the negative value

function findingBadData(arr) {
    if(!Array.isArray(arr)){
        return "Please Give array";
    }
    let badDataCount = 0;
    for(let i=0; i<arr.length; i++){
        let element = arr[i];
        if(typeof element !== "number"){
            return "Please Input a Number";
        }
        else if(element < 0 ){
            badDataCount++;
        }
    }
    return badDataCount;
}


// gemsToDiamond() function is used for how many total diamond in 3 friends if total is more than or equl 2000 the return total - 2000 and less than 2000 them return the total diamond 

function gemsToDiamond(gems1, gems2, gems3) {
    if(typeof gems1 !== 'number' || typeof gems2 !== 'number' || typeof gems3 !== 'number'){
        return "Please Input a Number";
    }

    const firstFriend = gems1 * 21;
    const secondFriend = gems2 * 32;
    const thirdFriend = gems3 * 43;
    let total = firstFriend + secondFriend + thirdFriend;
    if(total >= 1000 * 2) {
        return total - 2000;
    }
    else if(total < 1000 * 2) {
        return total;
    }

}