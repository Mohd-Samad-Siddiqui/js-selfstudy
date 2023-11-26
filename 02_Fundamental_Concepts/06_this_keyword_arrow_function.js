

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


*/
