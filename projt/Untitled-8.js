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
let even=arrs.filter((items))=>{
  if(items%2==0){
    return items
  }
}
console.log(even);

//reduce
abcd=[10,20,30,40,50]
let red=abcd.reduce((acc,items)=>acc+items,0)
console.log(red);
