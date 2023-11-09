/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('node6');

// Insert a few documents into the sales collection.
db.getCollection('users').insertMany([
  { 'name': 'abc', 'email': '10@qq.com', 'password': 'password' },
]);
// Run a find command to view items sold on April 4th, 2014.
const test = db.getCollection('User').find({
  name: 'abc'
}).count();

// Print a message to the output window.
console.log(`${test} sales occurred in 2014.`);

