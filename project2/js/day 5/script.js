  for(let i=0;i<5;i++){
   start=""
    for(let j=0; j<=i; j++){
      start += "*" ;
    }
    console.log(start);
  }


  //***** 
  //**** 
  ///***
  //**
  //*a
    for(let i=5;i<5;i--){
   start=""
    for(let j=1; j<=i; j++){
      start -= "*" ;
    }
    console.log(start);
    }

    //function in js- a block of code runs hen it is called/invoked
    //function--keyboard

    //function functionname(parameters){
    //body
    // } 

    //wap to  print the nam of student

    function abc(){
        console.log("my name is shriyu khanal")
    }

    abc()
     abc()
      abc()
       abc()
        abc()


        //type of functioon in js
        //1.inbult fuction
        // user defined function

        //parameters and arguments in a function

        function abc(name,age){
            console.log(name,age);
        }
        abc("shisir" , 27)
        
        abc("hari" , 74)
        
        abc("sapkota" , 17)
        
        abc("khanal" , 15)


        //wap a program to print name andage if a student using return

        function studentone(name,age){
        return `${name} and ${age}`
        }

        console.log(
            studentone("shishir",27)
        );

       studentone("hari" , 74)
        
        studentone("sapkota" , 17)
        
        studentone("khanal" , 15)

        
        //wap a program to print only hi and helo using return statement

        function hi(){
            return "hi,hello"
        }
console.log (hi());

//function types
//funtion with paa,eter and no return type
abc()
//funtion with no parmeter and return type
abc()
//funtion with parameter and no return type
studentone()
//funtion with no parameter but eith return type
hi()

//wap to print even number between 20 and 30 using function

function EVEN(n,m){
for(let i=n ; i<=m ; i++){
    if (i%2 == 0){
        console.log(i);
    }
}
EVEN(20,30)



//wap to print odd number between 20 and 30 using function

function odd(n,m){
for(let i =  n ; i<=m ; i++){
    if (i%2 != 0){
        console.log(i);
    }
}
}
odd(20,30)

//default parameter

function odd(n=20, m=30) {
    for (let i=n; i<=m; i++){
        if (i%2==0){
            console.log(i);
        }
    }
} 
}