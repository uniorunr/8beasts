import { JSDOM } from 'jsdom';
import SoundController from './soundController';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for SoundController button', () => {
  test('should create SoundController button', () => {
    SoundController.draw();
    const element = document.querySelector('.sound-button');

    expect(element).not.toBeNull();
  });
});
