

/*

                    ----------------------------this keyword---------------------------

    In JavaScript, the "this" keyword refers to an object.

    Ques. Which object?
    Ans.  It depends on how "this" is being invoked (used or called).

    The "this" keyword refers to different objects depending on how it is used:
        1. In an object method, "this" refers to the object.
        2. Alone, "this" refers to the global object.
        3. In a function, "this" refers to the global object.
        4. In a function, in strict mode, "this" is undefined.
        5. In an event, "this" refers to the element that received the event.
        6. Methods like call(), apply(), and bind() can refer "this" to any object.

    
    1. this in a Method: When used in an object method, "this" refers to the object.
       ----------------

            Example: The fullName method is a method of the person object.
                const person = {
                    firstName: "John",
                    lastName : "Doe",
                    id       : 5566,
                    fullName : function() {
                        return this.firstName + " " + this.lastName;
                    }
                };


    2. this Alone (Browser Window): When used alone, "this" refers to the global object. Because "this" is running in the global scope. In a browser window 
       ---------------------------  (chrome browser -> console) the global object is [object Window].

            Example: let x = this;     
                     console.log(x);        //Output: Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
            
            Note:  In strict mode (browser window with 'use strict' line on the top), when used alone, this also refers to the global object.
            Example:"use strict";
                    let x = this;
                    console.log(x);         //Output: Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …} 
                    
            Note: In case of Node.js environment if you'll use 'this' keyword alone then you'll get {} (an empty object) because there's no context in the global object yet.
            Example: let x = this;
                     console.log(x);        //Output: {} 


    3. this in a Function (Default): In a function, the global object is the default binding for "this" keyword. Bascially, it means that "this"
       ----------------------------  in function directly refers to [Object Window].

            Example: function myFunction() {
                        return this;
                     }
                     console.log(myFunction());    //Output: Object [global] { global: [Circular *1],......} (You'll get something in return, but not an error)


    4. this in a Function (Strict Mode): If you'll use 'use strict' mode then you'll get undefined. Because JavaScript 'strict mode' does not allow default binding.
       --------------------------------
            Example: 'use strict'
                     function myFunction() {
                        return this;
                     }
                     console.log(myFunction());    //Output: undefined


    5. this in Event Handlers: In HTML event handlers, 'this' refers to the HTML element that received the event.
       ----------------------
       In this eg the button is the HTML element which is receiving the event so 'this' is refering to it.
       Example: <button onclick="this.style.display='none'">
                  Click to Remove Me!
                </button>

    6. Methods like call(), apply(), and bind(): Read W3Schools doc.
       ----------------------------------------
==============================================================================================================================================================================================

                  --------------------------------Arrow Function in JavaScript---------------------------------
                  
    Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax by removing the function keyword.
    Syntax: hello = () => {
              return "Hello World!";
            }

    Implicit Return (Return by itself): It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.
    ---------------------------------
    Example: hello = () => "Hello World!";
    Note: This works only if the function has only one statement.

    If you have parameters, you pass them inside the parentheses.
    Example: productFunc = (a, b) => a * b;

    In fact, if you have only one parameter, you can skip the parentheses as well.
    Exmaple: hello = name => "Hello " + name;
          OR hello = name =? ("Hello " + name);     //But if you give curly brackets rather parentheses then you have to use return keyword.

    If you've return an Object with the help of Implicit Return.
    Example: (Wrong way) objectFunc = () => {name: "Samad"};     //Output: undefined (The curly braces are just for showing it's an object)
             (Right way) objectFunc = () => ({name: "samad"});   //Output: {name: 'Samad'} (You've to use parentheses for returning the object in case of Implicit Return.
=============================================================================================================================================================================================

            --------------------------------IIFE (Immediately Invoked Function Expression) in JavaScript---------------------------------

    It is a JavaScript function that is executed as soon as it is defined. The primary purpose of using IIFE is to create a private scope for variables and functions, 
    preventing them from polluting the global scope.
    Syntax: (function() {
                //code inside the IIFE
            })();

            Breaking the components to understand the syntax:
            1. First (): The outer parentheses ( ... ) are used to group the function declaration or expression. 
            2. Function Expression: The function itself is defined inside the parentheses. It can be an anonymous function (a function without a name) or a named 
                                    function expression.
            3. Second () for Invoking the function: Immediately after defining the function inside the parentheses, another pair of parentheses () is used to 
                                                    invoke (call) the function. This is what makes it "immediately invoked."
            4. (;) Semicolon: At the end it's important. If the first IIFE code isn't having semicolon and there's another IIFE code right after the first IIFE code, 
                              it could lead to unexpected behavior (it won't let the second IIFE code to run until you give the semicolon to the first IIFE code.)

    Ques. What is Global Pollution?
    Ans.  Think of the global scope (the entire JavaScript environment) as a big, shared space. If everyone starts putting their stuff (variables and functions) everywhere in that  
          space without any order, it can lead to chaos. Variables and functions declared without any protection can clash with each other.
  
    Without IIFE: Imagine this is the shared space
    ------------ 
    Example: var myVar = 'I am global';
             function myFunction() {
                // Some code here
             }
    If many developers use similar names (like 'myVar' and 'myFunction'), there's a risk of conflicts or unintended interactions.
            
    With IIFE: To avoid this issue we use IIFE.
    ----------
    Example: (function() {
              // This is your private space
                var myVar = 'I am private';   
                function myFunction() {
                   // Some code here
                }
              })();
    
    Named Function IIFE: The naming in the named function expression.  |  Anonymous Function IIFE: There's no naming function expression available.
    -------------------                                                |  ------------------------
    Example: (function namedFunction() {                               |  Example:  (function() {
                // Some code here.                                     |               // code
             })();                                                     |             })(); 


    Passing Argument and Parameter to an IIFE: You can pass the parameter in function(parameter) and to pass an argument you can write in last parenthese (argument);
    -----------------------------------------
    Example: This time we'll use arrow function but yeah we can do this with the normal function as well.
             ((name) => {
               console.log(`Using parameter in IIFE. Hey I'm ${name}`);
             })('John');


*/
