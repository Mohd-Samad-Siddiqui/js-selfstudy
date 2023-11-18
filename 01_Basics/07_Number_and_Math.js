/*
Definition:
In JavaScript, numbers are a primitive data type that represents numeric values. They can be integers or floating-point values.

Declaration:
(a) Literal Notation:
    let num1 = 42;       // integer (The typeof will be number)
    let num2 = 3.14;     // floating-point (The typeof will be number)

(b) Constructor Notation:
    let num3 = new Number(7);  
    console.log(typeof(num));       //output: Object
    console.log(num3);              //output: Number {7} 

===========================================================================================================

Let's dive into more details about the functions related to the Number object in JavaScript:

1.  toString()
    Definition:
    The toString() method is used to convert a number to a string. It allows you to specify 
    the radix (base) for the numerical representation.

        Example:
        let num = 42;
        let numAsString = num.toString();        // "42"
        let binaryString = num.toString(2);      // "101010"
        let hexString = num.toString(16);        // "2a"


2.  toPrecision()
    Definition:
    The toPrecision() method returns a string representing a specified number to a specified precision.

        Example:
        let num = 123.456789;
        let precisionTwo = num.toPrecision(5);   // "123.46"
        let precisionFour = num.toPrecision(8);  // "123.45679"


3.  toFixed()
    Definition:
    The toFixed() method converts a number into a string, rounding to a specified number of decimal places.

        Example:
        let num = 3.1415926535;
        let roundedNum = num.toFixed(2);        // "3.14"


4.  toExponential()
    Definition:
    The toExponential() method returns a string representing a specified number in exponential notation.

        Example:
        let num = 12345;
        let exponentialString = num.toExponential();  // "1.2345e+4"


5.  toLocaleString()
    Definition:
    The toLocaleString() method returns a string with a language-sensitive representation of the number.

        Example:
        let num = 1234567.89;
        let localString = num.toLocaleString();  // "1,234,567.89" (depends on the locale)


NOTE: The valueOf() method is not directly related to formatting but returns the primitive value of the specified object. 
      It's implicitly called by JavaScript for type conversion.
          let num = new Number(42);
          let primitiveValue = num.valueOf();   // 42
      These methods provide flexibility in formatting and presenting numeric values in various ways, 
      making it easier to work with numbers in different contexts.

==============================================================================================================================
---------------------------MATH-----------------------------

console.log(Math);  //Object [Math] {}
console.log(Math.abs(-1) +" "+Math.abs(1)); //1 1
console.log(Math.round(4.6));   //5
console.log(Math.ceil(4.2));    //5
console.log(Math.floor(4.6));   //4
console.log(Math.min(4,6,1,8)); //1

console.log(Math.random());     //0.56789874526753346 (Generates a random floating-point number between 0 (inclusive) and 1 (exclusive))

Now to get the integer value between the given range including min and max values of the range we'll use the given formula.
    
    let num = Math.floor(Math.random() * (max - min + 1)) + min;  

    Let's understand with examples:

  a)Example with min = 1 and max = 6:
    console.log(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    Possible output: 1, 2, 3, 4, 5, 6

  b)Example with min = 10 and max = 20:
    console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10);
    Possible output: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

  c)Example with min = -5 and max = 5:
    console.log(Math.floor(Math.random() * (5 - (-5) + 1)) + (-5));
    Possible output: -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5

  d)Example with min = 0 and max = 1:
    console.log(Math.floor(Math.random() * (1 - 0 + 1)) + 0);
    Possible output: 0, 1

  e)Example with min = -10 and max = 0:
    console.log(Math.floor(Math.random() * (0 - (-10) + 1)) + (-10));
    Possible output: -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0


*/