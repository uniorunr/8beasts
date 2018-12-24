import { JSDOM } from 'jsdom';
import LandingPage from './home';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for landing page creation process', () => {
  test('should create landing page', () => {
    LandingPage.draw();
    const page = document.querySelector('.landing-page');

    expect(page).not.toBeNull();
  });
  test('should remove landing page', () => {
    LandingPage.empty();
    const page = document.querySelector('.landing-page');

    expect(page).toBeNull();
  });
});
