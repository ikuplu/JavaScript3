'use strict';

// const { doc } = require("prettier");

//First section
const main = document.createElement('main');
const repoHeader = document.createElement('section');
repoHeader.setAttribute('class', 'repo-header');
const pTagHeader = document.createElement('p');
pTagHeader.innerText = 'HYF Repositories';
const selectHeader = document.createElement('select');
selectHeader.setAttribute('class', 'repo-titles');
selectHeader.id = 'repo-select';
repoHeader.appendChild(pTagHeader);
repoHeader.appendChild(selectHeader);
main.appendChild(repoHeader);
document.body.appendChild(main);
//First section ends

//Second section
const repoInfo = document.createElement('section');
repoInfo.setAttribute('class', 'card repo-info');
const infoContainer = document.createElement('div');
infoContainer.setAttribute('class', 'repo-info-container');
const table = document.createElement('table');

const tableRowOne = document.createElement('tr');
let dataOne = document.createElement('td');
dataOne.innerText = 'Repository:';
let dataTwo = document.createElement('td');
dataTwo.innerHTML = '<a href=""></a>';
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
repoContributors.setAttribute('class', 'repo-contributors');
let headerContributors = document.createElement('p');
headerContributors.setAttribute('class', 'card');
headerContributors.innerText = 'Contributors';
let cardContainer = document.createElement('div');
repoContributors.appendChild(headerContributors);
main.appendChild(repoContributors);
//Third section ends

//Footer
const footer = document.createElement('footer');
let headerFooter = document.createElement('p');
headerFooter.innerText = 'HYF Repositories';
footer.appendChild(headerFooter);
document.body.appendChild(footer);
//Footer ends

function errorMessage() {
  repoInfo.style.display = 'none';
  repoContributors.style.display = 'none';
  selectRepo.style.display = 'none';
  const errorMessage = document.createElement('p');
  errorMessage.innerText = 'Network request failed';
  errorMessage.style.background = 'rgb(248, 215, 218)';
  errorMessage.style.padding = '1rem 1rem';
  main.appendChild(errorMessage);
}

function populateSelect() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      jsonData.map(repo => {
        let opt = document.createElement('option');
        opt.innerText = repo.name;
        selectHeader.appendChild(opt);
      });
    })
    .catch(() => {
      errorMessage();
    });
}

//Repository information cells
const selectRepo = document.getElementById('repo-select');
let repositoryInfo = document.querySelector('td a');
let descriptionInfo = document.getElementsByTagName('td')[3];
let forksInfo = document.getElementsByTagName('td')[5];
let updatedInfo = document.getElementsByTagName('td')[7];

function getRepoInfo() {
  const reposUrl =
    'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  let contributorsUrl;
  cardContainer.innerHTML = '';

  axios
    .get(reposUrl)
    .then(response => {
      response.data.forEach(element => {
        if (element.name === selectRepo.value) {
          repositoryInfo.textContent = element.html_url;
          repositoryInfo.href = element.html_url;
          repositoryInfo.target = '_blank';
          descriptionInfo.textContent = element.description;
          forksInfo.textContent = element.forks_count;
          updatedInfo.textContent = element.updated_at;
          contributorsUrl = element.contributors_url;
        }
      });
      return axios.get(contributorsUrl);
    })
    .then(response => {
      response.data.forEach(element => {
        let imgContributor = document.createElement('img');
        let gitHubContributor = document.createElement('a');
        let numContribution = document.createElement('div');
        numContribution.setAttribute('class', 'num-contribution');
        let cardContributor = document.createElement('div');
        cardContributor.setAttribute('class', 'card card-contributor');

        imgContributor.src = element.avatar_url;
        gitHubContributor.textContent = element.login;
        gitHubContributor.href = element.url;
        numContribution.textContent = element.contributions;

        cardContributor.appendChild(imgContributor);
        cardContributor.appendChild(gitHubContributor);
        cardContributor.appendChild(numContribution);
        cardContainer.appendChild(cardContributor);
        repoContributors.appendChild(cardContainer);
      });
    })
    .catch(() => {
      errorMessage();
    });
}

const mainFunc = () => {
  populateSelect();
  selectRepo.addEventListener('change', getRepoInfo);
};

window.onload = mainFunc();
