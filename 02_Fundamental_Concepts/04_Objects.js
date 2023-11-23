/*
        ------------------------------More on objects----------------------------

        object.assign(): It is use to join two or more objects together.
        ----------------

        Example 1st: let obj1 = {1: "a", 2: "b"};
                     console.log(obj1);                     //Output: {1: 'a', 2: 'b'}

                     let obj2 = {3: "c", 4: "d"};
                     console.log(obj2);                     //Output: {3: 'c', 4: 'd'}

                     let obj3 = Object.assign(obj1, obj2);
                     console.log(obj3);                     //Output: {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

                     let obj4 = Object.assign({}, obj1, obj2);
                     console.log(obj4);                     //Output: {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

                     console.log("New obj1");
                     console.log(obj1);                     //Output: {1: 'a', 2: 'b', 3: 'c', 4: 'd'}
                     
                     console.log(obj1 == obj3);             //Output: true;
                     
                     console.log(obj1 == obj4);             //Output: false;

            Q. If you've notice then you can see that obj1 == obj3 is true and obj1 == obj4 is false. But why?
            A. In line13, let obj3 = Object.assign(obj1, obj2); 
               Object.assign() is used to merge obj2 into obj1. This modifies obj1 and returns the modified object as obj3.
               console.log(obj1 == obj3); - This is true because obj3 is a reference to the modified obj1. The modification was done in place, 
               so obj1 and obj3 point to the same object in memory.

               In line16, let obj4 = Object.assign({}, obj1, obj2); - This creates a new object by merging the contents of obj1 and obj2 
               into an empty object. obj4 is a new object and also there's no modification has been done in obj1.
               console.log(obj1 == obj4); - This is false because obj4 is a new object created by Object.assign() and is a separate object 
               in memory from obj1.

               
        Spread Operator (...): The best way to join two or more objects by using spread operator.
        ---------------------

        Example 1st: let obj1 = {1: "a", 2: "b"};
                     console.log(obj1);                     //Output: {1: 'a', 2: 'b'}

                     let obj2 = {3: "c", 4: "d"};
                     console.log(obj2);                     //Output: {3: 'c', 4: 'd'}

                     let obj3 = {...obj1, ...obj2};         
                     console.log(obj3);                     //Output: {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

            In case of spread operator is doesn't modify any other object i.e. neither obj1 nor obj2.
*/
