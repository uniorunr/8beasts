import template from './magic-spell.template';

class MagicSpell {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
  }
}

export default MagicSpell;
