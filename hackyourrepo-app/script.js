'use strict';

// const { doc } = require("prettier");

/*
  Write here your JavaScript for HackYourRepo!
*/

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
