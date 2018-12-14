const canvasWidth = ((window.innerWidth / 10).toFixed(0) - 3) * 10;
const canvasHeight = ((window.innerHeight / 10).toFixed(0) - 3) * 10 - 20;

const canvas = document.getElementById('myCanvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext('2d');

const spriteWidth = 960;
const spriteHeight = 960;

const rows = 10;
const cols = 10;

const width = spriteWidth / cols;
const height = spriteHeight / rows;

let curFrame = 0;
const frameCount = 10;

let srcX = 0;
let srcY = 0;

const fps = 6;

let anim = 'idle';

const character = new Image();

character.src = '../img/wizard_sprite.png';

function updateFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  curFrame = (curFrame += 1) % frameCount;
  srcX = curFrame * width;
}

function draw() {
  updateFrame();
  ctx.drawImage(character, srcX, srcY, width, height,
    canvasWidth / 2 - width / 2, canvasHeight / 2 - height / 2, width, height);
  if (curFrame === 9 && anim !== 'idle') {
    srcY = 0;
  }
}

function attack() {
  curFrame = 0;
  srcY = 3 * height;
  anim = 'attack';
}

function heal() {
  curFrame = 0;
  srcY = height;
  anim = 'heal';
}

function walk() {
  curFrame = 0;
  srcY = 2 * height;
  anim = 'walk';
}

function death() {
  curFrame = 0;
  srcY = 4 * height;
  anim = 'death';
}

setInterval(draw, 1000 / fps);

document.querySelector('.control.attack').addEventListener('click', attack);
document.querySelector('.control.heal').addEventListener('click', heal);
document.querySelector('.control.walk').addEventListener('click', walk);
document.querySelector('.control.death').addEventListener('click', death);
