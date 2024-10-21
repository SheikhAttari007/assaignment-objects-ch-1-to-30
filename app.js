/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 01 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
// Q1: Write a script to greet your website visitor using JS alert box.
alert("hello");  // ANS: 1...

// Q2: Write a script to display following message on your web page.
alert("Error! Please Enter a Valid Password"); //ANS: 2...

// Q3: Write a script to display following message on your web page. (Hint : Use line break)

alert("Wellocome to JS land.<br  />nHappy Coding!"); // ANS: 3...

// Q4: Write a script to display following messages in sequence.
alert("Wellocome to JS land.");
alert("Happy Coding!<br   /> ▢ Prevent this page from creating a aditional dialogs."); // ANS: 4...

// Q5: Generate the following message through browser’s developer console.
console.log("Hello... i can run JS Through my web browser's console."); // ANS: 5...

/* Q6: Practice placement of <script></script> element in
following sections of your project in exercise 6.

    a. Head
    b. Body (before your page’s HTML)
    c. Body (inside your page’s HTML)
    d. Body (after your page’s HTML) */

// (C) is the Right Answer ✅...





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 02 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
document.write("<br> <h1>CHAPTER 02</h1>")

// Q1: Declare a variable called username.
var username; // ANS 1...

// Q2: Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Haseeb Ahmed"; // ANS 2...

/* Q3: Write script to
    a) Declare a JS variable, titled message.
    b) Assign “Hello World” to variable message
    c) Display the message in alert box.
*/

var message = "Hello world";
alert(message); // ANS 3...


// Q4: Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var studentName = "John Doe";
var studentAge = 15;
var studentData = "Certified Mobile Aplication Development.";

alert(studentName);
alert(studentAge);
alert(studentData); // ANS: 4...


// Q5: Write a script to display the following alert using one JS variable.

alert("Pizza\n Pizz\n Piz\n Pi\n P")



// Q6: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)...

var email = "abdulhaseeb1926@gmail.com";
alert("My Email Address is: " + email); // ANS 6...


// Q7: Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box...

var lerner = "A smarter way to learn JavaScript";
alert("I Am Trying To Learn from the Book " + lerner); // ANS 7...


// Q8: Write a script to display this in browser through JS...
document.write("Yah! I can write HTML content through JavaScript."); //ANS 8...


// Q9: Store following string in a variable and show in alert and browser through JS...

alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"); // ANS 9...





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 03 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
// Q1: Declare a variable called age & assign to it your age. Show your age in an alert box.
document.write("<br> <h1>CHAPTER 03</h1>")

var age = 15;

alert("I am " + age + " years old."); // ANS 1...


// Q2: Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

if(localStorage.getItem('visitCount')) {
    // Increment the existing counter
    var count = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', count);
} else {
    // Initialize the counter if it doesn't exist
    localStorage.setItem('visitCount', 1);
}

// Display the visit count wherever you need to
var visitCount = localStorage.getItem('visitCount');
alert("You Have Visited This Site: " + visitCount + " Times"); // ANS 2...


//Q3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthdate = 1991;

document.write("<br>My birth year is " + birthdate + "<br> Data type of my deeclared variable is number.<br>"); // ANS 3...


/* Q4: A visitor visits an online clothing store
   www.xyzClothing.com . Write a script to store in variables
   the following information:
    a. Visitor’s name
    b. Product title
    c. Quantity i.e. how many products a visitor wants to order
    Show the following message in your browser: “John
    Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
 */

var visitorName = prompt("Tell me the Your Name Please...");
var productTitle = prompt("Can You Please Put The Product-name.");
var ordered = prompt("How many Products You Want.");

document.write("<strong>" + visitorName + "</strong> ordered <strong>" + ordered + " " + productTitle + "</strong> On XYZ Closing Store.." ); // ANS: 4...






/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 04 >>>>>>>>>>>>>>>>>>>>>>>>>>> */
// Q1: Declare 3 variables in one statement.
document.write("<br> <h1>CHAPTER 04</h1>")
var x, y, z;
var x = 5, y = 10, z = 15; // ANS: 1..


// Legal Variable Names
var firstName; // Starts with a letter and uses camelCase.
var _age; // Starts with an underscore.
var $salary; // Starts with a dollar sign.
var user3; // Contains a number but doesn't start with it.
var my_variable; // Uses underscores for separation.

// Illegal Variable Names
/* var 123name;  Starts with a number, which is not allowed.
   var: Reserved keyword in JavaScript, which is not allowed
   var my-variable; Contains a hyphen, which is not allowed in variable names.
   var first name; Contains a space, which is not allowed in variable names.
   var @username; Starts with a symbol other than _ or $. */ 
// ANSWER OF THIS QOUESTIONS>>>



/* Q2: 3. Display this in your browser
    a) A heading stating “Rules for naming JS variables”
    b) Variable names can only contain ______, ______,
    ______ and ______.
    For example $my_1stVariable
    c) Variables must begin with a ______, ______ or
    _____. For example $name, _name or name
    d) Variable names are case _________
    e) Variable names should not be JS _________
 */

document.write("<br> <h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain. NUMBER $ and For example $my_1stVariable");
document.write("Variables must begin with a $ _ and leters...")
document.write("Variable names are case. sensitive like rafey and RAFEY both are different variables in js...");
document.write("Variable names should not be JS. like this for catch case and var let const");






/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 05 >>>>>>>>>>>>>>>>>>>>>>>>>>> */
document.write("<br> <h1>CHAPTER 05</h1>")

// Q1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = +prompt("Enter the first number.")
var num2 = +prompt("Enter the second number.")
var result = num1 + num2;

document.write("sum of " + num1 + "and " + num2 + "is " + result ); //ANS 1;


/* Q2: Do the following using JS Mathematic Expressions
    a. Declare a variable.
    b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
    c. Initialize the variable with some number.
    d. Show the value of variable in your browser like “Initial value: 5”.
    e. Increment the variable.
    f. Show the value of variable in your browser like “Value after increment is: 6”.
    g. Add 7 to the variable.
    h. Show the value of variable in your browser like “Value

    after addition is: 13”.
    i. Decrement the variable.
    j. Show the value of variable in your browser like “Value   after decrement is: 12”.
    k. Show the remainder after dividing the variable’s value by 3.
    l. Output : “The remainder is : 0”. 
*/

document.write("<br> <h1>QUESTION NUM 02</h1>")

var num;
document.write("value after variable declaretion is " + num);
var num = 5;
document.write("initial value: " + num);
var numIn = num++
document.write("value after increament is: " + num);
var numAdd = num + numIn
document.write("value after addition is: " + numAdd);
var numDec = numAdd--;
document.write("value after decerement is: " + numDec);
var numResult = numDec/3;
document.write("the reminder is: " + numResult);




document.write("<br> <h1>QUESTION NUM 03</h1>");
/* Q3: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
*/

var ticket = +prompt("First please buy the ticket.");
var ticketNum = +prompt("How Many ticket are you buy?.");

var finalResult = ticket * ticketNum;

document.write("Total cost to buy " + ticketNum + "tickets to a movies is " + finalResult);




//Q4; Write a script to display multiplication table of any number in your browser.
var number = 4;

// Print the multiplication table for the number from 1 to 10
console.log(number + " x 1 = " + (number * 1));
console.log(number + " x 2 = " + (number * 2));
console.log(number + " x 3 = " + (number * 3));
console.log(number + " x 4 = " + (number * 4));
console.log(number + " x 5 = " + (number * 5));
console.log(number + " x 6 = " + (number * 6));
console.log(number + " x 7 = " + (number * 7));
console.log(number + " x 8 = " + (number * 8));
console.log(number + " x 9 = " + (number * 9));
console.log(number + " x 10 = " + (number * 10)); // ANS 4...




/*Q4: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
    a. Store a Celsius temperature into a variable.
    b. Convert it to Fahrenheit & output “NNoC is NNoF”.
    c. Now store a Fahrenheit temperature into a variable.
    d. Convert it to Celsius & output “NNoF is NNoC”. */


var celsius = 30;

var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

var fahrenheitTemp = 86;

var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C"); // ANS 4...




/* Q5: Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables

    a. Price of item 1
    b. Price of item 2
    c. Ordered quantity of item 1
    d. Ordered Quantity of item 2
    e. Shipping charges

Compute the total cost & show the receipt in your browser. */

// a. Price of item 1
var priceItem1 = 50;

// b. Price of item 2
var priceItem2 = 30;

// c. Ordered quantity of item 1
var quantityItem1 = 3;

// d. Ordered quantity of item 2
var quantityItem2 = 2;

// e. Shipping charges
var shippingCharges = 10;

// Calculate the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;


console.log("Receipt:");
console.log("Price of item 1: $" + priceItem1);
console.log("Quantity of item 1: " + quantityItem1);
console.log("Price of item 2: $" + priceItem2);
console.log("Quantity of item 2: " + quantityItem2);
console.log("Shipping charges: $" + shippingCharges);
console.log("Total cost: $" + totalCost); // ANS 5...



// Q6: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// Store total marks in a variable
var totalMarks = 500;

// Store marks obtained by the student in a variable
var marksObtained = 420;

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser console
console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + marksObtained);
console.log("Percentage: " + percentage + "%"); // ANS 6...


//Q7: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


var usDollars = 10;
var saudiRiyals = 25;

var usdToPkr = 104.80;
var riyalToPkr = 28;


var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * riyalToPkr);

console.log("Total in Pakistani Rupees: " + totalPkr); // ANS 7...




/*Q8: Write a program to initialize a variable with some number and do arithmetic in following sequence:
    a. Add 5
    b. Multiply by 10
    c. Divide the result by 2
Perform all calculations in a single expression */

var initialNumber = 20;

var result = ((initialNumber + 5) * 10) / 2;

console.log("Initial number: " + initialNumber);
console.log("Result after arithmetic operations: " + result); // ANS 8...



/*Q9: The Age Calculator: Forgot how old someone is? Calculate it!
    a. Store the current year in a variable.
    b. Store their birth year in a variable.
    c. Calculate their 2 possible ages based on the stored
    values.

    Output them to the screen like so: “They are either NN or NN
    years old”. */


var currentYear = 2024;


var birthYear = 1990;


var ageThisYear = currentYear - birthYear;
var ageLastYear = ageThisYear - 1;


console.log("They are either " + ageLastYear + " or " + ageThisYear + " years old."); // ANS 9...


/*Q11: The Geometrizer: Calculate properties of a circle.
    a. Store a radius into a variable.
    b. Calculate the circumference based on the radius, and
    output “The circumference is NN”.
    (Hint : Circumference of a circle = 2 π r , π = 3.142)
    Calculate the area based on the radius, and output “The
    area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
*/


var radius = 7; // You can change this value to any other radius


var pi = 3.142; 
var circumference = 2 * pi * radius;


console.log("The circumference is " + circumference);

// Calculate the area based on the radius
var area = pi * radius * radius;


console.log("The area is " + area); // ANS 11...




/*Q13: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
    a. Store your favorite snack into a variable
    b. Store your current age into a variable.
    c. Store a maximum age into a variable.
    d. Store an estimated amount per day (as a number).
    e. Calculate how many would you eat total for the rest of
    your life.

    Output the result to the screen like so: “You will need
    NNNN to last you until the ripe old age of NN”.
*/


var favoriteSnack = "chips";


var currentAge = 25; // You can change this value to your current age


var maximumAge = 80; // You can change this value to your expected maximum age


var dailyAmount = 2; // You can change this value to the estimated amount of snack consumed per day


var yearsLeft = maximumAge - currentAge;
var totalAmount = yearsLeft * 365 * dailyAmount; // Assuming 365 days in a year


console.log("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "."); // ANS 13...

 
//>>>>>>>>>>>>>>>>>>>> CHAPTER 6 TO 9 >>>>>>>>>>>>>>>>>>>>>>>

// Q:1 
// Declare the initial variable
var a = 10;

// Display the original value
document.write("<h3>Result:</h3>");
document.write("The value of a is: " + a + "<br><br>");

// Pre-increment operation (++a)
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment operation (a++)
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement operation (--a)
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement operation (a--)
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>"); // ANS 1

/* Q2: What will be the output in variables a, b & result after
execution of the following script:
  var a = 2, b = 1;
  var result = --a - --b + ++b + b--;
  Explain the output at each stage:
  --a;
  --a - --b;
  --a - --b + ++b;
  --a - --b + ++b + b--;  */ 

var a = 2, b = 1;


var result = --a - --b + ++b + b--;


document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("Final result is: " + result); // ANS 2



// Q3: Write a program that takes input a name from user & greet the user.
// Prompt the user to enter their name.
var userName = prompt("Please enter your name:");

document.write("Hello, " + userName + "! Welcome to our website.");// ANS 3



// Q4: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.


var number = prompt("Enter a number for the multiplication table (default is 5):");


if (number === null || number === "") {
    number = 5;
} else {
    number = parseInt(number); 
}


document.write("<h3>Multiplication Table of " + number + ":</h3>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>"); // ANS 4

/* Q:5 Take
  a) Take three subjects name from user and store them in 3
  different variables.
  b) Total marks for each subject is 100, store it in another
  variable.
  c) Take obtained marks for first subject from user and
  stored it in different variable.
  d) Take obtained marks for remaining 2 subjects from user
  and store them in variables.
  e) Now calculate total marks and percentage and show the
  result in browser like this.(Hint: user table)  */


var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");


var totalMarks = 100;


var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));


var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));


var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;


document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + (3 * totalMarks) + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>"); // ANS 5


////////assignment 9 to 11 ///////////


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

//answer:

// var City = ["karachi","lahore","islamabad","multan","quetta"]
// var myCity = prompt("Enter your city")
// var matchFound = false;
// for (var i =0;i<=4;i++){
//     if(myCity == City[i])
//         {
//         alert('Welcome your city')
//         matchFound = true

//     }

// }

// if(matchFound){

// }else {

//     alert("not your city")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
//answer:
// var gender = ["male","female"]
// var input_gender =prompt("enter your gender")


// if(input_gender == "male"){
//     alert("Good morning Sir")

// }else if(input_gender == "female"){
// alert("Good morning ma'am ")

// }else{
//     alert("your are shemale")
// }


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
//answer:
// var signal = prompt("enter your traffic light");

// if(signal == "yellow"){
// alert("Ready to move")

// }else if(signal == "red"){

//     alert("Must Stop")

// }else if (signal == "green"){
//     alert("Move now")

// }else{
//     alert("incorrect light")
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

//answer:


// var fuel = prompt("enter your fuel")
// if(fuel <=0.25){
// alert("Please refill the fuel in your car")
// }else{
//     alert("You have enough fuel")
// }

          ///////////question 5////////////
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }



// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }
//////////////////answer......///////
// a.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b.
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
//     alert("given condition is false")
// }

// c.
//  var c = 12;
// if (++c === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
//     }

//     if (++c <=14){
//         alert("condition 3 is true");
//         }

//         if(c === 14){
//             alert("condition 4 is true");
//             }

// d.
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e.
//  if (true){
//     alert("True");
//     }
//     if (false){
//         alert("False");
//         }

// f. 
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:
///answer:

// var sub1 = +prompt("enter your Subject 1")
// var sub2 = +prompt("enter your Subject 2")
// var sub3 = +prompt("enter your Subject 3")
// var total_marks = +prompt("enter your totalmarks")

// total_obtained = sub1 + sub2 + sub3  
// percentage = (total_obtained / total_marks) * 100  
// console.log(percentage+"%")

// if(percentage >=80){
// console.log("Grade = A")
// console.log(" remarks = Excellent")
// }else if(percentage >=60){
//     console.log("Grade = B")
//     console.log(" remarks = Good")
// }else if(percentage >=50){
//     console.log("Grade = C")
//     console.log(" remarks = Wel")
// }else{
//     alert("not found")
// }



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// answer

// var secretNum = 4;
// var userNum = +prompt("enter your number")

// if(userNum === secretNum){
// alert("Bingo! Correct answer")

// }else if (userNum+1 === secretNum){
//     alert("Close enough to the correct answer")
// }else{
//     alert("Sorry, try again!")
// }


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
//answer:

// var num = +prompt("enter your number")

// if(num%3 ==0){
// alert(num+"is divisible by 3.")
// }else{
//     alert(num+"is not divisible by 3.")
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
//answer:
// var num = +prompt("enter your number check this Even and Odd")

// if(num%2 == 0){
// alert("this Even number")
// }else{
//     alert("this  Odd number")
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
//answer:

// var temperature = +prompt("enter temperature");
// if(temperature >= 40){
// alert("It is too hot outside.")
// }else if(temperature >= 30){
//     alert("The Weather today is Normal.")
// }else if(temperature >= 20){
//     alert("Today’s Weather is cool.")
// }else if(temperature >= 10){
//     alert("OMG! Today’s weather is so Cool.")
// }else{
//     alert("incorrect")
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
//answer:
var First_num = +prompt("enter first number")
var Second_num = +prompt("enter Second number")
var Operation = prompt("+ , - , * , / , % ")



if(Operation == "+"){
  console.log(First_num + Second_num + " = result")
     
}else if (Operation == "-"){
    console.log(First_num - Second_num + " = result")
}else if (Operation == "*"){
    console.log(First_num * Second_num + " = result")
}else if (Operation == "/"){
    console.log(First_num / Second_num + " = result")
}else if (Operation == "%"){
    console.log(First_num / Second_num*100 + "% = result")
}else{
    alert("Inter a Number!")
}



                // CHAPTER 12 TO 13.................


// QUESTION NO 1

let input = 'A'; 
let asciiCode = input.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
    console.log("The input is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log("The input is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is neither a number nor a letter.");
}



// QUESTION NO 2
let num1 = 5; 
let num2 = 10; 

if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num2 > num1) {
    console.log("The larger number is: " + num2);
} else {
    console.log("Both numbers are equal.");
}


// QUESTION NO 3

let num = +prompt("Enter a number:"); 


if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else if (num === 0) {
    console.log("The number is zero.");
} else {
    console.log("Invalid input.");
}


// QUESTION NO 4
let char = prompt("Enter a character:"); 

char = char.toLowerCase();


if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(true); 
} else {
    console.log(false); 
}


// QUESTION NO 5

let correctPassword = "SOFTWARE_DEVELOPER";


let userPassword = prompt("Enter your password:");


if (userPassword === "") {
    console.log("Please enter your password.");

} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");

} else {
    console.log("Incorrect password.");

}


// QUESTION NO 6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);



// QUESTION NO 7
let time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");


if (time >= 0 && time < 1200) {
    console.log("Good morning! The time is " + time + " AM.");
} else if (time >= 1200 && time < 1300) {
    console.log("Good afternoon! The time is " + time + " PM.");
} else if (time >= 1300 && time <= 2359) {
    console.log("Good evening! The time is " + time + " PM.");
} else {
    console.log("Invalid time format! Please enter time between 0000 and 2359.");
}




   ////////////////Chapter 14 to 16//////////////



// 1. Declare an empty array using JS literal notation to store
// student names in future.
//answer:

var student_Name = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var student_Name = new Array();
console.log(student_Name);

// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
var str = ["haseeb", "faizan", "ali"];
var num = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var mixArray = ["haseeb", 23, true, "developer"];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
//answer:
var education_qual = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
console.log(education_qual)


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var student_name = ["haseeb","ali","faizan"]
var student_num = [420,380,250]
 for(var i = 0; i <student_name.length;i++){
    var perc = (student_num[i]/500)*100;
console.log("student name :  " + student_name[i] +" score "+student_num[i] +"  percentages of students "+ perc)
 }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
 
var colors_name = ["Red", "Green", "Blue", "Yellow", "Purple"]


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// a. Add color to the beginning  
//  answer:
 var new_color = prompt("enter new color start beginning ")
 colors_name.unshift(new_color)
 console.log(colors_name)
 
 
// b. Ask the user what color he/she wants to add to the end
// push end add 

// answer


var new_color = prompt("enter new color start beginning ")
 colors_name.push(new_color)
 console.log(colors_name)



// c. Add two more color to the beginning of the array.
// Displa

// answer:

 colors_name.unshift("orange","red")
 console.log(colors_name)

// / d. Delete the first color in the array. Display the updated
// array in 
// delete start 
// // answer:
colors_name.shift()
console.log(colors_name)


// e. Delete the last color in the array. Display the updated
// array in your bro
// answer
// delete array last 

colors_name.pop()
console.log(colors_name)



// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// answer

var index = parseInt(prompt("enter index add color"))
var new_color =prompt("add new color")
colors_name.splice(index,0,new_color)
console.log(colors_name)



// g. Delete color(s) at specific index 

 var index = parseInt(prompt("enter index add color"))
var count =prompt("enter count delete color")
colors_name.splice(index,count)
console.log(colors_name)

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// answer

let studentScores = [85, 90, 78, 92, 88, 76, 95, 89];  
  
studentScores.sort();  
  
console.log(studentScores);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var city_name = ["Karachi","lahore","islamabad","Quetta","Peshwaer"]

var selected_city= city_name.slice(2,4)

console.log(selected_city)



// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join(",");
console.log(result); 



// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var new_array =["keyboard","mouse","printer","monitor"]
new_array.push("keyboard")
new_array.shift()
new_array.unshift("printer");
console.log(new_array)



// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)


var new_array =["keyboard","mouse","printer","monitor"]
new_array.push("keyboard")
new_array.shift()
console.log(new_array)



// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
// answer:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

 
document.write('<select>');

for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}

document.write('</select>');


                                    ////////////////Chapter 17 to 20//////////////

   //   ARRAYS AND LOOP //

   // 1. Declare and initialize an empty multidimensional array.
//(Array of arrays):
// answer:
var arr =[];
arr[0] = 25;
arr[1] = "hello"
console.log(arr);

//2.Declare and initialize a multidimensional array 
//representing the following matrix:
//answer
var matrix;
matrix [0] = 0,1,2
matrix [1] = 1,0,1
matrix [2] = 3,2,1

//3 .3. Write a program to print numeric counting from 1 to 10.
for(var i = 1;i<=10;i++){
  document.write(i);
}

// 4. Write a program to print multiplication table of any 
//number using for loop. Table number & length should be 
//taken as an input from user.
//// answer:
 var table = +prompt("Enter a number");
 var tableLenght = +prompt("Enter tabel lenght");
  for(var i = 1;i<=tableLenght; tabel++ ){
    document.write(tabel + "x" + i + "="+ tabel*i +"<br />")
  }

  //5. Write a program to print items of the following array 
//using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”, 
//“strawberry”]
// answer:

for (var i = 0;i> fruits.lenght ;i++){
    document.write(fruits[i])
}


  //6. Generate the following series in your browser. See 
//example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//answer:

// Ans:   A
for(var i = 1; i <=15; i ++ ){
Document.write(i)
}
// B:

for(var i = 10; 10 >=15; i-- ){
Document.write(i)
}
// C:

for (var I = 1; I >=20; I ++){
if(I /2 == 0)
document.write("even num" , i)}
// D:

for (var I = 1; I >=20; I ++){
if(I /2 == 1)
Document.write("Odd num" , i)}

// E:

// Not


// 7. You have an array A = [“cake”, “apple pie”, “cookie”, hips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
// Ans :

var usersearch = promt("Enter fruit name");
var A = ["cake", "apple pie", "cookie", "hips", "patties"]

for(var I = 0; I < a.lenght; I ++){
if(a[i] == userserch){
document.write("yes this is avilable"+ a[i]);
break;
}else{
document.write("this is not available"+ a[i]);
}}

// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]
// Ans:
// Not

// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
// Ans:
// Not

// 10. Write a program to print multiples of 5 ranging 1 to 100.

// ans:

 for (var i = 1; i <= 100; i= i+5){
    document.write(i)
 }


                                    ////////////////Chapter 21 to 25//////////////



// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name      

// Ans:

 var firstName = prompt("Enter a First Name");
 var lastName = prompt("Enter a Last Name");
 var fullName = firstName+lastName
 document.write(fullName);



 //2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// Ans:
var phone = prompt("Enter a favorite Phone Name");
var userLenght = prompt("Enter your Lenght");
var userFrtPhone = "My favorite phone is :"+ phone + "Lenght of String"
document.write(userFrtPhone);


//3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
// Ans:
var  word = "Pakistani"
document.write(word[7]);


//4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser

// Ans :
var  hy = "Hello World"
document.write(hy[9]);

//5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// Ans :
var  word = "Pakistani"
document.write(word[9]);

//6. Repeat Q1 using string concat() method.

var firstName = "Haseeb"
 var lastName = "Ahmed"
 var fullName = firstName+lastName
 document.write(fullName);

 //7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser

//Ans:
var name = "Hyderabad"

console.log(name.splice(0,4,"Islam"));

//8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// Ans:
//   Not

//9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// Ans:
 
var sttg = "472"
document.write(typeofst)

var num = 472
document.write(typeofst)

//10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// Ans:
 var userInpur = prompt("Enter Inpur");
 userInpur = userInpur.toUpperCase
 alert(userInpur);

 //11. Write a program that takes user input. Convert and 
// show the input in title case.
// Ans:
  var userInput = prompt("Enter a Name");
  var firstLater = userInput[0].toLocaleUpperCase()
  var otherLater = userInput.slice[1].toLowerCase()
  var cap = firstLater + otherLater
  document.write(cap);

  //  & 
  var userInput = prompt("Enter a Name");
 var cap = userInput(0).toLocaleUpperCase() +  userInput(1).toLowerCase()
//  GF5r4 -b ,

  //12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser
 // Ans:
 
 var num = 35.36;
Console.log(num.toString());

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@
// Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64

// Ans:
//  Not

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
// Ans :

var A = ["cake" ,"apple pie" ,"cookie", "chips", "patties"]
var userInput = promt("Enter your name").toLowerCase();
var isMatch = "no"
For( var i = 0 ; i < userInput.length; i ++){
console.log(a[i]);
if(userInpur === A.toLowerCase()){
isMatch = "yes";
alert("Welcome");
Break;
}
}
if (isMatch = "no"){
alert ("Not Found");
}

// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// Ans :

var userName = prompt ("Enter User Name");
var password = +prompt ("Enter User Password");
if(userName == "Haseeb" && password == 123456){
alert(Userlogin)
}else{
alert("Invalid UserName & password")}

// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
// Ans:
// Not

// 17. Write a program to display the last character of a user input.

var userInput = prompt ("Enter value");
console.log(userInput.slice[-1])

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string
// Ans :
// Not

//                                         Objects of chap :26 to 30

// 1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
 // Ans:
 
 var userInteger = +prompt("Enter a value");
  console.log(userInteger);

 var userInteger = +prompt("Enter a value");
 var rount = Math.round(userInteger);
  console.log(round);

  var userInteger = +prompt("Enter a value");
 var floor = Math.floor(userInteger);
  console.log(floor);

  var userInteger = +prompt("Enter a value");
 var ceil = Math.ceil(userInteger);
  console.log(ceil);


//2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//  Ans :  Not 

//3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


//Ans :not

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// Ans:
 
var num = Math.floor(Math.random() * 6 + 2)
console.log(num)

//5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
//Ans :not

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

var num = Math.floor(Math.random() * 100 + 1)
console.log(num)


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
//Ans :not

//8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user./
//Ans :not
