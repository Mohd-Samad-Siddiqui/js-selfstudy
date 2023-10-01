/*var, let and const topic */
const studentId = 12345;
let studentName = "Samad";
let studentEmail = "samad@gmail.com";
var studentClass = "Beginner";
studentAddress = "Varanasi";  //We can declare the variable also like this & it is possible because var can be used if there's no keyword for the variable declaration


console.table([studentId, studentName, studentEmail, studentClass]);


/*
var has the functional scope.
let and const has the block scope.
In real life we usually don't use var because it can create the confusion between functional and block scope.
Eg: var name = "Samad";
    Name = () => {
        var name = "Obaida";  //I was trying to give the new variable with same name but unfortunately 
                                it'll change the value of my first variable which is outside of this function.
        return name;                                
    }

-------------------------------

let can be declared with/without initializing the value but const has to be declared with initializing the value.    
let variable can't be redeclared with the same name in the same block scope.
Eg: let name = "Riya";
    let name = "Raman";
    Here, I'll get the error.
*/    