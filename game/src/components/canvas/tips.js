import { ctx } from './initialization';

class Tips {
  constructor(generic, winTips, loseTips, clearArea, textArea) {
    this.generic = generic;
    this.winTips = winTips;
    this.loseTips = loseTips;
    this.clearArea = clearArea;
    this.textArea = textArea;
    this.currTip = this.generic[Math.floor(Math.random() * this.generic.length)];
  }

  updateFrame() {
    ctx.clearRect(...this.clearArea);
  }

  draw() {
    this.updateFrame();
    ctx.font = '0.8em Emulogic, Pixelettes, sans-serif';
    ctx.fillStyle = '#72707d';
    ctx.fillText(this.currTip, ...this.textArea);
  }
}

export default Tips;
