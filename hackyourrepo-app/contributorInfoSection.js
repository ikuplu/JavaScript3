import { repoContributors, headerContributors, main } from './script.js';

export default function createContributorInfo() {
  // export const repoContributors = document.createElement('section');
  repoContributors.setAttribute('class', 'repo-contributors');
  // headerContributors = document.createElement('p');
  headerContributors.setAttribute('class', 'card');
  headerContributors.innerText = 'Contributors';
  // export const cardContainer = document.createElement('div');
  repoContributors.appendChild(headerContributors);
  main.appendChild(repoContributors);
}