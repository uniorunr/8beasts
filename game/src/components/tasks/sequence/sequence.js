import template from './sequence.template';
import { Task } from '../../../screens/battle/start';

class Sequence extends Task {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
  }

  static empty() {
    document.querySelector('#taskSequence').remove();
  }

  static fillSequence() {
    const first = Math.floor(Math.random() * 70);
    const dFirst = Math.floor(Math.random() * 25);
    let currSum = first;
    document.querySelector('.tasks-dialog .item1').innerHTML = first;
    currSum += dFirst;
    document.querySelector('.tasks-dialog .item2').innerHTML = currSum;
    currSum += dFirst;
    document.querySelector('.tasks-dialog .item3').innerHTML = currSum;
    currSum += dFirst;
    return currSum;
  }

  static getAnswer() {
    Sequence.draw();
    Sequence.focusOnImput();
    const input = document.querySelector('#taskSequence .tasks-dialog-answer');
    input.focus();
    const submitButton = document.querySelector('#taskSequence .submit-button');
    const rightAnswer = Sequence.fillSequence();
    return new Promise((resolve) => {
      submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const answer = +input.value;
        if (+answer === rightAnswer) {
          Sequence.empty();
          await Sequence.win('heal');
          resolve(answer);
        } else {
          Sequence.empty();
          await Sequence.lose();
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

export default Sequence;
