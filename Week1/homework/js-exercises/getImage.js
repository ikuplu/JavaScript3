const url = 'https://xkcd.now.sh/?comic=latest';

//XMLHttpRequest
function getImageXML() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      const responseData = xhr.response;
      console.log(responseData.img);
      let image = document.createElement('img');
      image.src = responseData.img;
      document.body.appendChild(image);
    } else {
      console.log('HTTP Error ', xhr.status);
    }
  };

  xhr.onerror = function () {
    console.log(`Something went wrong!`);
  };

  xhr.open('GET', url);
  xhr.send();
}

getRandomImageXML();

//Axios
function getImageAxios() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response.data.img);
      let image = document.createElement('img');
      image.src = response.data.img;
      image.style.marginTop = '1rem';
      document.body.appendChild(image);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getRandomImageAxios();
