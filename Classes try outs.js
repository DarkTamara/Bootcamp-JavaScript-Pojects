class Person{
    //create template for objects
    constructor(name, age, looks, height, weight) {
        this.age = age;
        this.age = name;
        this.looks = looks;
        this.height = height;
        this.weight = weight;
    }
    //add custom methods inside the class
    sayStuff(){
        console.log(this.age,this.age)
    }
}

const josh = new Person("Josh", 23, "red hair", 1.82, 54);



//create a little thing to get a input value and store it as a object using class template
class Person{
    //create template for objects
    constructor(name, age, looks, height, weight) {
        this.age = age;
        this.age = name;
        this.looks = looks;
        this.height = height;
        this.weight = weight;
    }
    //add custom methods inside the class
    ageCheck(){
        console.log(this.name,this.age)
    }
}

//onClick event here
function createPerson(){

    var person = new Person(
        document.getElementById('nameField').value,
        document.getElementById('ageField').value,
        document.getElementById('looksField').value,
        document.getElementById('heightField').value,
        document.getElementById('weightField').value,
    )
}
