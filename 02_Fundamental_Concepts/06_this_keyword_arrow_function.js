

/*

                    ----------------------------this keyword---------------------------

    In JavaScript, the "this" keyword refers to an object.

    Which object depends on how "this" is being invoked (used or called).

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


    2. this Alone: When used alone, "this" refers to the global object.
       ----------
            Because "this" is running in the global scope.
            In a browser window (chrome console browser) the global object is [object Window]:

            Example: let x = this;     
                     console.log(x);        //Output: Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
            
            Note:  In strict mode (like node.js environment, etc), when used alone, this also refers to the global object:
            Example: "use strict";
                    let x = this;
                    console.log(x);            //Output: Undefined 


    3. this in a Function (Default): In a function, the global object is the default binding for "this" keyword. Bascially, it means that "this"
       ----------------------------  in function directly points to [Object Window]. 
            In a browser window the global object is [object Window]:

            Example: function myFunction() {
                        return this;
                     }
*/