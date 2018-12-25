import template from './magic-spell.template';

class MagicSpell {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
  }

  static empty() {
    document.querySelector('#magicSpell').remove();
  }
}

export default MagicSpell;
