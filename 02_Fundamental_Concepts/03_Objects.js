/*
                ----------------------------------Objects in Js------------------------------


    Definition: Objects are complex data type in js. It consists of key-value pairs, where each key is a string (or a Symbol) and 
    ----------- each value can be valid Js data type, including an objects.


    Note- Singleton Object: A singleton in JavaScript is an object designed to have only one instance and it additionally offers a global 
    ----------------------- method to access that singular instance. This means that, in any part of the code, 
                            you can easily obtain or interact with the same unique instance of the singleton object.
    Mota-Mota abhi k liye:  (Basically, jb aap contrustor k through object create krtein hain tb singleton object create hota aur ye 
                            apne tarah ka ek hi object hota hai.)

    Declaration of an Object:
    -------------------------
    1. Object Literal: 
        Code: let myObject = {
                key1: 'value1',
                key2: 'value2',
                  // ...
              };
        In case of Object Literals, Singleton Object can't be created.    
    
    2. Object.create method:
        Code: let myObject = Object.create(null);
              myObject.key1 = 'value1';
              myObject.key2 = 'value2';
                // ...

        In this case Singleton Object gets created.

--------------------------------------------------------------------------------------------------------------------------------------

    Example for Object Literal to understand it more better:
    
    Example 1st: //Declaring and initializing an obj
    ------------
    let obj = {
        name: "Samad",
        currentYear: 2023
    }

    //Getting it's value
    console.log(obj.name +" "+ obj.currentYear);    // We use . to get the value of the key, i.e. obj.key

    Example 2nd: //Declaring the same object but this you can also write the key in "" or ''
    ------------
    let obj = {
        name: "Samad",
        "full name": "Mohd. Samad Siddiqui",
        currentYear: 2023
    }

    //Getting it's value
    console.log(obj.name);            // Output: Samad
    console.log(obj["full name"]);    // Output: Mohd. Samad Siddiqui (Here, when we declare the key in "" then we can access the key by obj["key"])
    console.log(obj.currentYear);     // Output: 2023

    
    
    Question: Declare and initialize Symbol variable and then use it as key inside an object. Remember the type of the key should be Symbol
    --------- not String.

    Answer: let mySymbol = Symbol("samad@gmail.com");
            let obj = {
                name: "Samad",
                [mySymbol]: "samad.siddiqui@yahoo.com";     (You've to write mySymbol in square bracket or else the typeof will be String )
            }

            console.log(obj.name);             // Output: Samad
            console.log(obj[mySymbol]);        // Output: samad.siddiqui@yahoo.com (You've to access that key by using [] i.e. obj[key] in case of Symbol)
            console.log(typeof.obj[mySymbol]); // Output: Symbol 
    

            
    Object.freeze(): It is used to stop reinitializing the value of the key and also to not add any new key with it's value. 
    ---------------- But if you'll try to reinitialize the value or to create new key it won't give any error.

    Example: let obj = {
                name: "Samad"
            }
            
            //Using object.freeze()
            Object.freeze(obj);

            //Reinitializing the name key
            obj.name = "Mohd. Samad Siddiqui"

            console.log(obj.name);     // Ouput: Samad (We won't get any error plus we'll get our same old value of name)



    Function as a key: in JavaScript, you can create a key in an object as a function. Functions in objects are often referred to as methods.
    -----------------

    Example: let myObject = {
                key1: 'value1',
                key2: 'value2',
                myMethod: function() {
                    console.log('This is a method.');
                }
            };

            // Accessing properties
            console.log(myObject.key1); // Output: 'value1'

            // Calling the method
            myObject.myMethod(); // Output: 'This is a method.'

*/