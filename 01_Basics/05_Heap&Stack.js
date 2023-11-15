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


NOTE: In case of Stack -
        const userName = "Reyan";
        const userCopy = userName; (Here, we're giving the copy of the userName in the userCopy variable. It means if we change the userCopy's data then it won't effect the userName because if stores the copy of userName)

        userCopy = "Danish";
        console.log(userName);   //Output  : Reyan
        console.log(userCopy);   //Output  : Danish
        -----------------------------------------------------------------------
    In case of Heap - 
        const user = {                                  (Created an object with the name of user, the user variable will be store in stack memory and it's data i.e. object i.e. "name" and "email" will be store in heap memory and "user" word will point to the object)
                name: "Kulsoom",
                email: "kulsoom@xyz.com"
        }

        const anotherUser = user (Created another variable "anotherUser" which is also store in stack memory but it is also pointing to the object i.e. "name" and "email" in heap memory. If we'll change anotherUser data this time then user data will also get change because both are pointing to the same object in the heap memory.)
        const anotherUser.email = "shiza@xyz.com"; (Changing the value of the object with the help of anotherUser and because of this user.email value will also get change)
        console.log(user.email);         //Output - shiza@xyz.com
        console.log(anotherUser.email);  //Output - shiza@xyz.com
*/
/*-------------------------------------------------------------------------------------------------------------------------------*/

const employee = { 
    name: 'Rajesh', 
    age: 30, 
    }; 
    
const name="Ram"
// Allocates memory for object in heap. Values  
// in object are primitive, which is why they are stored in stack. 
    
function getname(name) { 
    return name; 
} 
// The function return value is given to stack after being evaluated in the heap 
    
const newEmployee = employee; 
// The newEmployee object will be stored in the stack and it will refer to the employee object in heap
    

// For better understanding the image link is here: 
// https://felixgerschau.com/static/b452488bd7eeac0405c48f164da6280d/5a190/stack-heap-pointers.png

