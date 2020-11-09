//MaxSecond And MinSecond
let numArray = new Array();
for(let i=0;i<10;i++){
    let num = Math.floor(Math.random()*900)+100;
    numArray.push(num);
}
console.log(numArray);
let maxNum = 0;
let minNum = 1000;
let maxsecond = 0;
let minsecond = 1000;
for(let element of numArray){ 
    maxNum = Math.max(element,maxNum);
    minNum = Math.min(element,minNum);
}
for(let element of numArray){
    maxsecond = (element<maxNum&&element>maxsecond)?element:maxsecond;
    minsecond = (element>minNum&&element<minsecond)?element:minsecond;
}
console.log(maxNum);
console.log(maxsecond);
console.log(minNum);
console.log(minsecond);
//MaxSecond And MinSecond By Sorting
let numArray = new Array();
for(let i=0;i<10;i++){
    let num = Math.floor(Math.random()*900)+100;
    numArray.push(num);
}
console.log(numArray);
let sortedArray = new Array();
sortedArray = numArray.slice(0).sort();
console.log("Second Max ="+sortedArray[numArray.length-2]);
console.log("Second Min ="+sortedArray[1]);
//Check For PrimeNumbers
function primeNumberChecker(num){
    if(num!==1){
        for(let i=2;i<=num;i++){
            if(i==num){
                return true;     
            }
            if(num%i==0){
                return false;
            }
        }
    }
}

let primeFactorsArray = new Array();
let num = Math.floor(Math.random()*100);
console.log("Num is: "+num);
for(let i=1;i<=num/2;i++){
    if(num%i==0&&primeNumberChecker(i)){
        primeFactorsArray.push(i);
    }
}
console.log(primeFactorsArray);
let numberArray = new Array();
//Numbers Summing To Zero
numberArray.push(2);
numberArray.push(7);
numberArray.push(-9);
console.log(numberArray);
let sum =0;
function findSum(sum,num){
    sum+=num;
    return sum;
}
numberArray.reduce(findSum,0);
console.log("Sum is "+sum);
let numArray = new Array();
//Print repeat Digits Numbers
for(num=1;num<=100;num++){
    if(num%10==(Math.floor(num/10)%10)&&num%10!=0)
        numArray.push(num);
}
console.log(numArray);

let numArray2=new Array();
function isValidNumber(number){
    return number%10==(Math.floor(number/10)%10)&&number%10!=0;
}
for(num=1;num<=100;num++){
    numArray2.push(num);
}
let finalArray = numArray2.filter(isValidNumber);
console.log("Final array: "+finalArray);