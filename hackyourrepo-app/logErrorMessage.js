export function logErrorMessage() {
  repoInfo.style.display = 'none';
  repoContributors.style.display = 'none';
  selectRepo.style.display = 'none';
  const errorMessage = document.createElement('p');
  errorMessage.innerText = 'Network request failed';
  errorMessage.style.background = 'rgb(248, 215, 218)';
  errorMessage.style.padding = '1rem 1rem';
  main.appendChild(errorMessage);
}
