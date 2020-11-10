import logErrorMessage from './logErrorMessage.js';
import {cardContainer, repoContributors, selectRepo, repositoryInfo, descriptionInfo, forksInfo, updatedInfo } from '../script.js';
import createContributorsPaginated from './paginateContributors.js';

export let arrContributors;
export default function getRepoInfo() {
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
      arrContributors = response.data;
      createContributorsPaginated();
    })
    .catch(() => {
      logErrorMessage();
    });
}
