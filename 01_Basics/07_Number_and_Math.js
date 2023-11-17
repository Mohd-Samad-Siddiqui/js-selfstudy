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






*/