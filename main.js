//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure
// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};


// convert given object into an array
//  object.entries returns an array with all of our values included,
const entriesArray = Object.entries(obj)
entriesArray.forEach( element => console.log(`${element[0]} is called ${Object.values(element[1])[0]} and is ${Object.values(element[1])[1]}`))

//=================================================================================================================================================================//
//=================================================================================================================================================================//



// Use Object Methods
//Create an alphabetical list of every folder in the documents object (the keys are the folders)
//Create a list of every file in the documents object. one list.
const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};


const alphabeticalOrderFolders = Object.keys(documents);
let listFiles = Object.values(documents).toString();

listFiles = listFiles.split(',')
console.log(listFiles)

//=================================================================================================================================================================//
//=================================================================================================================================================================//





//Are the two books alike? Create a function and Use Object methods to find out. 
// Change object values to test for non-alike objects
const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};



function areTheyAlike(obj1, obj2) {

obj1 = (JSON.stringify(obj1))
obj2 = (JSON.stringify(obj2))

console.log(Object.is(obj1, obj2))

}


areTheyAlike(book1, book2)

//=================================================================================================================================================================//
//=================================================================================================================================================================//


