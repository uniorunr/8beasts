import template from './chooseName.template';
import { keys } from '../../config';

class ChoosePlayerName {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);

    document.querySelector('.choose-player-name .close').addEventListener('click', () => {
      ChoosePlayerName.empty();
    });

    document.addEventListener('keydown', (event) => {
      const closeButton = document.querySelector('.choose-player-name .close');
      if (event.keyCode === keys.esc) {
        if (closeButton) {
          ChoosePlayerName.empty();
        }
      }
    });
  }

  static empty() {
    document.querySelector('#choosePlayerName').remove();
  }

  constructor() {
    this.localPlayerName = '';
  }

  static getNewPlayerName() {
    ChoosePlayerName.draw();

    const genericInput = document.querySelector('input[type="text"]');
    genericInput.focus();

    return new Promise((resolve) => {
      document.querySelector('#choosePlayerName .choose-name-form')
        .addEventListener('submit', (e) => {
          e.preventDefault();
          const playerName = document.querySelector('.choose-player-name .player-name').value;
          ChoosePlayerName.empty();
          sessionStorage.setItem('playerName', playerName);
          resolve(playerName);
        });
    });
  }
}

export default ChoosePlayerName;
