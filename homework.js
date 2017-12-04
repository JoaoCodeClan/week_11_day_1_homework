// var name = 'Keith';
//
// var printName = function() {
//   console.log('My name is ' + name );
// };
//
// printName();
//
//
// name is universal and function prints on console "My name is Keith"

// score = 5;
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());
//
// score = 5 is not defined , it gets defined in the function and then printed in console;

// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
//  listAnimals();
//
// despite being define outside function the function creates a new version of the array
// and loops through it and prints it on console. since we are only callign funtion it display that;
// myAnimals has not been changed and will display as above if called;

// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';
//
// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };
//
// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );
//
// changes suspectThree to'Harvey' withing fucntion but not outside it and therefore
// console.log( 'Suspect three is:' + suspectThree ); returns 'Keith'
//
// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
//
// console.log(detectiveInfo());

// returns 'Poirot'. because we are changing the value of the property. it would do that
// even with const detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };


var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

returns 'the murderer is rick ', because the variable is out of the function and then
fucntional does not change but but creates local variables that are never displayed on console but instead just changed; 
