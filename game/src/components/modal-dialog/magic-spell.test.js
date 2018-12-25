import { JSDOM } from 'jsdom';
import MagicSpell from './magic-spell';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for magic-spell modal dialog creation process', () => {
  test('should create modal dialog with magicSpell id', () => {
    MagicSpell.draw();
    const element = document.querySelector('#magicSpell');

    expect(element).not.toBeNull();
  });
  test('should remove modal dialog with magicSpell id', () => {
    MagicSpell.empty();
    const element = document.querySelector('#magicSpell');

    expect(element).toBeNull();
  });
});
