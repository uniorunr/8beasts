import template from './findExtra.template';
import { Task } from '../../../screens/battle/start';
import dictionary from '../dictionary.json';
import { shuffle } from '../../../utils';

class FindExtra extends Task {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
  }

  static empty() {
    document.querySelector('#taskFindExtra').remove();
  }

  static fillItems() {
    const words = JSON.parse(JSON.stringify(dictionary));
    const rightType = words.types[Math.floor(Math.random() * words.types.length)];
    const rightWords = [];
    const wrongWords = [];
    words.englishWords.forEach((element) => {
      if (element.type === rightType) rightWords.push(element.word);
    });
    words.englishWords.forEach((element) => {
      if (element.type !== rightType) wrongWords.push(element.word);
    });
    const tempRightWords = rightWords.slice();
    const wordsArr = [];
    wordsArr.push(wrongWords[Math.floor(Math.random() * wrongWords.length)]);
    for (let i = 0; i < 3; i += 1) {
      const word = tempRightWords[Math.floor(Math.random() * tempRightWords.length)];
      wordsArr.push(word);
      tempRightWords.splice(tempRightWords.indexOf(word), 1);
    }
    const wrongWord = wordsArr[0];
    const shuffleWordsArr = shuffle(wordsArr);
    shuffleWordsArr.forEach((element, i) => {
      document.querySelector(`#taskFindExtra .item${i + 1}`).value = element;
    });
    return wrongWord;
  }

  static getAnswer() {
    FindExtra.draw();
    const rightAnswer = FindExtra.fillItems();
    return new Promise((resolve) => {
      const buttons = document.querySelectorAll('#taskFindExtra .find-extra-item');
      buttons.forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          const answer = button.value;
          if (answer === rightAnswer) {
            FindExtra.empty();
            await FindExtra.win();
            resolve(answer);
          } else {
            FindExtra.empty();
            await FindExtra.lose();
            resolve(answer);
          }
        });
      });
    });
  }
}

export default FindExtra;
