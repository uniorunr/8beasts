import template from './magic-spell.template';
import chooseTask from '../tasks/chooseTask';
import { pause, combinedMonsterName } from '../../utils';
import { battleState, LoadCanvas } from '../../screens/battle/start';
import {
  mnstrAdj, mnstrType, mnstrName, keys,
} from '../../config';
import FireBase from '../../db/firebase';
import ScoreTable from '../../screens/score/score';

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
    MagicSpell.keybordControl();
    const playerName = sessionStorage.getItem('playerName');
    return new Promise((resolve) => {
      const buttons = document.querySelectorAll('#magicSpell .spell-button');
      buttons.forEach((button) => {
        button.addEventListener('click', async (e) => {
          e.preventDefault();
          const spell = button.value;
          MagicSpell.empty();
          await chooseTask(spell);
          if (battleState.monster.health && battleState.hero.health) {
            await MagicSpell.getSpell();
          } else if (!battleState.monster.health) {
            battleState.score.score += 1;
            await pause(2000);
            await LoadCanvas.load(playerName, combinedMonsterName(mnstrAdj, mnstrType, mnstrName));
            await pause(1500);
            await MagicSpell.getSpell();
          } else if (!battleState.hero.health) {
            if (battleState.score.score) {
              await FireBase.setUser(playerName, battleState.score.score);
            }
            await ScoreTable.draw(await ScoreTable.getDBData());
          }
          resolve(spell);
        });
      });
    });
  }

  static keybordControl() {
    document.addEventListener('keydown', (event) => {
      if (document.querySelector('.spell-button')) {
        switch (event.keyCode) {
          case keys.key1:
            document.querySelector('.spell-button.attack0').focus();
            break;
          case keys.key2:
            document.querySelector('.spell-button.heal0').focus();
            break;
          case keys.key3:
            document.querySelector('.spell-button.attack1').focus();
            break;
          case keys.key4:
            document.querySelector('.spell-button.heal1').focus();
            break;
          case keys.key5:
            document.querySelector('.spell-button.attack2').focus();
            break;
          case keys.key6:
            document.querySelector('.spell-button.heal2').focus();
            break;
          default:
        }
      }
    });
  }
}

export default MagicSpell;
