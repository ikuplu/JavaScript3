import { repoContributors, cardContainer } from './script.js';
import { arrContributors } from './getRepoInfo.js';

export default function createContributorsPaginated() {
  let currentPage = 1;
  let contributorsPerPage = 5;

  function numPages() {
    return Math.ceil(arrContributors.length / contributorsPerPage);
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      changePage(currentPage);
    }
  }

  function nextPage() {
    if (currentPage < numPages()) {
      currentPage++;
      changePage(currentPage);
    }
  }

  const setPage = event => {
    changePage(event.target.innerText);
  };

  function changePage(page) {
    cardContainer.innerHTML = '';
    currentPage = page;

    if (page < 1) {
      page = 1;
    }
    if (page > numPages()) {
      page = numPages();
    }

    for (
      let i = (page - 1) * contributorsPerPage;
      i < page * contributorsPerPage && i < arrContributors.length;
      i++
    ) {
      const imgContributor = document.createElement('img');
      const gitHubContributor = document.createElement('a');
      const numContribution = document.createElement('div');
      numContribution.setAttribute('class', 'num-contribution');
      const cardContributor = document.createElement('div');
      cardContributor.setAttribute('class', 'card card-contributor');

      imgContributor.src = arrContributors[i].avatar_url;
      gitHubContributor.textContent = arrContributors[i].login;
      gitHubContributor.href = arrContributors[i].url;
      numContribution.textContent = arrContributors[i].contributions;

      cardContributor.appendChild(imgContributor);
      cardContributor.appendChild(gitHubContributor);
      cardContributor.appendChild(numContribution);
      cardContainer.appendChild(cardContributor);
      repoContributors.appendChild(cardContainer);
    }

    const pageButtonContainer = document.createElement('div');
    pageButtonContainer.setAttribute('class', 'card card-button');
    const btnPrev = document.createElement('button');
    btnPrev.innerText = 'Prev';
    const btnPageOne = document.createElement('button');
    btnPageOne.innerText = '1';
    const btnPageTwo = document.createElement('button');
    btnPageTwo.innerText = '2';
    const btnPageThree = document.createElement('button');
    btnPageThree.innerText = '3';
    const btnPageFour = document.createElement('button');
    btnPageFour.innerText = '4';
    const btnPageFive = document.createElement('button');
    btnPageFive.innerText = '5';
    const btnNext = document.createElement('button');
    btnNext.innerText = 'Next';

    pageButtonContainer.appendChild(btnPrev);
    pageButtonContainer.appendChild(btnPageOne);
    pageButtonContainer.appendChild(btnPageTwo);
    pageButtonContainer.appendChild(btnPageThree);
    pageButtonContainer.appendChild(btnPageFour);
    pageButtonContainer.appendChild(btnPageFive);
    pageButtonContainer.appendChild(btnNext);
    cardContainer.appendChild(pageButtonContainer);

    btnPrev.addEventListener('click', prevPage);
    btnPageOne.addEventListener('click', setPage);
    btnPageTwo.addEventListener('click', setPage);
    btnPageThree.addEventListener('click', setPage);
    btnPageFour.addEventListener('click', setPage);
    btnPageFive.addEventListener('click', setPage);
    btnNext.addEventListener('click', nextPage);

    if (page === 1) {
      btnPrev.style.visibility = 'hidden';
      btnNext.style.visibility = 'hidden';
    }
    if (numPages() > 1 && page === numPages()) {
      btnPrev.style.visibility = 'visible';
      btnNext.style.visibility = 'hidden';
    } else {
      btnPrev.style.visibility = 'visible';
      btnNext.style.visibility = 'visible';
    }
  }

  changePage(1);
}
