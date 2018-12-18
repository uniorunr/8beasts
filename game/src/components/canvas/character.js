import { Canvas, canvas, ctx } from './initialization';

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

export default Character;
