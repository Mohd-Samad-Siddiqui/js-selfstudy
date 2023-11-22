/*
-----------------------------------Concat(), Spread Operator, from Keyword, of keyword---------------------------------------

Concat Method and Spread Operator
---------------------------------
let marvel_heroes = ["Ironman", "Thor", "Hulk", "Dr. Strange", "Spiderman"];
let dc_heroes = ["Superman", "Batman", "Wonder Woman", "Flash"];

//Now if you've to add these both array of super_heroes so how you can do?

1. push: Let's try using push() 
        marvel_heroes.push(dc_heroes);
        Output: ["Ironman", "Thor", "Hulk", "Dr. Strange", "Spiderman", "Superman", "Batman", "Wonder Woman", "Flash"];
   No, actually this is a wrong output. 
   You'll get ["Ironman", "Thor", "Hulk", "Dr. Strange", "Spiderman", ["Superman", "Batman", "Wonder Woman", "Flash"]];
   I know you don't want like this and here concat() comes in the picture.



2. Concat(): Let's try it using concat(). But before that lil bit about concat().
   In JavaScript, the concat() method is used to combine two or more arrays into a new array. It doesn't change the 
   original arrays; instead, it creates a new array containing the elements of the arrays you want to concatenate.

    Let's use your example with Marvel and DC heroes:
    let marvel_heroes = ["Ironman", "Thor", "Hulk", "Dr. Strange", "Spiderman"];
    let dc_heroes = ["Superman", "Batman", "Wonder Woman", "Flash"];

    // Concatenate the two arrays
    let super_heroes = marvel_heroes.concat(dc_heroes);

    // Now, the super_heroes array contains all the heroes from both Marvel and DC
    console.log(super_heroes);     
    Output: ["Ironman", "Thor", "Hulk", "Dr. Strange", "Spiderman", "Superman", "Batman", "Wonder Woman", "Flash"];
    Here, The original arrays (marvel_heroes and dc_heroes) remain unchanged.


    Note: You can  concat() more arrays together
    const Array1 = [1,2,3,4,5];
    const Array2 = [5,6,7,8,9,10];
    const Array3 = [0,0,0];
    const Array4 = [1,3,9,19];
    const concatAll = Array1.concat(Array2, Array3, Array4)
    console.log(concatAll);         //Output: [1,2,3,4,5,5,6,7,8,9,10,0,0,0,1,3,9,19]



3. Spread Operator: Let's do it using spread because it's more common in real-world and bit handy to use as well.
    The spread operator in JavaScript is represented by three dots (...). It is used to expand elements of an array & an object.
    The spread operator is handy for tasks like combining arrays, creating copies, or passing elements as function arguments.

    Let's use the spread operator to achieve the same result as the concat() method with your Marvel and DC heroes example:

        let marvel_heroes = ["Ironman", "Thor", "Hulk", "Dr. Strange", "Spiderman"];
        let dc_heroes = ["Superman", "Batman", "Wonder Woman", "Flash"];

        // Use the spread operator to concatenate the two arrays
        let super_heroes = [...marvel_heroes, ...dc_heroes];

        // Now, the super_heroes array contains all the heroes from both Marvel and DC
        console.log(super_heroes);

        The spread operator essentially creates a copy of each array and puts them together.

-----------------------------------------------------------------------------------------------------------------------------------

Array.from and Array.of
------------------------

1.  Array.from() Method:
    The Array.from() method is used to create a new array from an array-like or iterable object. 
    It takes an iterable (like an array or a string or an object) and creates a new array from its elements.

    Example 1st:
        Let's say we want to create an array of characters from a string.

        let str = "Hello";
        let charArray = Array.from(str);
        console.log(charArray);         // Output: ['H', 'e', 'l', 'l', 'o']

    Here, Array.from(str) takes each character from the string str and creates a new array (charArray) with those characters.

    Example 2nd:
        let obj = {
        0: 'a',
        1: 'b',
        2: 'c'
        };
        let newArray = Array.from(obj);
        console.log(newArray);         // Output: []  
    
    Here, you got an empty array because the Array.from() method expects the input to be an iterable object, typically 
    with a length property and indexed elements. In your example, although the object has numeric keys (0, 1, 2), 
    it is missing the length property.



2.  The Array.of() method in JavaScript is used to create a new array with the provided elements. It is particularly useful when 
    you want to create an array with a small number of elements, especially if the elements might be of mixed types.

    Example 1st:
        let score1 = 100;
        let score2 = 200;
        let score3 = 300;
        let scoreArray = Array.of(score1, score2, score3);
        console.log(scoreArray);        // Output: [100, 200, 300]
    
    Array.of() creates a new array with the elements passed to it as arguments.
    Example 2nd:
        let newArray = Array.of(1, 'two', 3.14, [4, 5]);
        console.log(newArray);          // Output: [1, 'two', 3.14, [4, 5]]

*/