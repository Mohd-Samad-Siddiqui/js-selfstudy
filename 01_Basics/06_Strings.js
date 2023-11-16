/*
DEFINITION:
In JavaScript, a string is a sequence of characters enclosed within single or double quotes. It can include letters, numbers, symbols, and spaces.

How to Define a String:
(a) Strings can be defined using single quotes, double quotes, or backticks.
------------------------------------------
    // Using single quotes
    let singleQuotedString = 'Hello, World!';

    // Using double quotes
    let doubleQuotedString = "Hello, World!";

    // Using backticks (template literals, allows embedding expressions)
    let backtickString = `Hello, World!`;
------------------------------------------

(b) Using the "new" Keyword:
You can also create a string using the String constructor with the new keyword, but it's less common:
------------------------------------------
    let constructedString = new String('Hello, World!');
------------------------------------------


=========================================================================================================================


IMMUTABLE Nature
Strings in JavaScript are immutable, meaning that once a string is created, its value cannot be changed. Any operation that appears to modify a string actually creates a new string.

# tring as Primitive Values:
    In JavaScript, strings are primitive values, which means they are not objects. Primitives are stored directly in memory and have a fixed size.

# Memory Allocation:
    When a string is created, a certain amount of memory is allocated to store the characters of the string. Each character is assigned a specific position in memory.

# No Direct Modification:
    Immutability means that the value of a string cannot be changed directly. Unlike mutable data types (like arrays), where you can modify elements at specific indices, modifying a character within a string is not allowed.
        let myString = "Hello";
        myString[0] = "h"; // This operation is not allowed
    
# Creating New Strings:
    Any operation that appears to modify a string, such as concatenation or using string methods, actually creates a new string with the modified value.
        let originalString = "hello";
        let modifiedString = originalString.toUpperCase();
    In this case, originalString and modifiedString are two separate strings in memory.

# String Pooling (Interning):
    JavaScript engines often use a technique called "string pooling" or "string interning" to optimize memory usage. String pooling involves reusing existing strings with the same value rather than creating new ones.
        let str1 = "abc";
        let str2 = "abc";
    In this example, both str1 and str2 may refer to the same memory location because their values are the same. This helps reduce memory consumption.

# Garbage Collection:
    Since strings are immutable and new strings are created for modifications, old string values become eligible for garbage collection when they are no longer referenced. This process helps manage memory efficiently.



==========================================================================================================================


Memory Storage:
Strings created using quotes (single or double) or backticks are primitive values and are stored in the stack memory. However, when you use the "new" keyword with the "String" constructor, it creates a String object, and objects in JavaScript are stored in the heap memory.

String Functions:

1.  indexOf(substring)
    Definition: Returns the index of the first occurrence of the specified substring.
    Example:
        let sentence = "Hello, World!";
        let index = sentence.indexOf("World");
        console.log(index); // Output: 7

2.  charAt(index)
    Definition: Returns the character at the specified index.
    Example:
        let sentence = "Hello, World!";
        let char = sentence.charAt(0);
        console.log(char); // Output: H

3.  toLowerCase()
    Definition: Converts all characters to lowercase.
    Example:
        let sentence = "Hello, World!";
        let lowerCaseSentence = sentence.toLowerCase();
        console.log(lowerCaseSentence); // Output: hello, world!

4.  slice(start, end)
    Definition: Extracts a portion of the string.
    Example:
        let sentence = "Hello, World!";
        let sliced = sentence.slice(0, 5);
        console.log(sliced); // Output: Hello

5.  substring(start, end)
    Definition: Similar to slice, but doesn't support negative indices.
    Example:
        let sentence = "Hello, World!";
        let subString = sentence.substring(7, 12);
        console.log(subString); // Output: World

6.  concat():
    Definition: Combines two or more strings.
    Example:
        let firstName = "John";
        let lastName = "Doe";
        let fullName = firstName.concat(" ", lastName);
        console.log(fullName); // Output: John Doe
    
7.  trim():
    Definition: Removes whitespace from both ends of a string.
    Example:  
        let userInput = "   Hello, World!   ";
        let trimmedInput = userInput.trim();
        console.log(trimmedInput); // Output: Hello, World!

8.  replace(search, replacement):
    Definition: Replaces a specified value with another value.
    Example:
        let sentence = "I love JavaScript!";
        let newSentence = sentence.replace("JavaScript", "coding");
        console.log(newSentence); // Output: I love coding!

9.  startsWith(searchString):
    Definition: Checks if a string starts with a specified value.
    Example:    
        let message = "Good morning!";
        let startsWithGood = message.startsWith("Good");
        console.log(startsWithGood); // Output: true (Because the string starting with Good)

10. endsWith(searchString):
    Definition: Checks if a string ends with a specified value.
    Example:
        let message = "Good morning!";
        let endsWithMorning = message.endsWith("morning");
        console.log(endsWithMorning); // Output: false (Because the string is getting end with an exclamation mark)

11. includes(searchString):
    Definition: Checks if a string contains a specified value.
    Example:
        let sentence = "JavaScript is fun!";
        let includesIs = sentence.includes("is");
        console.log(includesIs); // Output: true

12. Template Literals:
    Template literals, introduced with backticks (`), allow embedding expressions within strings. This provides a convenient way to create multi-line strings and include variables.
    Example:
        let name = "John";
        let greeting = `Hello, ${name}!`;
        console.log(greeting); // Output: Hello, John!

13. String Comparison:
    When comparing strings, JavaScript uses lexicographic (dictionary) order. This means the comparison is based on the Unicode values of individual characters.
    Example:
        let string1 = "apple";
        let string2 = "banana";
        console.log(string1 < string2); // Output: true (Because the ascii code/unicode of a = 97 & b = 98 therefore b > a hence banana > apple)

NOTE: There are more functions of String and you can check it by creating String as an object by using "new" keyword
        let str = new String("Hello World!");
      Now you can check all the properties and function of this string "str" by writing:
        str.__proto__;  //str Dot Underscore Underscore PROTO Underscore Underscore
*/
