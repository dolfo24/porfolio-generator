// Notice the lack of parentheses around the `profileDataArr` parameter?
const profileDataArgs = process.argv.slice(2);

// Using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
//   };
// Using new arrow function syntax
// const addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
//   };

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);