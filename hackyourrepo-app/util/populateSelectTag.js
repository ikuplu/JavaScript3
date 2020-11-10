import logErrorMessage from './logErrorMessage.js';
import { selectHeader } from '../script.js';

export default function populateSelect() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
      jsonData.map(repo => {
        const opt = document.createElement('option');
        opt.innerText = repo.name;
        selectHeader.appendChild(opt);
      });
    })
    .catch(() => {
      logErrorMessage();
    });
}
