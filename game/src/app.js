const canvas = document.getElementById('myCanvas');
canvas.width = ((window.innerWidth / 10).toFixed(0) - 3) * 10;
canvas.height = ((window.innerHeight / 10).toFixed(0) - 3) * 10 - 20;
const ctx = canvas.getContext('2d');

class Canvas {
  constructor() {
    this.canvas = canvas;
    this.ctx = ctx;
  }
}

class Sprite extends Canvas {
  constructor(name, hp, sWidth, sHeight, rows, cols, curFrame, frames, spriteSrc) {
    super(canvas, ctx);
    this.name = name;
    this.hp = hp;
    this.spriteWidth = sWidth;
    this.spriteHeight = sHeight;
    this.spriteRows = rows;
    this.spriteCols = cols;
    this.curFrame = curFrame;
    this.frames = frames;
    this.sprite = new Image();
    this.sprite.src = spriteSrc;
  }

  frameWidth() {
    return this.spriteWidth / this.spriteCols;
  }

  frameHeight() {
    return this.spriteHeight / this.spriteRows;
  }
}

class Character extends Sprite {
  constructor(name, hp, sWidth, sHeight, rows, cols,
    curFrame, frames, spriteSrc, srcX, srcY, fps, curAction, position, dPos) {
    super(name, hp, sWidth, sHeight, rows, cols, curFrame, frames, spriteSrc);
    this.srcX = srcX;
    this.srcY = srcY;
    this.fps = fps;
    this.curAction = curAction;
    this.position = position;
    this.dPos = dPos;
  }

  updateFrame() {
    this.ctx.clearRect(canvas.width * this.position - this.frameWidth() / 2,
      canvas.height / 2 - this.frameHeight() * this.dPos, this.frameWidth(), this.frameHeight());
    this.curFrame = (this.curFrame += 1) % this.frames;
    this.srcX = this.curFrame * this.frameWidth();
  }

  draw() {
    this.updateFrame();
    this.ctx.drawImage(this.sprite, this.srcX, this.srcY, this.frameWidth(), this.frameHeight(),
      canvas.width * this.position - this.frameWidth() / 2,
      canvas.height / 2 - this.frameHeight() * this.dPos,
      this.frameWidth(), this.frameHeight());
    if (this.curFrame === this.frames - 1 && this.curAction !== 'idle') {
      this.srcY = 0;
    }
  }

  heal() {
    this.curFrame = 0;
    this.srcY = this.frameHeight();
    this.curAction = 'heal';
  }

  walk() {
    this.curFrame = 0;
    this.srcY = 2 * this.frameHeight();
    this.curAction = 'walk';
  }

  attack() {
    this.curFrame = 0;
    this.srcY = 3 * this.frameHeight();
    this.curAction = 'attack';
  }

  death() {
    this.curFrame = 0;
    this.srcY = 4 * this.frameHeight();
    this.curAction = 'death';
  }
}

const hero = new Character('Piggy', 100, 1280, 1280,
  10, 10, 0, 10, '../img/wizard_sprite.png', 0, 0, 6, 'idle', 0.25, 0.5);

setInterval(hero.draw.bind(hero), 1000 / hero.fps);

document.querySelector('.control.attack').addEventListener('click', hero.attack.bind(hero));
document.querySelector('.control.heal').addEventListener('click', hero.heal.bind(hero));
document.querySelector('.control.walk').addEventListener('click', hero.walk.bind(hero));
document.querySelector('.control.death').addEventListener('click', hero.death.bind(hero));
