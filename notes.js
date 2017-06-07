console.log('Starting notes module...');

module.exports = {
  age: 20,
  addNote: () => {
    console.log('Adding note...');
    return 'New note';
  },
  addTwoNums: (a, b) => {
    console.log('Adding nums...');
    return a + b;
  }
}
