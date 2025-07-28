// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key: Value} OR array: [value1, value2, value3]
//                                OR array of objects: [{}. {}, {}]

//        JSON.stringify() = converts as JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

//------------fetch-------------

fetch("./JSON/people.json")
    .then(response => response.json())
    .then(value => console.log(value))


// iterate through all the objects
fetch("./JSON/people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error)); // with error

// Specifis properties
fetch("./JSON/people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
 
//------------JSON.parse()------------

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongebob", "age": "30", "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
// const jsonPeople = `[{"name": "Spongebob","age": "30","isEmployed": true},
//                 {"name": "Patrick", "age": "34", "isEmployed": false},
//                 {"name": "Squidward", "age": "50", "isEmployed": true},
//                 {"name": "Sandy", "age": "27", "isEmployed": false}]`;

// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);



// -----------JSON.stringify()---------------

// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const person = {
//     "name": "Spongebob",
//     "age": "30",
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing", "Karate", "Cooking"]
// }
// const people = [{
//     "name": "Spongebob",
//     "age": "30",
//     "isEmployed": true
// },
// {
//     "name": "Patrick",
//     "age": "34",
//     "isEmployed": false
// },
// {
//     "name": "Squidward",
//     "age": "50", 
//     "isEmployed": true
// },
// {
//     "name": "Sandy",
//     "age": "27",
//     "isEmployed": false
// }]
// const jsonString = JSON.stringify(names);

// console.log(jsonString);