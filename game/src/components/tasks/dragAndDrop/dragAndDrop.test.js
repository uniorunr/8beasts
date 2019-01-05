import { JSDOM } from 'jsdom';
import DragAndDrop from './dragAndDrop';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for DragAndDrop modal dialog creation process', () => {
  test('should create modal dialog with taskDragAndDrop id', () => {
    DragAndDrop.draw();
    const element = document.querySelector('#taskDragAndDrop');

    expect(element).not.toBeNull();
  });
  test('should remove modal dialog with taskDragAndDrop id', () => {
    DragAndDrop.empty();
    const element = document.querySelector('#taskDragAndDrop');

    expect(element).toBeNull();
  });
});
