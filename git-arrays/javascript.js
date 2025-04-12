// function camelize(word) {
//     let split = word.split('-').join('');
//     return split;
// }

// function camelize(word) {
//     let splitWord = 
//     word.split('');

//     let dashIndex = splitWord.findIndex(word => word == '-');

//     let firstPass = splitWord.splice(dashIndex, 2, splitWord[dashIndex+1].toUpperCase())
//     // .splice(dashIndex, 2, splitWord[dashIndex+1].toUpperCase());
//     // let test = splitWord[dashIndex].toUpperCase()
//     // test.join('');
//     return splitWord.join('');;
// }
// console.log(camelize("background-Color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// function camelizeVersionTwo(someWord) {
//     let seperatedLetters = someWord.split('');
//     let dashIndex = seperatedLetters.filter(word => word == '-');
    
//     return dashIndex;
// }

// console.log(camelize("background-Color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


// function camelize(str) {
//     return str.split('-')
//     .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     ) 
//     .join('')
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (matching values)

// console.log( arr ); // 5,3,8,1 (not modified)

// function filterRange(arr, a, b) {
//     return arr.filter(arr => arr >= a && arr <= b)
// }   

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 1); // removed the numbers except from 1 to 4

// console.log( arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b) {
//     for(let i = 0; i <= arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
         
//     }

// }


// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order
// arr.sort( (a, b) => b - a)

// console.log( arr ); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

// function copySorted(arr) {
//     return arr.slice().sort();
//     // return sortedArr;
// }

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name)

// console.log( names ); // John, Pete, Mary


// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(item => ({
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id,
// }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// // console.log(`${john.name} ${john.surname}`)
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith
// console.log(usersMapped)


// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];
// console.log(arr);

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete
// console.log(arr)
// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age)
// }


// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// function shuffle(arr) {
//     arr.sort(() => Math.random() - 0.5);
// }

// console.log(arr);

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   return arr.filter((item, index, self) => self.indexOf(item) === index)
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
// For example:

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);
// /*
// // after the call we should have:
// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// function groupById(users) {
//     users.reduce()  
// }
// // fullName: `${item.name} ${item.surname}`,
// // //     id: item.id,

// console.log(groupById(users))















// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    // const inventors = [
    //     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    //     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    //     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    //     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    //     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    //     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    //     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    //     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    //     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    //     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    //     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    //     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    //   ];
  
    //   const people = [
    //     'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    //     'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    //     'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    //     'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    //     'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    //   ];
      
    //   // Array.prototype.filter()
    //   // 1. Filter the list of inventors for those who were born in the 1500's
    //   let fifteenBabies = inventors.filter(item => item.year > 1499 && item.year < 1600);
    //   //console.log(fifteenBabies);
      
    //   // Array.prototype.map()
    //   // 2. Give us an array of the inventors first and last names
    //   let flNames = inventors.map(arr => `${arr.first} ${arr.last}`);
    //   //console.log(flNames);

    //   // Array.prototype.sort()
    //   // 3. Sort the inventors by birthdate, oldest to youngest
    //   let sortaVolta = inventors.sort((a, b) => a.year - b.year);
    //   // console.log(sortaVolta);
  
    //   // Array.prototype.reduce()
    //   // 4. How many years did all the inventors live all together?
    //   let ageWogie = inventors.reduce((total, current) => total + (current.passed - current.year), 0);
    //   // console.log(ageWogie);
  
    //   // 5. Sort the inventors by years lived
    //   let livelive = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
    //   // console.table(livelive);
    //   // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    //   // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
  
    //   // 7. sort Exercise
    //   // Sort the people alphabetically by last name
  
    //   // 8. Reduce Exercise
    //   // Sum up the instances of each of these
    //   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  
  