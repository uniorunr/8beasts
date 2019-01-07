import { JSDOM } from 'jsdom';
import FindExtra from './findExtra';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for FindExtra task modal dialog creation process', () => {
  test('should create modal dialog with taskSequence id', () => {
    FindExtra.draw();
    const element = document.querySelector('#taskFindExtra');

    expect(element).not.toBeNull();
  });
  test('should remove modal dialog with taskFindExtra id', () => {
    FindExtra.empty();
    const element = document.querySelector('#taskFindExtra');

    expect(element).toBeNull();
  });
});
