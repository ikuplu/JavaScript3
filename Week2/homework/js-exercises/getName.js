// Rewrite this function, but replace the callback syntax with the Promise syntax:
// Have the getAnonName function return a new Promise that uses the firstName parameter
// If the Promise resolves, pass the full name as an argument to resolve with
// If the Promise rejects, pass an error as the argument to reject with: "You didn't pass in a first name!"


const getAnonName = (firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fullName = `${firstName} Doe`;
      resolve(fullName);
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
      }
  }, 2000);
});
});

getAnonName('John')
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});