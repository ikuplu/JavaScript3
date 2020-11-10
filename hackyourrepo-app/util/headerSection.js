import { main, selectHeader } from '../script.js';

export default function createHeader() {
  const repoHeader = document.createElement('section');
  repoHeader.setAttribute('class', 'repo-header');
  const pTagHeader = document.createElement('p');
  pTagHeader.innerText = 'HYF Repositories';
  selectHeader.setAttribute('class', 'repo-titles');
  selectHeader.id = 'repo-select';
  repoHeader.appendChild(pTagHeader);
  repoHeader.appendChild(selectHeader);
  main.appendChild(repoHeader);
  document.body.appendChild(main);
}

