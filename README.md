# JavaScript Notes


## Introduction
Library = set of functions (JQuery) <br>
Framework = comes with a ceratin way of coding(React) <Br>
You can use ELECTRON for making the js code a program. 

<br>
External file:

    <script src="scripts/yourScriptHere.js"></script>
Internal JS:

    <script>
        alert("Hello!"); 
        // makes a popup
    </script> 

## Variables

    var name = "Andreea";

_thisKindOFVars are called camelCased and These_are_snake_cased._
## Concatenation
Merging. 

    into = 30 + " years";
    sums = 30 + 30;
    var sentence = " I am" + age + " Years old.";

## Console log
Prompting something in the console, also nice for debug.

    console.log("Name", name);
Other types of logs:

    console.warn("Warning here!Panik");
    console.log("Something to display here");
    console.error("Errors can be shown like this");

## Selecting HTML Elements
The ex. is presuming a element with the id = test exists in the HTML. 

    test = document.getElementById("test")

        easy common way:
    function $(id){
            test = document.getElementById(id)
    }
        use as:
    var test = $("ID")

Grabbing the element node (the whole HTML element is called a node). <br>
In console you can enter the name of the var and it will select the element.
If you hit . you can see many things you can do with the var holding the element. Here are stores many methods.
<br>

To modify things in the element:

    test.innerHTML = "<u> Test test test<u>";
To store old text from a element:

    test.oldText = test.innerHTML;

## String Manipulation
Take a variable and change it. 

    var text = document.getElementById('IdHere').innerHTML;
    var upperTextAll = text.toUpperCase();
    var lowerTextAll = text.toLowerCase();
Cuts first 10 char:

    var after10Char = text.substr(10);
 
First 10 characters:

    var first10Char = text.substr(0, 10);
Split = creates a array out of a string splitting it by a parameter I set. 

    var words = text.split(" ")
Join  = join back the string, can specify how to join

    var sentence = words.join("x");

Slice = cut a part of a string

    var cuts = text.slice(0, 3);

## User Input
This example creates a prompt, saves the value and use it to rewrite a inner HTML text:

    var name = prompt("What is your name ?", optionalPlaceholderHere);
    var nodeText = document.getElementById.innerHTML;
    nodeText = name;

## Comparison Operators
<code>
  - !=      dose not qual<br>
  - ==      equals<br>
  - ===     strictly equal<br>
  - > greater than<br>
  - < lesser than<br>
  - >= greater than or equal to<br>
  - <= lesser than or equal to<br>
</code> <br>
Example of input checker and inner HTML modification:
    
    if ( name.toLowerCase() == "andreea") {
        nodeText = "Welcome Andreea";
    }
    //You can put a single var between the (), it will be true for any number

## Switch
Like nested ifs and elses:

    switch(varToChangeName) {
        case "mango":
            console.log("hello Mango!")
            break;
        case "coconut":
            console.log("stuff here")
            break;
        default:
            console.log("If not in a case it will go here.")
            break;
    }

## Arithmetic Order Rule
BEDMAS = Brackets, Exponents, Division/Multiplication, Addition/Substraction

## Boolean Logic
<br>
AND: <br>
True + True = True <br>
True + False = False <br>
False + False = False <br>
<br>
OR: <br>
True + True = True <br>
True + False = True <br>
False + False = False <br>

## Array manipulation
Defining an array:

    num = ["stuff", ints, float, booleansToo];
    num = Array(1, 2 ,7);
    //create an array

    num[2];
    //select item nr 3

    num.lenght
    //tells you the total nr of items, or charcaters or properties

    num.push("Parrot");
    //add items

    num.slice(start, end);
    //cuts the array

    names.pop();
    //takes last item out

## Type of variable

    typeof(VAriableName);

## Typecasting
Take a variable and force it ot be another type.

    age = Number(age);
    //strings become numbers if numbers, else it becomes a Nan

    age = String(age);
    age = Array(age);
    age = Boolean(age);

## Functions
Sets of rules so I don't repeat myself.

    function nameMeSenpai ( parameter/varName ) {
        what to do here

        return //what the function retuns here only;
    }

    function cToF (cNum) {
        var fahrenheight = cNum * 1.8 + 32;
        return fahrenheight;
    }

## Query 
 CSS : .class{   }, #id{}, element{}
<br>

 To select something by class:
    
    var title = document.querySelector(".title")

To slect a element by element name:

    var small = document.querySelector("small")
    //this selects the first element in the dom

    var small = title.querySelector("small")
    //this looks inside the title element to find a small element

To select all list elements:

    var lis = document.querySelectorAll("li")
    //creates an array

    lis[4].innerHTML = "<a href="#">Hi</a>";
    //inserts a element ina  element

## Events
This is what makes js interactive

    <button class="btn btn-primary" type="button" onClick="clickMe()">
    //every time someone clicks it, there's going to execute a js function


## Input 
To see the values of different atributes in a node.

    <input type="text" class="form-control">

    <script>
        var input = document.querySelector(.form-control")
    </script>

To get a certain value from a element:

    document.getElementById("idHere").value
    //This works for a input because there will be a value atribute
    //Works with all kind of atributes

Change a CSS rule:

    function colorElementRed(id) {
    var el = document.getElementById(id);
    el.style.color = "red";
    }

    document.getElementById("total").style.display

## Anonymous functions
Main ideea in here is if you plan to not reuse the function. Can be stored in a variable:

    var getName = function() {
        return stuffHEre
    }

## IIFE = Immediatlt invoked function expression
Tells js this is a function but run it automatically:

    ( function LoadApp() {
        console.log("App is loading")
        console.log("App is loading")
    })();

    //this means execute automatically what is in here

## Arrow functions
Arrow functions allow us to write shorter function syntax:

    hello = () => {
        return "Hello World!";
    }

## THIS keyword
Refers to it's self, the object. 

    function getPrson(name){
        this.name = name;
        this.profession = "chemist";
        <!-- this reffers to this function -->
        //var1.internalVar2.internalVar3
        return this
    }

## Scope
Is basically where the variable is. Global variables can be used inside functions, but local variables can't be used outside the scope. 
    
    //global variable
    var course = "JS"
    
    //global function
    function doAthing(){
        console.log(course)
        //local variable
        var me = "Andreea";
        console.log(me);
        //this wil work also
        return course
    }    

    console.log(me);
    //this can not work it is out of scope

## Hoisting
In a function, js looks for a var before running thte code and it moves it at top, they are first undeined and then the value get's set where we originally defined it. 

    function getPerson{
        //var name; This is what js dose

        console.log("name");
        var name = "Andreea";
        console.log("name");
    }

In JavaScript, a variable can be declared after it has been used.

    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x

This will work:

        function getPerson{
            if (myName === undefined){
                myName = "Andreea";
            }

            console.log("name");
            var name = "Andreea";
            console.log("name");

            var myName;
            //moves the defining to the top
        }

This will also work

    function getPerson(name){
        if( name === undefined){
            name = "Andreea"
        }
        console.log("A thing here", name)
    }

## Event listeners
A function that is bound to a element to listen for events (Clicks, a keypress, blur, scroll, etc.)<br>
Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

    addEventListener(type: "keyup", listener: (this: HTMLElement, ev: KeyboardEvent) => any, options?: boolean | AddEventListenerOptions): void

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
<br>
<br>
Synthax:

    btn.addEventListener('click', function(event){});

Ex click :

        <button class = "btn js-button">
            Click me!
        </button>

        <div id="totalClicks">
        </div>

    <script>
        var btn = document.querySelector(".js-button");
        //get the node
        var totalClicks = 0;
        //set the total click to 0

        btn.addEventListener('click', function(event){
            //grab a node, add the event listener(what event, function)

            totalClicks ++;
            //total clicks +1
            
            document.getElementById("totalClicks").innerText = totalClicks;
        })

    </script>

Get a name on every keystroke and change the html:

    var input = document.querySelector(".js-name");
    var nameElem = document.querySelector(".js-change-name");

    input.addEventListener('keyup', function(event){
        // key down, when your finger did not move off the key
        //keyup,  when your finger comes up from the key stroke

        consoole.log(event.target.value);
        //you need target to target every time the value
        name.innerText = event.target.value;
        //change the span class js-change-name to match the received value

        //the second parameter, the function, is called a callback function
    };

## Change CSS with an event listener

    var bgColor = document.querySelector(".js-bg-color");

    bgColor.addEventListener('keyup', function(event){
        consoole.log("bg Color " , event.target.value);
        var body = document.querySelector("body");
        body.style.backgroundColor = event.target.value
        // dashes in css - become camelCase in JS
    });

## Objects
Objects can hold anything, numbers, strings, functions.

    const person = {
        //property : method
        'name':"Andreea",
        'age':24
    }

Objects can also have <b>methods</b>.
Methods are actions that can be performed on objects.
Methods are stored in properties as function definitions.

    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    };
In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.

<b>Accessing Object Properties</b>

    objectName.propertyName
    or
    objectName["propertyName"]

<b>Accessing Object Methods</b>

    objectName.methodName()

## <b>FOR</b> loops
Loops are handy, if you want to run the same code over and over again, each time with a different value.

    for ( var i=0; i<10; i++){
        console.log(i)
    }

The JavaScript <b>for in</b> statement loops through the properties of an Object:

    for (key in object) {
    // code block to be executed
    }

The JavaScript <b>for in</b> statement can also loop over the properties of an Array:

    for (variable in array) {
    code
    }

The JavaScript <b>for of</b> statement loops through the values of an iterable object.

    for (variable of iterable) {
    // code block to be executed
    }

## <b>While</b> loops
The while loop loops through a block of code as long as a specified condition is true.

    while (condition) {
    // code block to be executed
    }

The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

    do {
     // code block to be executed
    }
    while (condition);

## LET and CONST
Var can create a global variable and can be hoisted and defined after it is used. Vars can be used outside the scope as well.

<B>LET</B> creates a variable that is scoped inside the brackets and can't be used outside. Const creates a variable scoped in the block, but can't be changed/overwritten.

Variables defined with let and const are hoisted to the top of the block, but not initialized.  

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

    VAR is a variable that can be scoped to the global enviroment
    LET is a block scoped variable that can be changed
    CONST is a block scoped variable that can't be changed


## JavaScript Classes
ECMAScript 2015, also known as ES6, introduced JavaScript Classes. JavaScript Classes are templates for JavaScript Objects.  

    class ClassName {
        constructor() { ... }
        method_1() { ... }
        method_2() { ... }
        method_3() { ... }
    }

    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }

        //can add functions here to use and return things
        makeSound(){
            console.log(
                this.name + this.year
                //will return the name and year inside the console
            )
        }
    }
    
A JavaScript class is not an object. It is a template for JavaScript objects.

When you have a class, you can use the class to create objects:

    let myCar1 = new Car("Ford", 2014);
    myCar1.makeSound();
    //will return the name and year inside the console

    let myCar2 = new Car("Audi", 2019);

### Extending Classes 
The extends keyword is used to create a child class of another class (parent).
The child class inherits all the methods from another class.
Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

    class Car {
        constructor(brand) {
            this.carname = brand;
        }
        present() {
            return 'I have a ' + this.carname;
        }
    }

    class Model extends Car {
        constructor(brand, mod) {
            super(brand);
            //this is a way to say copy from parent
            this.model = mod;
        }
        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }
The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

Can just be :

    class NeoModel extends Model