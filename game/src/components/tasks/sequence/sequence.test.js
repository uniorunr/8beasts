import { JSDOM } from 'jsdom';
import Sequence from './sequence';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for sequence task modal dialog creation process', () => {
  test('should create modal dialog with taskSequence id', () => {
    Sequence.draw();
    const element = document.querySelector('#taskSequence');

    expect(element).not.toBeNull();
  });
  test('should remove modal dialog with taskSequence id', () => {
    Sequence.empty();
    const element = document.querySelector('#taskSequence');

    expect(element).toBeNull();
  });
});
