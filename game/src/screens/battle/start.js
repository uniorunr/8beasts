import Wizard from '../../img/wizard_sprite.png';
import Minotaur from '../../img/minotaur_sprite.png';
import {
  Canvas, Character, Health, Score, Tips,
} from '../../components/canvas/canvasinit';
import { genericTips, winTips, loseTips } from '../../components/config';
import LandingPage from '../home/home';

const loadCanvas = (heroName) => {
  LandingPage.empty();
  Canvas.draw();

  const canvas = document.getElementById('canvas');
  canvas.width = ((window.innerWidth / 10).toFixed(0) - 3) * 10;
  canvas.height = ((window.innerHeight / 10).toFixed(0) - 3) * 10;

  const hero = new Character(heroName, 100, 1280, 1280,
    10, 10, 0, 10, Wizard, 0, 0, 6, 'idle', 0.25, 0.5);

  const heroHealth = new Health(100, hero.name, [0, 0, 300, 70], [40, 60, 300, 10], [40, 45]);

  const monster = new Character('Angry Ogre Tommy', 100, 1920, 960,
    5, 10, 0, 10, Minotaur, 0, 0, 6, 'idle', 0.75, 2 / 3);

  const monsterHealth = new Health(100, monster.name,
    [canvas.width - 340, 0, canvas.width, 70],
    [canvas.width - 340, 60, 300, 10],
    [canvas.width - 340, 45]);

  const tips = new Tips(
    genericTips,
    winTips,
    loseTips,
    [40, canvas.height - 80, canvas.width, 60],
    [40, canvas.height - 40],
  );

  const score = new Score(0, [canvas.width / 2 - 70, 30, 110, 30], [canvas.width / 2 - 70, 45]);

  setInterval(monster.draw.bind(monster), 1000 / monster.fps);
  setInterval(hero.draw.bind(hero), 1000 / hero.fps);
  setInterval(heroHealth.draw.bind(heroHealth), 1000 / 50);
  setInterval(monsterHealth.draw.bind(monsterHealth), 1000 / 50);
  setInterval(tips.draw.bind(tips), 1000 / 50);
  setInterval(score.draw.bind(score), 1000 / 50);
};

export default loadCanvas;
