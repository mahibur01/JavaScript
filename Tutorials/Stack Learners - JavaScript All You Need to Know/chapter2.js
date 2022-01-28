/* 007 - Variables

What: What is Variables?
- Variables are containers for storing data (storing data values)

How: 4 Ways to Declare a JavaScript Variable:
- Using var // জাভাস্ক্রিপ্ট ২০১৫ এর আগে ভার ব্যবহার হতো, এখন লেট ব্যবহার করে 
- Using let // ভ্যারিয়েবলের ভ্যালু যদি চেইঞ্জ হয় , তাহলে লেট ব্যবহার করতে হবে
- Using const // ভ্যারিয়েবলের ভ্যালু যদি চেইঞ্জ না হয় , তাহলে লেট ব্যবহার করতে হবে
- Using nothing // কোনোকিছু ডিক্লেয়ার না করলেও ব্রাউজার বাই ডীফল্ট ভ্যারিয়েবল ধরে নেয় 

Example: 

var x = 5
var y = 6
var z = x + y

console.log(z)

*/

/* 008 - Reserved Words and Naming Convention

What: What is Reserved Words?
- In JavaScript you cannot use these reserved words as variables, labels, or function names.
কিছু কিছু ওয়ার্ড ভ্যারিয়েবল, লেভেল কিংবা ফাংশনের নাম হিসেবে ব্যবহার করা যায় না। কারণ, এগুলি জাভাস্ক্রিপ্ট নিজের জন্য রিজার্ভ করে রেখেছে।

এই ওয়ার্ড গুলি ব্যবহার করা যাবে না ভ্যারিয়েবল হিসেবে। 
abstract	
arguments	
await*	
boolean
break	
byte	
case	
catch
char
class*	
const	
continue
debugger	
default	
delete	
do
double	
else	
enum*	
eval
export*	
extends*	
false	
final
finally	
float	
for	
function
goto	
if	
implements	
import*
in	
instanceof	
int	
interface
let*	
long	
native	
new
null	
package	
private	
protected
public	
return	
short	
static
super*	
switch	
synchronized	
this
throw	
throws	
transient	
true
try	
typeof	
var	
void
volatile	
while	
with	
yield


Naming Conventions
- Always use the same naming convention for all your code. For example:

- Variable and function names written as camelCase
- Global variables written in UPPERCASE (We don't, but it's quite common)
- Constants (like PI) written in UPPERCASE

camelCase:
camelCase is used by JavaScript itself, by jQuery, and other JavaScript libraries.

*/

/* 009 - Data Types 

What : What types of data it is

There are two types of Data types in JS.
1. Primitive - number, string, boolean, undifined, null
2. Object - array, object, function

Examples:

let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
const cars = ["Saab", "Volvo", "BMW"]; // array

let x = {firstName:"John", lastName:"Doe"};    // Object

Notes: Anything ''/"" is string

*/

/*

010 - Numbers in JS 

Notes: 
1. Int and float same
2. Number convert by number.parseInt()
3. 'String' * 10 = 'String' 

*/

/*

011 - String in JS

Notes: 
1. ''/"" এর ভেতর যা থাকে সব ই স্টিং 
2. '123' this is string 

*/

/* 

012 - Boolean in JS

Notes;
1. Decision making True or False 

*/

/*

013 - Null and undefined 

Notes: 

1. A variable without value is undefined
2. An empty value is show null

*/

/* 

014 - Type conversion in JS

What : এক ডাটা টাইপ কে অন্য ডাটা টাইপে কনভার্ট করা 

Notes: 
1. string * number = string


Example: 

var str = '123'  
var num = 123
var v = str + num

console.log( typeof v)

*/

/* 
015 - Octal and Hexadecimal in JS

Notes : 
1. Hexadecimal base 16
2. Ocatl base 8
3. Decimal Base 10

Hexa start with 0x 
ocatl start with 0 

*/

/*

016 - Operators

Notes : 

1. Arithematic operators 
+, -, *, / , %, ++, -- , etc

2. Assignment operators 
=, +=, -=, /=, %=, etc

3. Logical operators 
|| , ! etc

4. Bitwise Operators
& , |, etc

*/

/*

017 - Statement in JS

Notes: 
1. Full line is a statement 
2. var str = 'str' 

*/

/*
018 - Math Object

The syntax for Math any methods is : Math.method(number

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


Example: 

console.log(Math.round(4.6))

*/

/*
019 - Date Object

4 ways
- new Date()
- new Date(year, month, day, hours, minutes, seconds, milliseconds)
- new Date(milliseconds)
- new Date(date string)

const d = new Date();

Note: JavaScript counts months from 0 to 11:

*/

/* 020 - Comments in JS 

Notes: 

1. // single line 
2. /*  multiple lines 

*/

// Practice:


