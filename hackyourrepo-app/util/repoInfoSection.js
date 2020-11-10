import { repoInfo, main } from '../script.js';

export default function createRepoInfo() {
  repoInfo.setAttribute('class', 'card repo-info');
  const infoContainer = document.createElement('div');
  infoContainer.setAttribute('class', 'repo-info-container');
  const table = document.createElement('table');
  
  const tableRowOne = document.createElement('tr');
  let dataOne = document.createElement('td');
  dataOne.innerText = 'Repository:';
  let dataTwo = document.createElement('td');
  dataTwo.innerHTML = '<a href="" id="repo-name"></a>';
  tableRowOne.appendChild(dataOne);
  tableRowOne.appendChild(dataTwo);
  
  const tableRowTwo = document.createElement('tr');
  let dataThree = document.createElement('td');
  dataThree.innerText = 'Description:';
  let dataFour = document.createElement('td');
  dataFour.id = "repo-description";
  tableRowTwo.appendChild(dataThree);
  tableRowTwo.appendChild(dataFour);
  
  const tableRowThree = document.createElement('tr');
  let dataFive = document.createElement('td');
  dataFive.innerText = 'Forks:';
  let dataSix = document.createElement('td');
  dataSix.id = "repo-forks";
  tableRowThree.appendChild(dataFive);
  tableRowThree.appendChild(dataSix);
  
  const tableRowFour = document.createElement('tr');
  let dataSeven = document.createElement('td');
  dataSeven.innerText = 'Updated:';
  let dataEight = document.createElement('td');
  dataEight.id = "repo-updates";
  tableRowFour.appendChild(dataSeven);
  tableRowFour.appendChild(dataEight);
  
  table.appendChild(tableRowOne);
  table.appendChild(tableRowTwo);
  table.appendChild(tableRowThree);
  table.appendChild(tableRowFour);
  infoContainer.appendChild(table);
  repoInfo.appendChild(infoContainer);
  main.appendChild(repoInfo);
  
}
