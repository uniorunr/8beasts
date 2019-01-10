import { JSDOM } from 'jsdom';
import GameInfo from './gameInfo';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for game Info button', () => {
  test('should create game Info button', () => {
    GameInfo.draw();
    const element = document.querySelector('.game-info-button');

    expect(element).not.toBeNull();
  });
  test('should remove game Info button', () => {
    GameInfo.empty();
    const element = document.querySelector('.game-info-button');

    expect(element).toBeNull();
  });
});

describe('tests for game Info popup', () => {
  test('should create game Info popup', () => {
    GameInfo.drawInfoPopUp();
    const element = document.querySelector('#gameInfoPopUp');

    expect(element).not.toBeNull();
  });
  test('should remove game Info popup', () => {
    GameInfo.emptyInfoPopUp();
    const element = document.querySelector('#gameInfoPopUp');

    expect(element).toBeNull();
  });
});
