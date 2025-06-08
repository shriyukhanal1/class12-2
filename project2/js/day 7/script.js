//wap that ask input from user and addd iti

firstnumber = Number (prompt("enter first no"))
secondnumber = Number (prompt("enter second no"))
total=firstnumber+secondnumber
document.getElementById("total").innerHTML=total


//wap to check type of variable typeof

//math=it is a inbuilt object that is used to perform math operations


console.log(Math.floor(Math.random()*1000));
console.log(Math.PI);
console.log(Math.min(6,4,5,2,3,1,0));
console.log(Math.max(33,4,2,3,45,5,44));

//deciamal value
console.log(Math.floor(0.3));

//squrt
console.log(Math.squrt(81));
console.log(Math.cbrt(8));

//power
console.log(Math.pow(2,3));

//array is a collection o mix items

arr=[1,2,3,4,5,true,"hhello"]
console.log(arr);
//indexing in array goes from 0 to n-1

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));
console.log(arr(3));
console.log(arr(4));
console.log(arr(5));

//use of for loop in arrays

for(let i=0 ; i<arr.length ; i++){
    console.log(arr(i));
}

//arr2=[1,2,3,4,5,6,7,8,,9]=sum of array
arr2=[1,2,3,4,5,6,7,8,,9]
sum=0

for(let i=0 ; i<arr2.length ; i++){
    summ=arr2(i)+sum;
}
console.log(summ);


 //arrays methods--> pop,push,shift,unshift,splice,reverse,sort

 arrs=[1,2,3,4,5,6,7,8,9,10]
 console.log(arrs);

 //pop-->it removess last eelement
 arrs.pop()
 console.log(arrs);

 //push--> it adds eslemnt at the last
 arrs.push(11);
 console.log(arrs);

 //shift-->it removes element from start
 arrs.shift();
 console.log(arrs);

 //unshift--> adds element from the start
 arrs.unshift(12);
 console.log(arrs);

 //sort:in sorting order
 arrs.sort();
 console.log(arrs);

 //reverse=element reverse
 arrs.reverse();
 console.log(arrs);

 //splice=paticular or multiple element remove or add

console.log(arrs);
arrs.splice(0,6,0,1,2)
console.log(arrs);

//hommmework

//wap using loop to print the sum of arrays:
//a=[10,20,30,40,50]

//wap to reverse string "hello"=="olleh"

//wap to check if given string is palindrome

//wap to check if given number is odd or even

//wap to swap 2 numbers where a=20 and b=30

//wap using arrow function to print the given number is odd or even

//wap to print the cowel from a=[hello sir]



//array iteration
//using for loop
for(let i=0;i<arrs.length;i++){
    console.log(arrs[i]);
}
//for in
for(i in arrs){
  console.log(arrs[i]);
}

//for each
arrs.forEach(items) =>{
  console.log(items);
}

//map
let abc=arrs.map((items,index)=>items)
console.log(abc);

//filter
let even=arrs.filter((items)=>){
  if(items%2==0){
    return items
  }
}
console.log(even);

//reduce
abcd=[10,20,30,40,50]
let red=abcd.reduce((acc,items)=>acc+items,0)
console.log(red);

//objct in js
let sb={
    "name":"shriyu",
    "age":28,
    "gender":"female"

}

console.log(sb.name)
console.log(sb.age)
