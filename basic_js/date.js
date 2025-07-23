// get date

const date = new Date();

const year = date.getUTCFullYear();
const month = date.getMonth;

console.log(year);

//----------Set Date-------------

date.setFullYear(2024);
date.setMonth(0);

console.log(date);

//-------------Compare date----------

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("Happy new year");
}