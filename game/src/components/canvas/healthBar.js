import { canvas, ctx, Canvas } from './initialization';

class Health extends Canvas {
  constructor(health, name, clearArea, rectangleArea, textArea) {
    super(canvas, ctx);
    this.health = health;
    this.name = name;
    this.clearArea = clearArea;
    this.rectangleArea = rectangleArea;
    this.textArea = textArea;
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

export default Health;
