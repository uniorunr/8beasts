import 'babel-polyfill';
import template from './translation.template';
import { pause } from '../../../utils';
import { battleState } from '../../../screens/battle/start';
import dictionary from './dictionary.json';

class Translation {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
    const words = JSON.parse(JSON.stringify(dictionary));
    const index = Math.floor(Math.random() * words.englishWords.length);
    document.querySelector('#taskTranslation .word-to-translate .word')
      .innerHTML = words.englishWords[index].word;
    document.querySelector('#taskTranslation .word-to-translate .word')
      .setAttribute('data-id', index);
  }

  static empty() {
    document.querySelector('#taskTranslation').remove();
  }

  static getAnswer() {
    Translation.draw();
    const input = document.querySelector('#taskTranslation .tasks-dialog-answer');
    const submitButton = document.querySelector('#taskTranslation .submit-button');
    const index = +document.querySelector('#taskTranslation .word-to-translate .word')
      .getAttribute('data-id');
    const words = JSON.parse(JSON.stringify(dictionary));
    const rightAnswerArr = words.englishWords[index].translation;
    rightAnswerArr.map(item => item.toLowerCase());
    return new Promise((resolve) => {
      submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const answer = input.value.toLowerCase();
        if (rightAnswerArr.includes(answer)) {
          Translation.empty();
          await pause(1000);
          battleState.hero.attack();
          await pause(1500);
          battleState.monsterHealth.damage();
          battleState.monster.damage();
          if (battleState.monster.health !== 0) {
            battleState.monster.heal();
          } else {
            battleState.monster.death();
          }
          battleState.tips.currTip = battleState
            .tips.winTips[Math.floor(Math.random() * battleState.tips.winTips.length)];
          await pause(2000);
          resolve(answer);
        }
      });
      submitButton.addEventListener('mousedown', async () => {
        const answer = input.value.toLowerCase();
        if (!rightAnswerArr.includes(answer)) {
          input.classList.add('wrong-input');
        }
      });
      submitButton.addEventListener('mouseup', async () => {
        const answer = input.value.toLowerCase();
        if (!rightAnswerArr.includes(answer)) {
          input.classList.remove('wrong-input');
        }
      });
    });
  }
}

export default Translation;
