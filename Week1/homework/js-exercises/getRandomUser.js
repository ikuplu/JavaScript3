const url = 'https://www.randomuser.me/api';

//XMLHttpRequest
function getRandomUserXML() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      const data = xhr.response;
      console.log(`Title: ${data.results[0].name.title}`);
      console.log(`Name: ${data.results[0].name.first}`);
      console.log(`Surname: ${data.results[0].name.last}`);
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

getRandomUserXML();

//Axios
function getRandomUserAxios() {
  axios
    .get(url)
    .then(function (response) {
      console.log(`Title: ${response.data.results[0].name.title}`);
      console.log(`Name: ${response.data.results[0].name.first}`);
      console.log(`Surname: ${response.data.results[0].name.last}`);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getRandomUserAxios();
