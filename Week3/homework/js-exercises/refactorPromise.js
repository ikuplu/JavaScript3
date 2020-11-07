// Exercise A
async function getData(url) {
  try {
  const fetched = await fetch(url);
  const parsed = await fetched.json();
  return console.log(parsed);
  } catch(error) {
    console.log(error);
  }
}

getData('https://randomfox.ca/floof/');



// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

async function makeAllCaps(array) {
  
  try {
    let capsArray = array.map(word => {
      return word.toUpperCase();
    });
    const arrUpperCased = await capsArray;
    console.log(arrUpperCased);
    return arrUpperCased;
  } 
  catch {
    console.log('Error: Not all items in the array are strings!');
  }
}
  
makeAllCaps(arrayOfWords);






