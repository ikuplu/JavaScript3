'use strict';

// const { doc } = require("prettier");

import createHeader from './util/headerSection.js';
import createRepoInfo from './util/repoInfoSection.js';
import createContributorInfo from './util/contributorInfoSection.js';
import createFooter from './util/footer.js';
import populateSelect from './util/populateSelectTag.js';
import getRepoInfo from './util/getRepoInfo.js';

export const main = document.createElement('main');
export const selectHeader = document.createElement('select');
export const repoInfo = document.createElement('section');
export const repoContributors = document.createElement('section');
export const headerContributors = document.createElement('p');
export const cardContainer = document.createElement('div');

// Creator functions for sections
createHeader();
createRepoInfo();
createContributorInfo();
createFooter();

// Repository info cells
export const selectRepo = document.getElementById('repo-select');
export const repositoryInfo = document.getElementById('repo-name');
export const descriptionInfo = document.getElementById('repo-description');
export const forksInfo = document.getElementById('repo-forks');
export const updatedInfo = document.getElementById('repo-updates');

const mainFunc = () => {
  populateSelect();
  selectRepo.addEventListener('change', getRepoInfo);
};

window.onload = mainFunc();
