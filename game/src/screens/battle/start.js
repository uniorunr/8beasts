import 'babel-polyfill';
import Wizard from '../../img/wizard_sprite.png';
import Minotaur from '../../img/minotaur_sprite.png';
import {
  Canvas, Character, Health, Score, Tips,
} from '../../components/canvas/canvasinit';
import { genericTips, winTips, loseTips } from '../../config';
import LandingPage from '../home/home';
import { pause } from '../../utils';

const battleState = {};

class Task {
  static async win() {
    await pause(1000);
    battleState.hero.attack();
    await pause(1500);
    battleState.monsterHealth.damage();
    battleState.monster.damage();
    if (battleState.monster.health !== 0) {
      battleState.monster.heal();
    } else {
      battleState.monster.death();
    }
    battleState.tips.currTip = battleState
      .tips.winTips[Math.floor(Math.random() * battleState.tips.winTips.length)];
    await pause(2000);
  }
}

const loadCanvas = (heroName, monsterName) => {
  LandingPage.empty();
  Canvas.draw();

  const canvas = document.getElementById('canvas');
  canvas.width = ((window.innerWidth / 10).toFixed(0) - 3) * 10;
  canvas.height = ((window.innerHeight / 10).toFixed(0) - 3) * 10;

  const hero = new Character(heroName, 100, 1280, 1280,
    10, 10, 0, 10, Wizard, 0, 0, 6, 'idle', 0.25, 0.5);
  const heroHealth = new Health(heroName, hero.health,
    [0, 0, 300, 70], [40, 60, 300, 10], [40, 45]);
  battleState.hero = hero;
  battleState.heroHealth = heroHealth;

  const monster = new Character(monsterName, 100, 1920, 960,
    5, 10, 0, 10, Minotaur, 0, 0, 6, 'idle', 0.75, 2 / 3);
  const monsterHealth = new Health(monsterName, monster.health,
    [canvas.width - 340, 0, canvas.width, 70],
    [canvas.width - 340, 60, 300, 10],
    [canvas.width - 340, 45]);
  battleState.monster = monster;
  battleState.monsterHealth = monsterHealth;

  const tips = new Tips(
    genericTips,
    winTips,
    loseTips,
    [40, canvas.height - 80, canvas.width, 60],
    [40, canvas.height - 40],
  );
  battleState.tips = tips;

  const score = new Score(0, [canvas.width / 2 - 70, 30, 110, 30], [canvas.width / 2 - 70, 45]);
  battleState.score = score;

  setInterval(monster.draw.bind(monster), 1000 / monster.fps);
  setInterval(hero.draw.bind(hero), 1000 / hero.fps);
  setInterval(heroHealth.draw.bind(heroHealth), 1000 / 50);
  setInterval(monsterHealth.draw.bind(monsterHealth), 1000 / 50);
  setInterval(tips.draw.bind(tips), 1000 / 50);
  setInterval(score.draw.bind(score), 1000 / 50);
};

export { loadCanvas, battleState, Task };
