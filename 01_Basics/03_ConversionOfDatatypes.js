/*------Converting String to Number------*/
let str1 = "33";
let num1 = Number(str1);
console.log("--------------------Converting String to Number--------------------")
console.log(str1 +" is "+ typeof str1 +" and after conversion the value is "+num1);
//Output : 33 is string and after conversion the value is 33

let str2 = "33abc";
let num2 = Number(str2);
console.log(str2 +" is "+ typeof str2 +" and after conversion the value is "+num2 );
//Output : 33abc is string and after conversion the value is NaN


/*-----------Converting the Boolean value to Number-------------*/
let boolVal1 = true;
let num3 = Number(boolVal1);
console.log("--------------------Converting Boolean to Number--------------------");
console.log(boolVal1 +" is "+ typeof boolVal1 +" and after conversion the value is "+num3);
//Output : true is boolean and after conversion the value is 1

let boolVal2 = false;
let num4 = Number(boolVal2);
console.log(boolVal2 +" is "+ typeof boolVal2 +" and after conversion the value is "+num4);
//Output : false is boolean and after conversion the value is 0


/*-----------Converting the Number value to String-------------*/
let num5 = 2093;
let str3 = String(num5);
console.log("--------------------Converting Number to String--------------------")
console.log(num5 +" is "+ typeof num5 +" and after conversion the value is "+str3);


