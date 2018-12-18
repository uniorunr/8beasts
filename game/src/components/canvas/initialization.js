const canvas = document.getElementById('myCanvas');
canvas.width = ((window.innerWidth / 10).toFixed(0) - 3) * 10;
canvas.height = ((window.innerHeight / 10).toFixed(0) - 3) * 10;
const ctx = canvas.getContext('2d');

class Canvas {
  constructor() {
    this.canvas = canvas;
    this.ctx = ctx;
  }
}

export { Canvas, canvas, ctx };
