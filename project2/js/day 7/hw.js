//wap using loop to print the sum of arrays:
//a=[10,20,30,40,50]

//wap to reverse string "hello"=="olleh"

//wap to check if given string is palindrome

//wap to check if given number is odd or even

//wap to swap 2 numbers where a=20 and b=30

//wap using arrow function to print the given number is odd or even

//wap to print the cowel from a=[hello sir]

//q-1

  a=[10,20,30,40,50];
let tot=0
for (let i=0; i<=a.length; i++){
tot += a[i];
}
console.log(tot);

//check odd or even

let n=46
if (n%2==0){
    console.log("even number");
}else{
    console.log("odd number");
}


//using arrow
function oddeven$(number){
  if(number%2==0){
    return ("even")
  }else {
    return ('odd')
  }
}
  console.log(oddeven$(73));

