import { JSDOM } from 'jsdom';
import Canvas from './canvas';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'content';
document.querySelector('body').appendChild(content);

describe('tests for canvas creation process', () => {
  test('should create canvas tag', () => {
    Canvas.draw();
    const canvas = document.querySelector('#canvas');

    expect(canvas).not.toBeNull();
  });
});
