/*

------------------------------------------DATE & TIME in JS--------------------------------------

Definition:
----------
In JavaScript, the Date object represents a date and time. It allows you to work with dates and times, 
perform various operations, and format them as needed.

Declaration: 
-----------
You can create a new Date object using the new Date() constructor.
        let currentDate = new Date();

The typeof operator for a Date object is "object."
        console.log(typeof currentDate);    //Output: object

==================================================================================================

Date Object Methods:
-------------------

A)  toString():
    Definition: Returns a string representation of the date.
    Code:
    console.log(currentDate.toString());
    Output: Sun Nov 19 2023 01:22:34 GMT+0530 (India Standard Time)


B)  toJSON():
    Definition: Returns a string representation of the date in JSON format.
    Code:
    console.log(currentDate.toJSON());
    Output: 2023-11-18T19:52:34.100Z


C)  toISOString():
    Definition: Returns a string representation of the date in ISO format.
    Code:
    console.log(currentDate.toISOString());
    Output: 2023-11-18T19:52:34.100Z

D)  toDateString():
    Definition: Returns a human-readable date portion of the date.
    Code:
    console.log(currentDate.toDateString());
    Output: Sun Nov 19 2023

E)  toLocaleString():
    Definition: Returns a string representation of the date using the system's locale.
    Code:
    console.log(currentDate.toLocaleString());
    Output: 19/11/2023, 01:22:34 (Depends on your system locale)

    
F)  toLocaleDateString():
    Definition: Returns a string with a language-sensitive representation of the date portion.
    Code:
    console.log(currentDate.toLocaleDateString());
    Output: 19/11/2023 (Language-sensitive representation of the date portion)


G)  toLocaleTimeString():
    Definition: Returns a string with a language-sensitive representation of the time portion.
    Code:
    console.log(currentDate.toLocaleTimeString());
    Output: 01:22:34 (Language-sensitive representation of the time portion)


H)  toTimeString():
    Definition: Returns a human-readable time portion of the date.
    Code:
    console.log(currentDate.toTimeString());
    Output (example): "15:23:45 GMT+0000 (Coordinated Universal Time)"

*/