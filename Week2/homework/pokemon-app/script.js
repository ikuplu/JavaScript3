const getPokemonBtn = document.createElement('button');
const selectMenu = document.createElement('select');
getPokemonBtn.textContent = 'Get Pokemon!';
getPokemonBtn.style.width = '10rem';
getPokemonBtn.style.height = '2rem';
getPokemonBtn.style.fontSize = '1rem';
getPokemonBtn.style.cursor = 'pointer';
getPokemonBtn.style.margin = '1rem 1rem';
getPokemonBtn.style.borderRadius = '5px';
selectMenu.style.padding = '0.2rem 0.5rem';
selectMenu.style.display = 'block';
selectMenu.style.margin = '0.5rem 1rem';
const image = document.createElement('img');
image.style.display = 'block';
image.style.margin = '2rem 2rem';
image.style.width = '10rem';
image.style.height = 'auto';
document.body.appendChild(getPokemonBtn);
document.body.appendChild(selectMenu);

const fetchData = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';
  fetch(url)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(jsonData => {
      const result = jsonData.results;
      console.log(result);
      return result;
    })
    .then(result => {
      result.forEach(element => {
        let opt = document.createElement('option');
        opt.textContent = element.name;
        selectMenu.appendChild(opt);
      });
    })
    .catch(error => {
      console.log(error);
    });
};

const addPokemonToDom = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      const result = jsonData.results;
      result.forEach(element => {
        if (element.name === selectMenu.value) {
          const newUrl = element.url;
          fetch(newUrl)
            .then(response => {
              return response.json();
            })
            .then(jsonData => {
              image.src = jsonData.sprites.front_default;
              document.body.appendChild(image);
            });
        }
      });
    });
};

const main = () => {
  getPokemonBtn.addEventListener('click', fetchData);
  selectMenu.addEventListener('change', addPokemonToDom);
};

window.onload = main();
