import { JSDOM } from 'jsdom';
import Translation from './audition';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for Audition modal dialog creation process', () => {
  test('should create modal dialog with taskAudition id', () => {
    Translation.draw();
    const element = document.querySelector('#taskAudition');

    expect(element).not.toBeNull();
  });
  test('should remove modal dialog with taskAudition id', () => {
    Translation.empty();
    const element = document.querySelector('#taskAudition');

    expect(element).toBeNull();
  });
});
