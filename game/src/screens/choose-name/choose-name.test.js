import { JSDOM } from 'jsdom';
import ChoosePlayerName from './chooseName';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for chooseName modal dialog creation process', () => {
  test('should create modal dialog', () => {
    ChoosePlayerName.draw();
    const element = document.querySelector('#choosePlayerName');

    expect(element).not.toBeNull();
  });
  test('should remove modal dialog', () => {
    ChoosePlayerName.empty();
    const element = document.querySelector('#choosePlayerName');

    expect(element).toBeNull();
  });
});
