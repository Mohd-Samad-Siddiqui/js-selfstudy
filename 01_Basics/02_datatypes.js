"use strict"; // treat all JS code as newer version, I'll also try to use it in my code.

// alert( 3 + 3) // we are using nodejs, not browser


/*------------DATATYPES--------------*/
/*
In JavaScript, there are two main data types: primitive data types and objects. 
The primitive data types include numbers, strings, booleans, null, and undefined. 
Objects, on the other hand, are more complex data types and can hold multiple values in terms of properties and methods.

Note:
*Primitive Data Types:
    a) Immutability: Primitive data types are immutable, which means their values cannot be changed after they are created. 
       For example, if you have a variable let num = 5;, you cannot change the value of num to something else.
    b) Stored by Value: Primitive data types are stored by value. 
       When you assign a primitive data type to a variable, the variable holds a copy of the actual value.
    Eg:let num = 5;
       let num2 = num; // num2 now holds a copy of the value 5, independent of num

*Objects:
    a) Mutability: Objects are mutable, which means their properties can be changed after they are created. 
       You can add, modify, or delete properties of an object.
    b) Stored by Reference: Objects are stored by reference. When you assign an object to a variable, the variable holds a reference to the object in memory, not the actual object itself. 
       If you assign an object to another variable, both variables will point to the same object in memory.
    Eg:let obj = { key: 'value' };
       let obj2 = obj; // obj and obj2 both reference the same object in memory
       obj2.key = 'new value'; // this changes the value of key in the original object as well



They're 7 types of Primitive datatypes:
1. Number => The range of it is -(2^53 - 1) to (2^53 - 1)
2. BigInt => It could be use for the large numbers even beyond (Number.MAX_SAFE_INTEGER)
3. String => It represents textual data. We can write it "" as well as '' 
4. Boolean => It represents true/false value
5. Null => It itself standalone as value. Eg: If we're taking temp from any wheather API, bychance we lost the data then the API will return 0 as temperature but it'll considered as 0 degree. So we don't want to get confuse with error 0 and real 0 degree. There we'll use null if it'll fail to give the temperature.
6. Undefined => When variable is declared but doesn't initialized by any value and we'll try to log it then we'll get 'undefined'
7. Symbol => Use to represent unique value.

8. Object => Already defined above.

*/

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;
console.log(typeof undefined); // return type of undefined is "undefined"
console.log(typeof null); // return type of null is "object"
