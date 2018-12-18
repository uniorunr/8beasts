import { Canvas, canvas, ctx } from './initialization';

class Tips extends Canvas {
  constructor(generic, winTips, loseTips, clearArea, textArea) {
    super(canvas, ctx);
    this.generic = generic;
    this.winTips = winTips;
    this.loseTips = loseTips;
    this.clearArea = clearArea;
    this.textArea = textArea;
    this.currTip = this.generic[Math.floor(Math.random() * this.generic.length)];
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

export default Tips;
