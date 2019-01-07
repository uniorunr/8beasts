import template from './magic-spell.template';
import chooseTask from '../tasks/chooseTask';
import { pause, combinedMonsterName } from '../../utils';
import { battleState, LoadCanvas } from '../../screens/battle/start';
import { mnstrAdj, mnstrType, mnstrName } from '../../config';

class MagicSpell {
  static async start(heroName, monsterName) {
    LoadCanvas.load(heroName, monsterName);
    await pause(1500);
    MagicSpell.getSpell();
  }

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
          await MagicSpell.empty();
          await chooseTask(spell);
          if (battleState.monster.health && battleState.hero.health) {
            await MagicSpell.getSpell();
          } else if (!battleState.monster.health) {
            battleState.score.score += 1;
            await pause(2000);
            const playerName = sessionStorage.getItem('playerName');
            await LoadCanvas.load(playerName, combinedMonsterName(mnstrAdj, mnstrType, mnstrName));
            await pause(1500);
            await MagicSpell.getSpell();
          } else if (!battleState.hero.health) {
            console.log('hi mark'); // wip
          }
          resolve(spell);
        });
      });
    });
  }
}

export default MagicSpell;
