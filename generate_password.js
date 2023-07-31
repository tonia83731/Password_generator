// Sample a element in collection
function sample(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function generatePassword(options) {
  // console.log('This function will generate password')
  // define thins user might want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  // console.log(options);
  // dummy data
  // const options = {}

  // create a collection to store things user picked up
  let collection = [];
  let lowercaseArr = lowerCaseLetters.split("");
  let uppercaseArr = upperCaseLetters.split("");
  let numbersArr = numbers.split("");
  let symbolsArr = symbols.split("");

  if (options.lowercase === "on") {
    collection = collection.concat(lowercaseArr);
  }

  if (options.uppercase === "on") {
    collection = collection.concat(uppercaseArr);
  }

  if (options.numbers === "on") {
    collection = collection.concat(numbersArr);
  }

  if (options.symbols === "on") {
    collection = collection.concat(symbolsArr);
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter((char) => {
      return !options.excludeCharacters.includes(char);
      // if(options.excludeCharacters.includes(char)) return false
      // return true
    });
  }

  // return error notice if collection is empty
  if(collection.length === 0) return 'There is no valid characters in your selection'

  // start generating password
  // sample a elemnt in collection function here (moveout)
  let password = "";

  for (let i = 1; i <= options.length; i++) {
    password += sample(collection);
  }
  // return password
  return password;

  console.log("This function will generate password.");
}

// export generatePassword function for other files to use
// module.exports = generatePassword;
export default generatePassword
