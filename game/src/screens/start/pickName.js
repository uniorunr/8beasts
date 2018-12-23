import template from './pickName.template';

class ChoosePlayerName {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
  }
}

export default ChoosePlayerName;
