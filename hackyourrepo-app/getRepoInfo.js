import logErrorMessage from './logErrorMessage.js';
import { cardContainer, repoContributors, selectRepo, repositoryInfo, descriptionInfo, forksInfo, updatedInfo } from './script.js';

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
      response.data.forEach(element => {
        const imgContributor = document.createElement('img');
        const gitHubContributor = document.createElement('a');
        const numContribution = document.createElement('div');
        numContribution.setAttribute('class', 'num-contribution');
        const cardContributor = document.createElement('div');
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
      logErrorMessage();
    });
}
