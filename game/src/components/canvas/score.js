import { Canvas, canvas, ctx } from './initialization';

class Score extends Canvas {
  constructor(score, clearArea, textArea) {
    super(canvas, ctx);
    this.score = score;
    this.clearArea = clearArea;
    this.textArea = textArea;
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

export default Score;
