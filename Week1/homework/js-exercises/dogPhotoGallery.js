const url = "https://dog.ceo/api/breeds/image/random";
dogXML = document.getElementById('dog-xml');
dogXML.style.padding = '1rem 3rem';
dogXML.style.margin = '2rem 2rem';
dogXML.style.fontSize = '2rem';
dogAxios = document.getElementById('dog-axios');
dogAxios.style.padding = '1rem 3rem';
dogAxios.style.margin = '2rem 1rem';
dogAxios.style.fontSize = '2rem';
dogList = document.getElementById('dog-list');

//XMLHttpRequest
function getDogImageXML() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  
  xhr.onload = function() {
    if(xhr.status >= 200 && xhr.status < 400) {
      const responseData = xhr.response;
      let dogImage = document.createElement('img');
      let dogItem = document.createElement('li');
      dogImage.src = responseData.message;
      dogItem.appendChild(dogImage);
      dogList.appendChild(dogItem);
      
    } else {
      console.log("HTTP Error ", xhr.status);
    }
  }
  
  xhr.onerror = function() {
    console.log(`Something went wrong!`);
  }
  
  xhr.open("GET", url);
  xhr.send();
}

dogXML.addEventListener('click', getDogImageXML);   


//Axios
function getDogImageAxios() {
  axios.get(url)
  .then(function (response) {
    let dogImage = document.createElement('img');
    let dogItem = document.createElement('li');
    dogImage.src = response.data.message;
    dogItem.appendChild(dogImage);
    dogList.appendChild(dogItem);
})
  .catch(function (error) {
    console.log(error);
  })
}

dogAxios.addEventListener('click', getDogImageAxios);   


