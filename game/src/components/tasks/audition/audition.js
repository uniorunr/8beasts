import 'babel-polyfill';
import template from './audition.template';
import { Task } from '../../../screens/battle/start';
import dictionary from '../dictionary.json';

class Audition extends Task {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
    const words = JSON.parse(JSON.stringify(dictionary));
    const index = Math.floor(Math.random() * words.englishWords.length);
    document.querySelector('#taskAudition .play-button')
      .setAttribute('data-id', index);
  }

  static empty() {
    document.querySelector('#taskAudition').remove();
  }

  static getAnswer() {
    Audition.draw();
    const input = document.querySelector('#taskAudition .tasks-dialog-answer');
    const submitButton = document.querySelector('#taskAudition .submit-button');
    const index = +document.querySelector('#taskAudition .play-button')
      .getAttribute('data-id');
    const playButton = document.querySelector('#taskAudition .play-button');
    const synth = window.speechSynthesis;
    const words = JSON.parse(JSON.stringify(dictionary));
    const rightAnswer = words.englishWords[index].word.toLowerCase();
    return new Promise((resolve) => {
      playButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const utterThis = new SpeechSynthesisUtterance(rightAnswer);
        utterThis.voice = synth.getVoices().find(element => element.lang === 'en-US');
        utterThis.rate = 0.6;
        synth.speak(utterThis);
      });
      submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const answer = input.value.toLowerCase();
        if (rightAnswer === answer) {
          Audition.empty();
          await Audition.win('heal');
          resolve(answer);
        } else {
          Audition.empty();
          await Audition.lose();
          resolve(answer);
        }
      });
      submitButton.addEventListener('mousedown', async () => {
        const answer = input.value.toLowerCase();
        if (rightAnswer !== answer) {
          input.classList.add('wrong-input');
        }
      });
      submitButton.addEventListener('mouseup', async () => {
        const answer = input.value.toLowerCase();
        if (rightAnswer !== answer) {
          input.classList.remove('wrong-input');
        }
      });
    });
  }
}

export default Audition;
