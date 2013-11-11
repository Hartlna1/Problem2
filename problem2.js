/* 
Programmer: 	Nanette K. Hartley
Language: 		JavaScript
Filename:  		problem2.js
Date: 			11/5/2013
Description: 	Find the sum of the even Fibonacci numbers between 1 and 4000000
*/

//declaration of variables and constants
var BR = "<br />";						//HTML line break
var ES = " ";							//HTML extra space
var LE = ".";							//HTML line end
var values = new Array(); 				//declare new array
values[0] = 0;							//first value in array is 0
values[1] = 1;							//first value in array is 1
var total = 0;							//declares total to add even values to

//Welcome the user to the program
document.write("Welcome to our program!  This program will computer the sum of all even Fibonacci numbers between 1 and 4 million." + BR);
document.write("A Fibonacci number is found by adding two consecutive digits in a sequnce beginning with 0 and 1." + BR);
document.write("Subsequent numbers are found by adding the last two digits in the sequence.  This program will print the entire sequence" + BR);
document.write("from 1 to 4 million, and then provide the sum of all even numbers in the sequence." + BR + BR);

//Processing input to provide output 
document.write(values[0] + ES + values[1] + ES);

for (var i = 2; total < 4000000; i++)
{
	values[i] = values[i-1] + values[i-2]; 
	document.write(values[i] + ES);
	if (values[i] % 2 == 0 && values[i] < 4000000)			//determines if the last value is even; if so, adds to the total
 	{
 		total += values[i];
	}
} //end for loop to determine Fibonacci numbers

//Output of data
document.write(" " + BR + BR);
document.write("The sum of the even Fibonacci numbers between 1 and 4,000,000 is: " + total + BR + BR);


//Thank the user and end the program
document.write("Thank you for using our program!");