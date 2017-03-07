# javascript_challenges

LEARN Academy - Day 5

The files in this repo are associated with the challenges we completed in our 5th day of class at LEARN.
The focus was on Javascript.

Javascript Functions Challenge
Write functions of your own to:

Subtract two numbers
Use the example of how to add two numbers from the previous lesson as a reference.
Multiply two numbers
Divide two numbers
Take somebody's name and say a greeting to them.
Hint: prompt the user for their name, store it in a variable, then use alert them with a greeting.
Write a function that reverses a string character by character; so reverseCharAt("hello", 0) returns "o" and reverseCharAt("hello", 4) returns "h".
Hint use .length and .charAt() and some clever arithmatic.
Stretch Goal: The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is?

Write a function that:

Takes 2 arguments: age, amount per day.
Calculates the amount consumed for rest of the life (based on a constant max age).
Outputs the result to the screen using console.log.
Call that function three times, passing in different values each time.

Super Stretch Goal: The Temperature Converter

Based of the temperature converter from earlier,

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output something like: "xC is xF".
Outputs the result to the screen using console.log.
Create a function called fahrenheitToCelsius:

Store a fahrenheit temperature into a variable.
Convert it to celsius and output something like: "xF is xC."
Outputs the result to the screen using console.log.


Javascript Variables Challenge
Here are a few exercises for you to practice using variables:

Set a variable called favoriteNumber equal to your favorite number.
Calculate what your favorite number divided by 2 is.
Set another variable called someonesFavorite equal to 13.
Change the value of someonesFavorite to 7.
Subtract your favorite number from mine.
Change the value of my favorite number to be 26 times its current value.
Stretch Goal: The Temperature Converter

Make a C to F and F to C temperature converter based on the steps here:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output something like: "xC is xF".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output something like: "xF is xC."




Javascript Password Checker Challenge
Goal

You are writing the user registration page for a secure web site.
On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:

User ID and password cannot be the same
User ID and password have to be at least six characters long
User ID cannot contain the following characters: !#$
Password has to contain at least one of: !#$
Password cannot be "password"
Implement functions to perform the checks.
Then:

Write a main method that

First lets a user input both user ID and password,
Then create methods corresponding to criteria above to evaluate the user ID and password
Then output whether the combination the combination is acceptable or not.
Run the program and test it for all criteria listed above by inputting different values.
Hint: See how the javascript String class can help you.
Stretch Goal

Password has to contain at least one digit
Super Stretch Goal

Password has to contain a lower and an uppercase letter
Hint: Cleverly use toUpperCase or toLowerCase
Be sure to test with a password that have no letters




Validate Credit Card Number
If you have completed the password checker and are looking for another challenge, try and create a validation for a credit card number.

Use the Luhn Formula

Drop the last digit from the number. The last digit is what we want to check against
Reverse the numbers
Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
Add all the numbers together
The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10).
Hints:

Assume that the credit card number is 16 digits.
To return a specified character from a string use charAt( ). See: Description.
You do not need to reverse the numbers.
Create a function that accesses the digits string at the right (in reverse).
To create a number from a string in javascript use parseInt( ). See: Description.
(x>9)*(-9) returns -9 if x is higher than 9.
