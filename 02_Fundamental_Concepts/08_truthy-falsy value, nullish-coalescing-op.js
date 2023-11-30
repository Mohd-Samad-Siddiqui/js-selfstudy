/*

            ------------------------------Falsy Value-----------------------------
            0, -0, null, undefined, NaN, empty_string -> ''/ "", false, BigInt 0n

            -----------------------------Truthy Values----------------------------
            "0", "-0", string_with_space -> " ", "false", true, empty_object -> {}, empty_array -> [], undefined_function -> function(){}

            -----------------------Nullish Coalescing Operator---------------------
            The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is 'null' or 'undefined', 
            and vice-versa.
            Example - It is used when we have to get any value from the database and in response sometimes we get values like null or the value we want. 
                      In this case if we get null then our code will colapse which we don't want and for this situation we use Nullish Coalescing Operator. 
                      
                      const foo = 'default string' ?? null;
                      console.log(foo);
                      // Expected output: "default string"
                      
                      const baz = 0 ?? 42;
                      console.log(baz);
                      // Expected output: 0
            


*/
