const {request} = require('./fetch.js');
const greenting = require('./greeteng.js');

console.log('greeting=>',greenting('marry'));
console.log('request=>',request('https://jsonplaceholder.typicode.com/users'))

// create a module to fetch the users api https://jsonplaceholder.typicode.com/users
// return the data - do not console log it in the module
// console log it, in a diffrent js file
