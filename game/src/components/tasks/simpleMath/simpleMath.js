import template from './simpleMath.template';
import { pause } from '../../../utils';
import { battleState } from '../../../screens/battle/start';
import { simpleMathOperators } from '../../../config';

const args = () => {
  const resultArr = [];
  const operator = simpleMathOperators[Math.floor(Math.random() * 3)];
  if (operator === '+' || operator === '-') {
    resultArr.push(Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1);
  } else if (operator === '*') {
    resultArr.push(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
  }
  resultArr.sort((a, b) => b - a);
  resultArr.push(operator);
  return resultArr;
};

const calculation = (operand1, operand2, operator) => {
  let result = null;
  if (operator === '+') {
    result = operand1 + operand2;
  } else if (operator === '-') {
    result = operand1 - operand2;
  } else if (operator === '*') {
    result = operand1 * operand2;
  }
  return result;
};

class SimpleMath {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
    const [operand1, operand2, operator] = args();
    document.querySelector('#taskSimpleMath .operand1').innerHTML = operand1;
    document.querySelector('#taskSimpleMath .operand2').innerHTML = operand2;
    document.querySelector('#taskSimpleMath .operator').innerHTML = operator;
  }

  static empty() {
    document.querySelector('#taskSimpleMath').remove();
  }

  static getAnswer() {
    SimpleMath.draw();
    const input = document.querySelector('#taskSimpleMath .tasks-dialog-answer');
    const submitButton = document.querySelector('#taskSimpleMath .submit-button');
    const operand1 = +document.querySelector('#taskSimpleMath .operand1').innerHTML;
    const operand2 = +document.querySelector('#taskSimpleMath .operand2').innerHTML;
    const operator = document.querySelector('#taskSimpleMath .operator').innerHTML;
    const rightAnswer = calculation(operand1, operand2, operator);
    return new Promise((resolve) => {
      submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const answer = +input.value;
        if (+answer === rightAnswer) {
          SimpleMath.empty();
          await pause(1000);
          battleState.hero.attack();
          await pause(1500);
          battleState.monsterHealth.damage();
          battleState.monster.damage();
          battleState.monster.heal();
          await pause(2000);
          resolve(answer);
        }
      });
      submitButton.addEventListener('mousedown', async () => {
        const answer = +input.value;
        if (+answer !== rightAnswer) {
          input.classList.add('wrong-input');
        }
      });
      submitButton.addEventListener('mouseup', async () => {
        const answer = +input.value;
        if (+answer !== rightAnswer) {
          input.classList.remove('wrong-input');
        }
      });
    });
  }
}

export default SimpleMath;
