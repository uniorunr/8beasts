import template from './magic-spell.template';
import chooseTask from '../tasks/chooseTask';
import { battleState } from '../../screens/battle/start';

class MagicSpell {
  static draw() {
    const element = document.querySelector('.container');
    element.insertAdjacentHTML('afterbegin', template);
  }

  static empty() {
    document.querySelector('#magicSpell').remove();
  }

  static getSpell() {
    MagicSpell.draw();
    return new Promise((resolve) => {
      const buttons = document.querySelectorAll('#magicSpell .spell-button');
      buttons.forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          const spell = button.value;
          resolve(spell);
          await MagicSpell.empty();
          await chooseTask(spell);
          if (battleState.monster.health) {
            await MagicSpell.getSpell();
          }
        });
      });
    });
  }
}

export default MagicSpell;
