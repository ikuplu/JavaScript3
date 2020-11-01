'use strict';

// const { doc } = require("prettier");

//First section
const main = document.createElement('main');
const repoHeader = document.createElement('section');
repoHeader.setAttribute("class", "repo-header");
const pTagHeader = document.createElement('p');
pTagHeader.innerText = 'HYF Repositories';
const selectHeader = document.createElement('select');
selectHeader.setAttribute("class", "repo-titles");
selectHeader.id = 'repo-select';



repoHeader.appendChild(pTagHeader);
repoHeader.appendChild(selectHeader);
main.appendChild(repoHeader);
document.body.appendChild(main);
//First section ends

//Second section
const repoInfo = document.createElement('section');
repoInfo.setAttribute("class", "repo-info");
const infoContainer = document.createElement('div');
infoContainer.setAttribute("class", "card repo-info-container");
const table = document.createElement('table');

const tableRowOne = document.createElement('tr');
let dataOne = document.createElement('td');
dataOne.innerText = 'Repository:';
let dataTwo = document.createElement('td');
dataTwo.innerHTML = '<a href="#"></a>';
tableRowOne.appendChild(dataOne);
tableRowOne.appendChild(dataTwo);

const tableRowTwo = document.createElement('tr');
let dataThree = document.createElement('td');
dataThree.innerText = 'Description:';
let dataFour = document.createElement('td');
tableRowTwo.appendChild(dataThree);
tableRowTwo.appendChild(dataFour);

const tableRowThree = document.createElement('tr');
let dataFive = document.createElement('td');
dataFive.innerText = 'Forks:';
let dataSix = document.createElement('td');
tableRowThree.appendChild(dataFive);
tableRowThree.appendChild(dataSix);

const tableRowFour = document.createElement('tr');
let dataSeven = document.createElement('td');
dataSeven.innerText = 'Updated:';
let dataEight = document.createElement('td');
tableRowFour.appendChild(dataSeven);
tableRowFour.appendChild(dataEight);

table.appendChild(tableRowOne);
table.appendChild(tableRowTwo);
table.appendChild(tableRowThree);
table.appendChild(tableRowFour);
infoContainer.appendChild(table);
repoInfo.appendChild(infoContainer);
main.appendChild(repoInfo);
//Second section ends

//Third section
const repoContributors = document.createElement('section');
repoContributors.setAttribute("class", "repo-contributors");
let headerContributors = document.createElement('p');
headerContributors.setAttribute("class", "card");
headerContributors.innerText = "Contributors";
let cardContributor = document.createElement('div');
cardContributor.setAttribute("class", "card card-contributor");
let imgContributor = document.createElement('img');
imgContributor.src = "https://avatars0.githubusercontent.com/u/15912395?v=4";
let gitHubContributor = document.createElement('a');
gitHubContributor.href = "https://github.com/gijscor";
gitHubContributor.innerText = "gijscor";
let numContribution = document.createElement('div');
numContribution.setAttribute("class", "num-contribution");
numContribution.innerText = "10";

cardContributor.appendChild(imgContributor);
cardContributor.appendChild(gitHubContributor);
cardContributor.appendChild(numContribution);
repoContributors.appendChild(headerContributors);
repoContributors.appendChild(cardContributor);
main.appendChild(repoContributors);
//Third section ends

//Footer
const footer = document.createElement('footer');
let headerFooter = document.createElement('p');
headerFooter.innerText = "HYF Repositories";
footer.appendChild(headerFooter);
document.body.appendChild(footer);
//Footer ends

function populateSelect() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  fetch(url)
  .then(response => {
    console.log(response);
    if(response.ok) {
      return response.json();
    } 
    else {
      throw "HTTP ERROR";
    }
  })
  .then(jsonData => {
    const repos = jsonData.map(repo => {
    let opt = document.createElement('option');
    opt.innerText = repo.name;
    selectHeader.appendChild(opt);
    });
  })
  .catch(error => {
    console.log(`${error} Something went wrong!`);
  });
}

window.onload = populateSelect();

//Repository information cells
const selectRepo = document.getElementById('repo-select');
let repositoryInfo = document.querySelector('td a');
let descriptionInfo = document.getElementsByTagName('td')[3];
let forksInfo = document.getElementsByTagName('td')[5];
let updatedInfo = document.getElementsByTagName('td')[7];


selectRepo.addEventListener('change', () => {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  fetch(url)
  .then(response => {
    console.log(response);
    if(response.ok) {
      return response.json();
    } 
    else {
      throw "HTTP ERROR";
    }
  })
  .then(jsonData => {
    jsonData.map(element => {
      if (element.name === selectRepo.value) {
        repositoryInfo.textContent = element.name;
        descriptionInfo.textContent = element.description;
        forksInfo.textContent = element.forks_count;
        updatedInfo.textContent = element.updated_at;
      }
    })
  })
  .catch(error => {
    console.log(error);
  });
})





