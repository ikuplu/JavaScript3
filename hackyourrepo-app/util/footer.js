export default function createFooter() {
  const footer = document.createElement('footer');
  const headerFooter = document.createElement('p');
  headerFooter.innerText = 'HYF Repositories';
  footer.appendChild(headerFooter);
  document.body.appendChild(footer);
}