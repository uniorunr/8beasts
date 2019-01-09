import template from './gameInfoButton.template';
import infoPopUp from './gameInfoPopUp.template';
import { keys } from '../../../config';

class GameInfo {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);

    document.querySelector('.game-info-button').addEventListener('click', () => {
      const popUp = document.querySelector('#gameInfoPopUp');
      if (!popUp) { GameInfo.drawInfoPopUp(); }
    });
  }

  static empty() {
    document.querySelector('.game-info-button').remove();
  }

  static drawInfoPopUp() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', infoPopUp);

    document.querySelector('#gameInfoPopUp .close').addEventListener('click', () => {
      GameInfo.emptyInfoPopUp();
    });

    document.addEventListener('keydown', (event) => {
      const closeButton = document.querySelector('#gameInfoPopUp .close');
      if (event.keyCode === keys.esc) {
        if (closeButton) {
          GameInfo.emptyInfoPopUp();
        }
      }
    });
  }

  static emptyInfoPopUp() {
    document.querySelector('#gameInfoPopUp').remove();
  }
}

export default GameInfo;
