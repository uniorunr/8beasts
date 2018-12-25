class Canvas {
  static draw() {
    const cnvs = document.createElement('canvas');
    cnvs.setAttribute('id', 'canvas');
    document.querySelector('.battle-content').appendChild(cnvs);
  }
}

class Sprite {
  constructor(name, hp, sWidth, sHeight, rows, cols, curFrame, frames, spriteSrc) {
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
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  updateFrame() {
    this.ctx.clearRect(this.canvas.width * this.position - this.frameWidth() / 2,
      this.canvas.height / 2 - this.frameHeight() * this.dPos,
      this.frameWidth(), this.frameHeight());
    this.curFrame = (this.curFrame += 1) % this.frames;
    this.srcX = this.curFrame * this.frameWidth();
  }

  draw() {
    this.updateFrame();
    this.ctx.drawImage(this.sprite, this.srcX, this.srcY, this.frameWidth(), this.frameHeight(),
      this.canvas.width * this.position - this.frameWidth() / 2,
      this.canvas.height / 2 - this.frameHeight() * this.dPos,
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

class Health {
  constructor(health, name, clearArea, rectangleArea, textArea) {
    this.health = health;
    this.name = name;
    this.clearArea = clearArea;
    this.rectangleArea = rectangleArea;
    this.textArea = textArea;
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  updateFrame() {
    this.ctx.clearRect(...this.clearArea);
  }

  draw() {
    this.updateFrame();
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#72707d';
    this.ctx.rect(...this.rectangleArea);
    this.ctx.fillRect(...this.rectangleArea);
    this.ctx.lineWidth = 4;
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.font = '0.8em Emulogic, Pixelettes, sans-serif';
    this.ctx.fillStyle = '#72707d';
    this.ctx.fillText(this.name, ...this.textArea);
  }
}

class Score {
  constructor(score, clearArea, textArea) {
    this.score = score;
    this.clearArea = clearArea;
    this.textArea = textArea;
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  updateFrame() {
    this.ctx.clearRect(...this.clearArea);
  }

  draw() {
    this.updateFrame();
    this.ctx.font = '0.95em Emulogic, Pixelettes, sans-serif';
    this.ctx.fillStyle = '#72707d';
    this.ctx.fillText(`Score: ${this.score}`, ...this.textArea);
  }
}

class Tips {
  constructor(generic, winTips, loseTips, clearArea, textArea) {
    this.generic = generic;
    this.winTips = winTips;
    this.loseTips = loseTips;
    this.clearArea = clearArea;
    this.textArea = textArea;
    this.currTip = this.generic[Math.floor(Math.random() * this.generic.length)];
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  updateFrame() {
    this.ctx.clearRect(...this.clearArea);
  }

  draw() {
    this.updateFrame();
    this.ctx.font = '0.8em Emulogic, Pixelettes, sans-serif';
    this.ctx.fillStyle = '#72707d';
    this.ctx.fillText(this.currTip, ...this.textArea);
  }
}

export {
  Canvas, Character, Health, Score, Tips,
};