/*
    JavaScript is a dynamically typed language

    Variables can have any type they want
    We can have a variable store a string, but later store a number

    Datatypes: 
    1. string
    2. boolean
    3. number
    4. undefined
    5. null
    6. object

*/

printVarible('Some String');

// Regular Function declaration: have a name
// Regular functions get hoisted to the top
// This means you can invoke printVariable even before the function has been declared
function printVarible(input){
    console.log(input);
}

// Anonymous Function: functions that don't have a name
// However, in JavaScript (unlike in Java), functions are considered first-class citizens
// First class citizes can be
// 1. returned from a function
// 2. assigned to a variable
// 3. passed around as arguments


// Var varibales are also hoisted. This means you can use myVariable even before you can delcared it 
// However, I cannot use this function before it has been declared, becuase anonymous functions will not be hoiseted
// Unlike regular functions, which makes sense because this is a value assignment to a variable
var myVariable = function(input) {
    console.log('Hello!' + input);
}

myVariable('John');


/*

    var v. let v. const

    Once upon a time, var was the only way to declare variables. However, with the introduction of ES5, let and const 
    were introduced, ES6 statnds for ECMAScript 6, which was a major update to the JavaScript programming language

    ESCMAScript is the standard for JavaScript. It contains the specification for what the language should have.
    ECMA stands for European Computer Manufacturers Associations, and is the body responsible for updating the ECMAScript

    ECMAScript is the standard
    JavaScript is the language

    ES6 Added Some new important features:
        1. let keyword
        2. const keyword
        3. arrow functions
        4. promises

        Let and const give us an additional scope known as block scope.

        Before this introduction, JavasScript only had, using the var keyword:
            1. global scope
            2. function scope

        Using let and const, we can have
            1. global scope
            2. function scope
            3. block scope

*/

z =20;
console.log(z);

// z is global scoped.

var z = 10; // var variables are hoised to the top, meaning it is already available even before it has been declared 
// This is just a side effect of regular function hoisting, and is not really in any way useful

// x = 12; // CANNOT DO THIS, becuase let and const are not hoisted!
// x is global scoped
let x = 'Some string';
x = 12; 
console.log(x);

function myRegularFunction(){
    let g = 'my function scoped varaible\'s value'; // function scoped
    // This variable only exists within this function

    if(true){
        let y = 'my block scoped variable\'s value'; // block scoped
        // y only exists within this block
        console.log(y);
        console.log(g);
        console.log(x);

        var myVar = 'abc'; // function scoped
        // var variables, if they are inside a function, will ALWAYS be function scoped
        // it doesn't matter if it's inside a block or not
        // var myVar is being hoisted to the top of the function
    }
}

var i = 100;

// Print out the number 0 to 9
// i in the for loop is also global scoped
// meaning it is the SAME VARIBLE as the i above

for (var i = 0; i < 10; i++){
    console.log(i);
}
console.log('i' + i); // 10

//LET
let j = 100;

// j in the for loop is a block scoped variable
for (let j = 0; j < 10; j++){
    console.log(j);
}
console.log('j: ' + j); // 100 

// Recap on 2 types of functions: 
// 1. Regular functions
// 2. Anonymous functions

// Introducing... the Arrow function
let myAnonymousFunction = (input1, input2) => {
    console.log(input1);
    console.log(input2);
     
};

myAnonymousFunction('abc', 'def');

/*
    Using objects with behaviours

*/
let person1 = {
    'firstName': 'John',
    'lastName': 'Doe',
    'greet': function() {
        // The 'this' keyword gets its meaning from whatever object is calling a particular function
        // At least in the case of regular + anonymous functions 
        console.log(this.firstName + ' ' + this.lastName + ' says hi');
    }
}

person1.greet(); // the 'this' keyword inside of the greet method is equal to person1, becuase we did person1.greet()

let person2 = {
    'firstName': 'Jane',
    'lastName': 'Doe'
}

// We are creating a new property, 'borrowedFunction' for the person2 object
// The property is pointing to the function that belongs to person1
// We are not creating a copy of that function, we are actually 'refrencing' that original anonymous function
// Because, functions are objecs in JS
person2.borrowedFunction = person1.greet;
person2.borrowedFunction();

/*
    The above behavior is NOT true for arrow functions

    The 'this' keyword inside of arrow functions do not get its meainig from the object calling the method

    It gets its meaing from the 'lexical scope''s this
*/

// This example does not work the way we would think that it should work initially, (without knowing how
// arrow functions utilize the 'this' keyword internally)
let person3 = {
    'firstName' : 'John',
    'lastName': 'Doe',
    'greet': () => {
        console.log(this.firstName + ' ' + this.lastName + ' says hi!');
        console.log(this);
    }
}

person3.greet();
console.log(this); // the arrow function above will utilize the 'this' in which that arrow function was defined
// So, at the global scope level, the value of 'this' is a special object known as the 'Window' object
// Because firstName and lastName do not exist as properties of the Window object, it will print out
// undefined undefined says hi!

let person4 = {
    'firstName': 'Billy',
    'lastName': 'Joe',
    'greet': function() {

        console.log(this);

        // You can nest functions inside other functions in JS (but not in Java)
        // Arrow functions use the 'this' keyword from the scope the arrow function was deifned in'
        // Therefore, becuase the scope the arrow fnction was defined in's 'this' keyword would be the object
        // invoking the function, the arrow function will also do the same
        let myArrowFunction = () => {
            console.log(`${this.firstName} ${this.lastName} says hi`);
        }
        myArrowFunction();
    }
}

person4.greet();

/*
    In JavaScript, we can represent strings using:
        1. ' ' single quotes
        2. " " double quotes
        3. ` ` template literals: valuable for defining a string based on expressions
*/
let f = 'abc'
let myString1 = `${f} is the value of x`;
console.log('myString1: ' + myString1);

let myString2 = `${myFunction()} is the value returned from myFunction() and the value of f is ${f}`;
console.log(myString2);

function myfunction() {
    return 'def';
}