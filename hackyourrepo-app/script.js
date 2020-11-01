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

const optionOne = document.createElement('option');
optionOne.innerText = '--Choose a repository--';
selectHeader.appendChild(optionOne);

const optionTwo = document.createElement('option');
optionTwo.innerText = 'SampleRepo1';
selectHeader.appendChild(optionTwo);

const optionThree = document.createElement('option');
optionThree.innerText = 'AndAnotherOne';
selectHeader.appendChild(optionThree);

const optionFour = document.createElement('option');
optionFour.innerText = 'HYF-Is-The-Best';
selectHeader.appendChild(optionFour);

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
 


const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

const selectRepo = document.getElementById('repo-select');

let repositoryInfo = document.querySelector('td a');
let descriptionInfo = document.getElementsByTagName('td')[3];
let forksInfo = document.getElementsByTagName('td')[5];
let updatedInfo = document.getElementsByTagName('td')[7];

selectRepo.addEventListener('change', () => {
  if (selectRepo.value === 'SampleRepo1') {
    repositoryInfo.textContent = placeholderRepos[0].name;
    descriptionInfo.textContent = placeholderRepos[0].description;
    forksInfo.textContent = placeholderRepos[0].forks;
    updatedInfo.textContent = placeholderRepos[0].updated;
  }
  if (selectRepo.value === 'AndAnotherOne') {
    repositoryInfo.textContent = placeholderRepos[1].name;
    descriptionInfo.textContent = placeholderRepos[1].description;
    forksInfo.textContent = placeholderRepos[1].forks;
    updatedInfo.textContent = placeholderRepos[1].updated;
  }
  if (selectRepo.value === 'HYF-Is-The-Best') {
    repositoryInfo.textContent = placeholderRepos[2].name;
    descriptionInfo.textContent = placeholderRepos[2].description;
    forksInfo.textContent = placeholderRepos[2].forks;
    updatedInfo.textContent = placeholderRepos[2].updated;
  }
});



