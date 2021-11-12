/*
 
    JavaScript is a programming language that often has similar syntax to Java.
    However, they are totally different programming with any important differences
    The are not related. 

    So, if they are differernt, why do they both have the name 'Java' in them?
        At that time, Java was a really popular programming language, so the creator of JavaScript decided to put Java in its name. 
        It was a marketing gimmick to get more people to start with using JavaScript
    One of those differences is the fact that JavaScript is dynamically typed instead of statically typed 

    There are several datatypes in JS:
    1. boolean: primitives
    2. string: are not object in js, they are primitives
    3. number: primitives
    4. null: object. The absence of an object for a variable intended to be used for objects
    5. undefined: undefined, not yet assigned a value to a variable that was decleared
    6. object: object


*/

console.log("Hello world");
/*
    Dynamic Typing in Action
*/

var x = 'Hello World';
x = 10;
x = true;
x = null;
x = undefined;
x = {
    'firstName': 'Damilare',
    'lastName': 'Olaleye'

} // object

/*

    Control flow:
    1. if statements (else, if, else)
    2. switch statements
    3. for loops
    4. while loops
    5. do-while loops

*/

var someBoolean = true;
// if(someBoolean){
//     case 1: 
//         console.log('It is January');
//         break;
//     case 2: 
//         console.log('It is Febuary')
//         break;
//     default: 
//         console.log('It is not January');
// }


/*

    Simple object example

    Whenever a variable is pointing to an object, it behaves similarly to in Java
    The variable does not contain the object itself, it "poionts" to the location of the object 
    in the map

    Unlike in Java, we don't need to use "blueprints" to create objects. There is no need to create a class
    But, you are still instatntiating an object when you use object literal syntax '{}'


*/

var person1 = {
    'firstName': 'John',
    'lastName': 'Doe',
    'age': 18
} // We are instantiating an object, and we are providing this object with 3 initial properties and values

// 2 ways of accessing the properties from an object
console.log(person1.firstName);
var myString = prompt('Enter the property you would like to access from person1: ');
console.log(person1[myString]); // dynamic accessing of a particular property from the object

var p = person1; // p and person1 are pointing to the same object
p.firstName = 'Jane';

console.log(person1.firstName);  //Jane

var person2 = {
    'firstName': 'Damilare',
    'lastName': 'Olaleye',
    'age': 24
}

console.log(person2.firstName);

// Unlike in Java, where we require classes and need to define a bluepriint, here in JavaScript, you can actually add
// properties at Runtime (while the program is running)

person2.newProperty = 'some value';
person2.yetAnotherNewProperty = 'aksdfskdfadfknk';
person2['dksakdfakdfla'] = 435;

console.log(person2);

for (var i = 0; i < 5; i++){
    var newProperty = prompt('Choose a property name to add to this object');
    var stringValue = prompt('choose a value you want for that property');
    person2[newProperty] = stringValue;
}

console.log(person2);

var person3 = {
    'firstName': 'Micheal',
    'lastName': 'Liu',
    'greet': function() { // anonymous function (a function with no name)
        console.log(this.firstName + ' ' + this.lastName + ' says hi!');
    }
}

person3.greet()