/*-----Comapring String and Number-------*/
console.log("2" > 5);
//Output: false (Here, the string value is getting change into number and then it is getting compared with the given no. 5)


/*-----Comapring String and Boolean-------*/
console.log("0" >= false);
//Output: false (Here, the string value is getting change into number and then it is getting compared with the given boolean value false which is also getting change first into number i.e. 0)


/*-----Comapring Null and Number-------*/
console.log(null > 0);   //Output: false (Here, > sign is changing the Null value into number i.e. 0 and 0 > 0 will give false)
console.log(null == 0);  //Output: false (Here, == can't change the Null because {>,<,>=,<=} & {==} behave differently)
console.log(null >= 0);  //Output: true (Here, >= made the Null change into 0 and then 0 >= 0 so yeah that's true)


/*-----Comapring Undefined and Number-------*/
console.log(undefined > 0);  //Output: false
console.log(undefined == 0); //Output: false
console.log(undefined >= 0); //Output: false
//All three outputs were false because undefined can't change into number in these situations.