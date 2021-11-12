// document
// The document object is a special object that is available to our JavaScript code that is running in the browser
// As we saw with the DOM diagram, the document object exists at the top.
// There are other objects that exist within this document object

let bodyElement = document.body; // we are declaring a variable called bodyElement that is referencing the body object
// that exists as a property within the document object

// Creating an Element
let div = document.createElement('div');

/*

    Modifying Element content

*/
// 3 ways of including content inside of an element
// 1. innerHTML: vulnerable to cross site scripting (XSS) because HTML tags are interpreted as elements
div.innerHTML = '<h1>Hello World!</h1>';
// 2. innerText: not vulnerable to XSS because HTML tags are treated as plain text and not interpreted as elements
// div.innerText = '<h1>Hello World!</h1>';
// 3. textContent: preserves ALL of the spacing in the DOM
// div.textContent = 'Hello World!';

/*

    Adding an element to the DOM

*/
bodyElement.appendChild(div);

// Selecting div w/ id of first-div
let firstDiv = document.querySelector('#first-div');
console.log(firstDiv.textContent); // Spacing is preserved
console.log(firstDiv.innerText);
console.log(firstDiv.innerHTML);

/*
    Removing an element from the DOM
*/
div.remove();

/*

    Modifying Element Attributes

*/
let imgElement = document.querySelector('img'); // We only have 1 img tag, so we will use the tag name selector
imgElement.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png');
imgElement.setAttribute('width', '100');

/*

    Modifying the CSS styling of elements

*/
let firstDivChildren = firstDiv.children;
console.log(firstDivChildren);

firstDivChildren[0].style.color = 'red';
firstDivChildren[0].style.backgroundColor = 'gray';

firstDivChildren[1].style.color = 'cyan';
firstDivChildren[1].style.backgroundColor = 'red';

// Naming convention for .style properties
// css property -> camelcase
// In CSS, you set the background color using background-color property
// background-color -> backgroundColor
// padding-top -> paddingTop
// margin-bottom -> marginBottom

/*

    Student table example

*/

// Arrays in JavaScript
// Unlike in Java, Arrays in JS are dynamic: meaning you can add additional elements. There is no fixed size
let students = [];

// Four Array functions:
// 1. push: add an element to the end of an array
// 2. pop: remove an element from the end of an array
// 3. unshift: add an element to the beginning of an array
// 4. shift: remove an element from the beginning of an array
students.push({
    'id': 1,
    'firstName': 'John',
    'lastName': 'Doe',
    'classification': 'Freshman',
    'age': 18
});

students.push({
    'id': 2,
    'firstName': 'Jane',
    'lastName': 'Doe',
    'classification': 'Senior',
    'age': 22
});

students.push({
    'id': 3,
    'firstName': 'Bach',
    'lastName': 'Tran',
    'classification': 'Freshman',
    'age': 18
});

let studentTable = document.querySelector('#student-table');
let studentTableTbody = studentTable.querySelector('tbody'); // select the tbody element of the element with an id of student-table

// Iterating over students array

// Traditional method
function populateTableData() {
    studentTableTbody.innerHTML = ''; // clear out all child elements from tbody

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
    
        let tr = document.createElement('tr');
    
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
    
        td1.innerText = student.id;
        td2.innerText = student.firstName;
        td3.innerText = student.lastName;
        td4.innerText = student.classification;
        td5.innerText = student.age;
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
    
        studentTableTbody.appendChild(tr);
    }
}

populateTableData();


// Events & Listeners
// Events are usually user interactions that occur within the browser. We can write JS code that listens to these events
// In order to execute certain code when those events occur

// Take, for example, the 'click' event

// We can add an event listener to our button element that listens for the click event, and triggers a "callback function"
// That will be executed whenever the click event occurs

let button = document.querySelector('#demo-button');


let buttonClickArrowFunction = () => {
    // 1. Grab the information from the inputs
    let studentIdInputElement = document.querySelector('#student-id-input');
    let firstNameInputElement = document.querySelector('#first-name-input');
    let lastNameInputElement = document.querySelector('#last-name-input');
    let classificationDropdownElement = document.querySelector('#classification-dropdown');
    let ageInputElement = document.querySelector('#age-input');

    // 2. Create a new student object with that information
    let newStudent = {
        'id': studentIdInputElement.value,
        'firstName': firstNameInputElement.value,
        'lastName': lastNameInputElement.value,
        'classification': classificationDropdownElement.value,
        'age': ageInputElement.value
    };

    // 3. Add the student object to the students array
    students.push(newStudent);

    // 4. invoke the populateTableData function
    populateTableData();
};
// add an event listener to the button:
button.addEventListener('click', buttonClickArrowFunction); // make sure to pass in the callback function WITHOUT invoking it
// that would be the job of the event listener to invoke the function whenever the event occurs

// remember that in JS, functions are first class members. This means you can pass them around in arguments,
// have variables reference them, and return them from functions

// Whenever the click event occurs on the button, the arrow function will be invoked