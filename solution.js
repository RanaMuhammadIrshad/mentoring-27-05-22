'use strict'; 
/**
 * 01 easy - Print the bigger number
 * Write a program that compares two integers and prints to the console the larger
 */
 console.log(`----------01--------`);
 let num1 = 16;
 let num2 = 16;
 
 if (num1 > num2) {
   console.log(`1: The num1 (${num1}) is BIGGER than num2 (${num2})`);
 } else if (num2 > num1) {
   console.log(`1: The num2 (${num2}) is BIGGER than num1 (${num1})`);
 } else {
   console.log(`1: The num1 (${num1}) and num2 (${num2}) are EQUAL`);
 }
 
 /**
  * 02 Easy - Print Even or Odd
  * Write a program that will iterate from 0 to 15.
  * For each iteration, it will check if the current number is odd or even,
  * and display a message to the screen
  */
 
 console.log(`----------02--------`);
 
 for (let i = 0; i <= 15; i++) {
   if (i % 2 === 0) {
     console.log(`2: The number (${i}) is EVEN`);
   } else {
     console.log(`2: The number (${i}) is ODD`);
   }
 }
 
 /**
  * 03 Medium - Check Grades
  * Write a program that works with an array of marks of students and computes
  * and prints, the class average mark:
  * David	80
  * Vinoth	77
  * Divya	88
  * Ishitha	95
  * Thomas	68
  * Then, calculate and print the grade for each student
  * Grades should be calculated based on these values:
  * Range	Grade
  * <60	F
  * <70	D
  * <80	C
  * <90	B
  * <100	A
  * Use a switch statement to solve this one
  *
  * For example given an array of marks: [80,77,88,95,68];
  * You should find the the average mark is 81.6
  * and then print the grade for each student based on their mark
  * Fist student should have a B grade
  */
 console.log(`----------03--------`);
 
 let marks = [80, 77, 88, 95, 68];
 
 let sum = 0;
 
 for (let i = 0; i < marks.length; i++) {
   sum += marks[i];
 }
 
 const average = sum / marks.length;
 
 console.log(`Average grades are : ${average}`);
 
 for (let i = 0; i <= marks.length; i++) {
   switch (true) {
     case marks[i] < 60:
       console.log(`The student (${i}) and marks (${marks[i]}) has grade F`);
       break;
     case marks[i] < 70:
       console.log(`The student (${i}) and marks (${marks[i]}) has grade D`);
       break;
 
     case marks[i] < 80:
       console.log(`The student (${i}) and marks (${marks[i]}) has grade C`);
       break;
 
     case marks[i] < 90:
       console.log(`The student (${i}) and marks (${marks[i]}) has grade B`);
       break;
     case marks[i] < 100:
       console.log(`The student (${i}) and marks (${marks[i]}) has grade A`);
       break;
 
     default:
       console.log(`The student (${i}) grades are unknown`);
   }
 }
 console.log(`----------04--------`);
 /**
  * 04 Easy - medium - Sum multiples of 3 and 5
  * Write a program to sum the multiples of 3 and 5 under 1000.
  */
 
 let sum1 = 0;
 
 for (let i = 0; i < 1000; i++) {
   if (i % 3 === 0 || i % 5 === 0) {
     sum1 += i;
   }
 }
 
 console.log(`The sum is: ${sum1}`);
 
 /**
  * 05 medium - Check ending of String
  * Write a program to check if a string
  * ends with the given target string
  * Examples:
  * "Bastian" with "n" should print true
  * "Open sesame" with "same" should print true
  */
 
 console.log(`----------05--------`);
 
 let myString1 = "Bastian";
 
 let lastChar = myString1.endsWith("n");
 
 console.log(lastChar);
 
 let myString2 = "Open sesame";
 
 let endStr = myString2.endsWith("same");
 
 console.log(endStr);
 
 //
 console.log("-----------05-------------------");
 const string = "Open sesame";
 const end = "same";
 
 const endLength = end.length;
 
 const part = string.slice(string.length - endLength);
 
 if (part === end) {
   console.log(`${string} ENDS with ${end}`);
 } else {
   console.log(`${string} DOES NOT with ${end}`);
 }
 
 /**
  * 06 Easy - Repeat String
  * Write a program that repeats a given string for a number of times and print the result to the console.
  * If the given string is empty or the number of times is not a positive number, then print an empty string
  * Examples:
  * "*"  3 times should print ***
  * "abc" 3 times should print abcabcabc
  * "abc"  -2 times should print ""
  */
 console.log("-----------06-------------------");
 const givenString = "*";
 const numberOfTimes = 3;
 
 if (numberOfTimes <= 0) console.log("");
 
 let result = "";
 
 for (let i = 1; i <= numberOfTimes; i++) {
   result += givenString;
 }
 
 console.log(result);
 
 /**
  * 07 Easy - Find Sum
  * Write a program that
  * adds all natural numbers (positive numbers) smaller or equal than a given number
  * and print the result to the console.
  * Example: if the given number is 3, the program should print 6  (1+2+3 = 6)
  */
 
 console.log("-----------07-------------------");
 
 let givenNum = 4;
 let sumOfNum = 0;
 
 for (let i = 0; i <= givenNum; i++) {
   sumOfNum += i;
 }
 
 console.log(`Sum of given Number (${givenNum}) is : ${sumOfNum}`);
 
 /**
  * 08 Hard - Create Pattern
  * Write a program to construct the following pattern, using a nested for-loop.
 
 *
 **
 ***
 ****
 *****
 ******
 
  */
 
 console.log("-----------08-------------------");
 
 for (let i = 1; i <= 6; i++) {
   let storeStars = "";
   for (let j = 1; j < i; j++) {
     storeStars += "*";
   }
   console.log(storeStars);
 }
 
 /**
  * 09 medium - Filter array
  * Write a program that works with an array and strips from it all items that begin from 'a'
  * E.g. the array ['apple','banana','orange'] should print ['banana','orange']
  */
 
 console.log("-----------09-------------------");
 const array = ["apple", "banana", "orange"];
 
 for (let i = 0; i < array.length; i++) {
   if (array[i][0] === "a") array.splice(i, 1);
 }
 
 console.log(" array is", array);
 
 
 /***************************************
  * BONUS:
  * Interview exercises
  * 
  * I.E. 1:
  * What will be the output of the following code?
  **************************************/
  const grade='E';  
  let result1;  
  switch(grade) {  
      case 'A':  
          result1+="10";  
      case 'B':  
          result1+=" 9";  
      case 'C':  
          result1+=" 8";  
      default:  
          result1+=" 0";  
  }  
  console.log(result1); //"undefined 0"
 
 // *************************************
 //  I.E 2:
 // What will be the output of the following code?
 // *************************************
  const grade1 = 'A';  
  const result2 = 0;  
  
  switch(grade1)
  {  
      case 'A':  
          result2 += 10 ;  
      case 'B':  
          result2 += 9;  
      case 'C':  
          result2 += 8;  
      default:  
          result2 += 0;  
  }  
  
  console.log(result2) //ERROR: Assignment to constant variable
  
 