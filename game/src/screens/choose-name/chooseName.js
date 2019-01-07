import template from './chooseName.template';

class ChoosePlayerName {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
    document.querySelector('.choose-player-name .close').addEventListener('click', () => {
      ChoosePlayerName.empty();
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
