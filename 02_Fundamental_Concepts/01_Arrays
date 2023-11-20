/*
                    ------------------------ARRAY----------------------
                                        ------------


An array in JavaScript is a data structure that allows you to store and organize multiple values under a single variable. 
Think of it as a container that holds a collection of items, each identified by an index or a key.

Types of Data in Arrays: Arrays in JavaScript can store various types of data, including numbers, strings, booleans, 
objects, and even other arrays.

Declaration and typeof: There are several ways to declare an array in JavaScript:

    a)  Literal notation:
        let myArray = [1, 2, 3, "hello", true];
        
    b)  Using the Array constructor:
        let myArray = new Array(1, 2, 3, "hello", true);
        
The typeof operator can be used to check the type of an array:
    console.log(typeof myArray);        // Output: "object"


In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
    1. JavaScript arrays are resizable.
    2. JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any 
       JavaScript objects create shallow copies, rather than deep copies).


Shallow Copy: In case of arrays or objects, when we create an array(MainArray) and copy it into another array(ArrayCopy) then
             it'll create the reference. Bascially it means if we do some changes in the ArrayCopy then the MainArray will also
             get affected.

            Code: let originalArray = [1, 2, {a: 3}];
                  let shallowCopy = originalArray;
                  shallowCopy[2].a = 99;
                  console.log(originalArray[2].a);          // Output: 99
            Note: The change is reflected in both arrays because they reference the same object.

Deep Copy: A deep copy of an object or an array is a copy whose properties do not share the same references unlike Shallow Copy.

            Code: let originalArray = [1, 2, {a: 3}];
                  let deepCopy = JSON.parse(JSON.stringify(originalArray));
                  deepCopy[2].a = 99;
                  console.log(originalArray[2].a);          // Output: 3
            Note: The change only impacts the deep copy, leaving the original array unchanged.

----------------------------------------------------------------------------------------------------------------------------------

    1. Push and Pop:
       ------------

        Definition:
        push: This is a method in JavaScript that adds one or more elements to the end of an array.
        pop: This method removes the last element from an array and returns that element.

        Code Example:

            // Push example
            let fruits = ['apple', 'banana', 'orange'];
            fruits.push('grape');
            console.log(fruits);        // Output: ['apple', 'banana', 'orange', 'grape']

            // Pop example
            let removedFruit = fruits.pop();
            console.log(removedFruit);  // Output: 'grape'
            console.log(fruits);        // Output: ['apple', 'banana', 'orange']

    2. Unshift and Shift:
       -----------------
       
        Definition:
        unshift: This method adds one or more elements to the beginning of an array and returns the new length of the array.
        shift: This method removes the first element from an array and returns that element. It also shifts the remaining 
        elements to a lower index.
        
        Code Example:

            // Unshift example
            let numbers = [2, 3, 4];
            let newLength = numbers.unshift(10);
            console.log(newLength);     // Output: 4
            console.log(numbers);       // Output: [10, 2, 3, 4]

            // Shift example
            let shiftedNumber = numbers.shift();
            console.log(shiftedNumber);  // Output: 10
            console.log(numbers);        // Output: [2, 3, 4]


    Difference between Push/Pop and Unshift/Shift:
    ----------------------------------------------
    1.  Push and Pop operate on the end of an array, adding elements to the end (push) or removing elements from the end (pop).
    2.  Unshift and Shift operate on the beginning of an array, adding elements to the beginning (unshift) or removing elements 
        from the beginning (shift).

----------------------------------------------------------------------------------------------------------------------------------

3. Slice and Splice:
   ----------------

    a) Slice:

        Definition: The slice method is used to extract a portion of an array and returns a new array without modifying the original array.
        Code: let fruits = ['apple', 'banana', 'kiwi', 'orange'];
            let slicedFruits = fruits.slice(1, 3);
            console.log(slicedFruits);        // Output: ['banana', 'kiwi']
            console.log(fruits);              // Output: ['apple', 'banana', 'kiwi', 'orange']
      

    b) Splice:

        Definition: The splice method is used to add or remove elements from a specific position in an array.
        Code: let fruits = ['apple', 'banana', 'kiwi', 'orange'];
            let replacedFruits = fruits.splice(1, 2, 'grape', 'melon');
            console.log(removedFruits);      // Output: ['banana', 'kiwi']
            console.log(fruits);             // Output: ['apple', 'grape', 'melon', 'orange']

                                    OR

            let fruits = ['apple', 'banana', 'kiwi', 'orange'];
            let removedFruits = fruits.splice(1, 2);
            console.log(removedFruits);      // Output: ['banana', 'kiwi']
            console.log(fruits);             // Output: ['apple', 'orange']
      
    Difference:
    ---------
    1. slice returns a new array with selected elements without modifying the original array.
    2. splice can add, remove, or replace elements at a specific position in the original array.

*/
