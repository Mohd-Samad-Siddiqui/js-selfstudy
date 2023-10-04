/*
Memory Management In JS
Unlike low-level languages like C, JavaScipt automatically allocates memory for an object when it is created
and frees it when it's not in usen anymore (Garbage Collection).

Memory Life Cycle:
1. Allocates the Memory - Js allocates the memory to the created object.
2. Use of Allocated Memory.
3. Release of Allocated Memory - When the object isn't in any use the Js released those memory.

Js Engine has two places to store the memory.
1. Stack - It is a data structure used to store static data. Static data refers to data whose size is known 
by the engine during compile time. In JavaScript, static data includes primitive values like strings, 
numbers, boolean, null, and undefined. References that point to objects and functions are also included. 
A fixed amount of memory is allocated for static data. This process is known as static memory allocation.

2. Heap - It is used to store objects and functions in JavaScript. 
The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.

-------------------------------------------------------------------------------------------------------------------------------
*/

const person = {
    name: 'John',
    age: 24,
};

const dog = {
    name: 'puppy',
    personId: 1,
  };

let student = "Rohan";

function getPerson(student){
    return student;
}