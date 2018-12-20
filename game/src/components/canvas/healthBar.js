import { ctx } from './initialization';

class Health {
  constructor(health, name, clearArea, rectangleArea, textArea) {
    this.health = health;
    this.name = name;
    this.clearArea = clearArea;
    this.rectangleArea = rectangleArea;
    this.textArea = textArea;
  }

  updateFrame() {
    ctx.clearRect(...this.clearArea);
  }

  draw() {
    this.updateFrame();
    ctx.beginPath();
    ctx.strokeStyle = '#72707d';
    ctx.rect(...this.rectangleArea);
    ctx.fillRect(...this.rectangleArea);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();

    ctx.font = '0.8em Emulogic, Pixelettes, sans-serif';
    ctx.fillStyle = '#72707d';
    ctx.fillText(this.name, ...this.textArea);
  }
}

export default Health;
