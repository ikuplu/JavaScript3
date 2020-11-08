const header = document.createElement('h1');
header.innerText = 'TRIVIA GAME';
document.body.appendChild(header);

const instruction = document.createElement('h4');
instruction.innerText =
  'Try your best to figure out the answer. If you really have no clue, click on the question!';
document.body.appendChild(instruction);

const list = document.createElement('ul');
document.body.appendChild(list);

async function setNewGame() {
  try {
    const url = 'https://opentdb.com/api.php?amount=5';
    const fetchedData = await fetch(url);
    const jsonData = await fetchedData.json();
    return await jsonData.results.forEach(element => {
      let item = document.createElement('li');
      let ask = document.createElement('p');
      let answer = document.createElement('p');
      ask.innerHTML = element.question;
      answer.innerHTML = element.correct_answer;
      answer.setAttribute('class', 'answer-hide');
      item.appendChild(ask);
      item.appendChild(answer);
      list.appendChild(item);
      const showAnswer = () => {
        if (answer.className === 'answer-hide') {
          answer.setAttribute('class', 'answer-show');
        } else {
          answer.setAttribute('class', 'answer-hide');
        }
      };

      item.addEventListener('click', showAnswer);
    });
  } catch (err) {
    console.log(err);
  }
}

const button = document.createElement('button');
button.innerText = `Let's start!`;
document.body.appendChild(button);
const startGame = () => {
  list.innerHTML = '';
  setNewGame();
};

button.addEventListener('click', startGame);
window.onload = startGame();
