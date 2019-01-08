import template from './score.template';
import FireBase from '../../db/firebase';

class ScoreTable {
  static async draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);

    const scoreObj = await FireBase.getData();
    const usersArr = Object.keys(scoreObj);
    const scoresArr = Object.values(scoreObj);
    const merged = [];
    usersArr.forEach((item, index) => {
      merged.push([item, scoresArr[index]]);
    });
    merged.sort((a, b) => b[1] - a[1]);
    const table = document.querySelector('#scoreTable .score-table');

    merged.forEach((item) => {
      const [userName, userScore] = item;
      const row = document.createElement('tr');
      const name = document.createElement('td');
      const score = document.createElement('td');
      name.innerHTML = userName;
      score.innerHTML = userScore;
      row.appendChild(name);
      row.appendChild(score);
      table.appendChild(row);
    });

    document.querySelector('.score-section .close').addEventListener('click', async () => {
      ScoreTable.empty();
    });
  }

  static empty() {
    document.querySelector('#scoreTable').remove();
    window.location.reload();
  }
}

export default ScoreTable;
