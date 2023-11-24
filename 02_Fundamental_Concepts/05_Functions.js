
/*
                    -----------------Functions, Rest Operator(...), Functions with Object & Arrays---------------
    
    Functions: functions are a fundamental building block of the language. A function is a block of reusable code that performs a specific 
    ---------- task or calculates a value.

    Example:    function addNumbers(a, b) {
                    return a + b;
                }

                // Calling the function
                let result = addNumbers(5, 3);
                console.log(result);                    // Outputs: 8


    Quse: In JavaScript, why do we use parentheses () after a function's name? What happens if we omit the parentheses? Also, how 
          can the function without parentheses be applied in real-world coding scenarios?

    Ans:  In JavaScript, the parentheses () are used to invoke or call a function. When you define a function, you're essentially 
          creating a reusable block of code, but it doesn't do anything until you call it by using the parentheses.

          Example 1st:  function greet() {
                            console.log("Hello, world!");
                        }

                        // Call the function
                        greet();                            // Outputs: Hello, world!

         Example 2nd: If you don't use the parentheses after the function name, like this:
                        function greet() {
                            console.log("Hello, world!");
                        }

                        // Passing the function as a callback
                        setTimeout(greet, 1000);

                      In this example, the setTimeout function is taking the greet function as an argument, and it will call greet after 
                      a delay of 1000 milliseconds. Here, we're passing the function as a reference without actually executing it at 
                      that moment.

    Cross Question:   When using setTimeout(greet, 1000); without parentheses after greet, how does the greet function get 
                      called after 1 second?
                      
    Answer:           setTimeout(greet, 1000);
                      You are passing the greet function as an argument to setTimeout. The setTimeout function will then schedule 
                      the greet function to be executed after a delay of 1000 milliseconds.

                      The key point here is that you're not invoking or calling the greet function immediately at the time of passing 
                      it to setTimeout. Instead, setTimeout will take care of invoking greet after the specified delay.

                      The setTimeout function itself will use the reference to the greet function and call it later. So, even though 
                      you don't use parentheses when passing greet to setTimeout, the parentheses are implied when setTimeout 
                      eventually calls the function after the specified time.

                      In other words, the greet function is not executed at the point of passing it to setTimeout; it's only 
                      executed later when setTimeout triggers it. The parentheses are applied by setTimeout when it internally 
                      invokes the function.




    Rest Operator (...) : The rest operator in JavaScript is denoted by three dots (...). It allows a function to accept an indefinite 
    --------------------- number of arguments as an array. 
                        
    The rest operator is used in a function parameter to collect all the remaining arguments into a single array.
             
    Example 1st: function cartPrice(...amount){
                    return amount;
                 }

                 console.log(cartPrice(200, 100, 500, 300));        // Output: [200, 100, 500, 300]

    Example 2nd: function values(value1, value2, ...value3){
                    return value3;
                 }
                 
                 console.log(values(2, 1, 4, 5, 3));                // Output: [4, 5, 3]


    
    
    Functions with Object: We can use object's key-values by passing the object as an argument while calling the function.
    ----------------------

    Example: let user = {
                username: "Samad",
                email: "samad@yahoo.com"
             }
            
             //Passing 'user' object as a parameter in this userInfo function.
             function userInfo (randomUser){
                console.log(`Hey ${randomUser.username}! Your email '${randomUser.email}' has been verified by us.`);
             }

             //Calling the function by passing 'user' object as an argument.
             userInfo(user);                // Output: Hey Samad! Your email 'samad@yahoo.com' has been verified by us.

    Similarly, we can use Arrays by using Function.




    
*/