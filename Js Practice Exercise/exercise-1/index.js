// 1) Write a function that takes two numbers as arguments and returns their sum.

// const sum = (num1, num2) =>{
//       return num1 + num2;
// }

// console.log(sum(12,45));

// ------------------------------------------------------------------------------------------------------------------

// 2)Write a function that takes a string as an argument and returns its length.

// const lengthOfString = (str1) =>{
//     return str1.length;
// }

// console.log(lengthOfString("my name is uday"));

// ---------------------------------------------------------------------------------------------------------------------

// 3) Write a program that takes two numbers and displays their sum, difference, product, and quotient.

// const calculations =(num1, num2) =>{

//     const sum = num1 + num2;
//     const diff = num1 - num2;
//     const prod = num1 * num2;
//     const quant = num1 / num2;

//     return "sum " + sum + "diff " + diff + "prod " + prod + "quant " + quant ;
 
// }

// console.log(calculations(45 , 12));

// ------------------------------------------------------------------------------------------------------------------------

// 4) Write a function that takes two numbers as arguments and returns the larger number.

// const max = (num1,num2) =>{
//      return Math.max(num1,num2);
// }

// console.log(max(67,78));
// console.log(max(34,98));
// console.log(max(67,8));

// --------------------------------------------------------------------------------------------------------------------------

// 5) Write a program that displays a string in reverse order.

// const reverseStr = (str) =>{
//     var str2;
//      for(let i= str.length ; i >= 0 ; i--){
//       str2 = str2 + str[i] ;
//      }
//      return str2;
// }

// console.log(reverseStr("myNameIsUday"));

// ------------------------------------------------------------------------------------------------------------------------------

// 6) Write a program that takes a number and checks whether it is positive, negative, or zero.

// const checkValue = (num) =>{

//     if(num > 0){
//         console.log("positive");
//     }
//     else if (num < 0){
//         console.log("negative");
//     }else{
//         console.log("zero");
//     }

// }

// checkValue(0);

// -------------------------------------------------------------------------------------------------------------------------------------

// 7)Write a program that takes a number and prints the multiplication table for that number.

// const table = (num) =>{
//     for (let i=1; i<=10 ; i++){
//         console.log(num*i);
//     }
// }

// table(10);

// -------------------------------------------------------------------------------------------------------------------------------------

// 8)Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// const numbersum = (num) =>{
//     var ans = 0;
//     for(let i = 1 ; i<= num ; i++){
//          ans = ans + i ;
//     }

//     console.log(ans);
// }

// numbersum(10);

// -----------------------------------------------------------------------------------------------------------------------------------------

// 9) Write a program that takes a string and prints out the number of vowels in the string.

// const conutVowels = (str) =>{
//     let count =0;
//    for(let i=0; i < str.length ; i++){
//          let element = str[i];

//          if(element === "a" || element === "e" || element === "i" || element === "o" || element === "u"){
//             count ++;
//          }


//    }
//    console.log(count);
// }

// conutVowels("udaybhanuioe");


// ----------------------------------------------------------------------------------------------------------------------------------

// 10) Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.

// const filterCommon= (arr1, arr2) =>{
//       for(let i=0; i< arr1.length ; i++){
//         for(let j= 0; j<arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 console.log(arr1[i]);
//             }
//         }
//       }
// }


// filterCommon([1, 2, 3, 4, 5],[3, 4, 5, 6, 7]);

//----------------------------------------------------------------------------------------------------------------------------------------

// create a counter


// const increment = () =>{
//     let countValue = document.querySelector("#counter");

//     let count = parseInt(countValue.innerHTML);

//     count = count + 1;

//     countValue.innerHTML = count;

//     // console.log(count);
   
// }   

// const decrement = () =>{
//     let countValue = document.querySelector("#counter");

//     let count = parseInt(countValue.innerHTML);

//     count = count - 1;

//     // countValue.innerHTML = count;

//     console.log(count);
   
// }   

// -------------------------------------------------------------------------------------------------------------------------------------------