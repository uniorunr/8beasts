import Character from './components/canvas/character';
import Health from './components/canvas/healthBar';

const hero = new Character('Yury', 100, 1280, 1280,
  10, 10, 0, 10, '../img/wizard_sprite.png', 0, 0, 6, 'idle', 0.25, 0.5);

const heroHealth = new Health(100, hero.name, [0, 0, 300, 70], [40, 60, 300, 10], [40, 45]);

const monster = new Character('Angry Ogr Tommy', 100, 1920, 960,
  5, 10, 0, 10, '../img/minotaur_sprite.png', 0, 0, 6, 'idle', 0.75, 2 / 3);

const monsterHealth = new Health(100, monster.name,
  [monster.canvas.width - 340, 0, monster.canvas.width, 70],
  [monster.canvas.width - 340, 60, 300, 10],
  [monster.canvas.width - 340, 45]);

setInterval(monster.draw.bind(monster), 1000 / monster.fps);
setInterval(hero.draw.bind(hero), 1000 / hero.fps);
setInterval(heroHealth.draw.bind(heroHealth), 1000 / 25);
setInterval(monsterHealth.draw.bind(monsterHealth), 1000 / 25);
