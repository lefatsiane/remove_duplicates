//before importing a package (such as lodash) install it into file by using "npm i lodash" or "npm install" into terminal

const _ = require("lodash"); // importing lodash
// import _ from "lodash";
const numArray = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10]; // number array
const newNumArray = _.uniq(numArray); //using .uniq function to remove duplicates in an array
console.log(newNumArray); // display array with removed duplicates
