import { repoContributors, headerContributors, main } from '../script.js';

export default function createContributorInfo() {
  repoContributors.setAttribute('class', 'repo-contributors');
  headerContributors.setAttribute('class', 'card');
  headerContributors.innerText = 'Contributors';
  repoContributors.appendChild(headerContributors);
  main.appendChild(repoContributors);
}