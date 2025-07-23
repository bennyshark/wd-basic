// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScripts 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil_ES6.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm`);
