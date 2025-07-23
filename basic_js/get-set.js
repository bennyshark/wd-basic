// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle {

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
             this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
             this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return this._height.toFixed(1);
    }

    get area(){ // with gs we can access something like its a property. area is not even at the constructor
        return (this.width * this.height).toFixed(1);
    }
}

const rectangle = new Rectangle(3, 4);


console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// -----------Person-------------

class Person{

    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstname = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastname(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastname = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + "" + this.lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
