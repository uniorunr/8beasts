import { JSDOM } from 'jsdom';
import Translation from './translation';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for Translation modal dialog creation process', () => {
  test('should create modal dialog with taskTranslation id', () => {
    Translation.draw();
    const element = document.querySelector('#taskTranslation');

    expect(element).not.toBeNull();
  });
  test('should remove modal dialog with taskTranslation id', () => {
    Translation.empty();
    const element = document.querySelector('#taskTranslation');

    expect(element).toBeNull();
  });
});
