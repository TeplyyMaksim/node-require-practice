const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log('Starting app...');

console.log('*');
var res = notes.addTwoNums(1, 2);
console.log(`Result: ${res}`);

console.log('*');
var note = notes.addNote();
console.log(`Result: ${note}`);

var user = os.userInfo();
fs.appendFile('greetings.txt', `Hello, ${user.username}! You are ${notes.age}.\n`, function (err) {
  if (err) {
    console.log('Unavailable to write to file');
  }
  console.log('*');
  console.log('Writing in file...');
});

console.log('*');
console.log('Checking lodash work');
var checkValues = {
  bool: true,
  str: 'Maksim',
  arr: [
    'a',
    'b',
    1,
    3,
    '2',
    'b',
    'A',
    'B'
  ]
}
console.log(`${checkValues.bool} ${_.isString(checkValues.bool) ? 'is' : 'is not'} string`);
console.log(`${checkValues.str} ${_.isString(checkValues.str) ? 'is' : 'is not'} string`);
console.log('Filtering array: ', _.uniq(checkValues.arr));
