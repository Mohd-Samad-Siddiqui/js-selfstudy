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

    
        Object.keys(): Use to get all the keys of the object. Return type of it is array, which means it stores all the keys in arrays.
        --------------

        Example: let obj3 = {...obj1, ...obj2};
                 let objectKeys = Object.keys(obj3);
                 console.log(objectKeys);               //Output: ['1', '2', '3', '4']


        Object.values(): Use to get all the values of the object similarly like Object.keys();
        ----------------

        Example: let obj3 = {...obj1, ...obj2};
                 let objectKeys = Object.keys(obj3);
                 console.log(objectKeys);               //Output: ['a', 'b', 'c', 'd']


        hasOwnProperty(): hasOwnProperty is a method in JavaScript that is used to check if an object has a specific property as its 
        ----------------- own property (not inherited from its prototype). It returns a boolean value indicating whether the object
                          has the specified property.

        Example: let myObject = { key1: 'value1', key2: 'value2' };
                 
                 // Check if myObject has the property 'key1'
                 if (myObject.hasOwnProperty('key1')) {
                    console.log('myObject has the property key1');
                 } else {
                    console.log('myObject does not have the property key1');
                 }

            In summary, hasOwnProperty is a handy method to make sure that a property exists directly on an object, 
            reducing the risk of unintended behavior when working with object properties.
}

*/
