class Canvas {
  static draw() {
    const cs = document.createElement('canvas');
    cs.setAttribute('id', 'canvas');
    document.querySelector('.content').appendChild(cs);
  }
}

Canvas.draw();

const canvas = document.getElementById('canvas');
canvas.width = ((window.innerWidth / 10).toFixed(0) - 3) * 10;
canvas.height = ((window.innerHeight / 10).toFixed(0) - 3) * 10;
const ctx = canvas.getContext('2d');

export { Canvas, canvas, ctx };
