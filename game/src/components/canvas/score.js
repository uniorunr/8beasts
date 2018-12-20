import { ctx } from './initialization';

class Score {
  constructor(score, clearArea, textArea) {
    this.score = score;
    this.clearArea = clearArea;
    this.textArea = textArea;
  }

  updateFrame() {
    ctx.clearRect(...this.clearArea);
  }

  draw() {
    this.updateFrame();
    ctx.font = '0.95em Emulogic, Pixelettes, sans-serif';
    ctx.fillStyle = '#72707d';
    ctx.fillText(`Score: ${this.score}`, ...this.textArea);
  }
}

export default Score;
