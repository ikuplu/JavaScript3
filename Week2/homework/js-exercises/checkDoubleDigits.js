const checkDoubleDigits = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("The number is bigger than 10!");
    }
    if (num < 10) {
      reject("Error! The number is smaller than 10...");
    }
  })
}

checkDoubleDigits(8)
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
});


checkDoubleDigits(15)
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
});