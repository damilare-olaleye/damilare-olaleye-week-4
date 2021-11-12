
// When we are doing comparisons in JavaScript
// we have the same operators as in Java >, <, >=, <=, !, ==
//
// But, we also have ===
// == does what is known as type coercion

// Type coercion
let someBoolean = '20' == 20; // true ->// the string is being "coerced" into a number,, "20" == 20 -> 20 == 20  -> true
console.log(someBoolean);

// The above behaviour may not be preferable, in which case we can use the === operator
// === is known as "strict operator"
// it will not coerce one type into another
// If the types are different, it will evaluate to false

someBoolean = '20' === 20;
console.log(someBoolean);  // false

/*
    Truthy and falsy

    JavaScript has the concept of truthy and falsy values. Java does not

*/

// Numbers: all numbers are true except for 0
if (1){
    console.log('1 is treated as a truthy value');
}

if(-10) {
    console.log('-1 is treated as truthy');

}

if(0) {
    console.log('this will never print out, becuse is falsey');
}

// Undefined is falsy
if(undefined) {
    console.log('this will never print out');
}

// null is falsy
if(null) {
    console.log('this will never print out');

}

// strings: an empty string is falsy
if(' '){
    console.log('this is falsy');
}

if('sjldfasd'){
    console.log('this will print out. truthy');
}

