import { JSDOM } from 'jsdom';
import { SimpleMath, calculation } from './simpleMath';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

describe('tests for simpleMath modal dialog creation process', () => {
  test('should create modal dialog with taskSimpleMath id', () => {
    SimpleMath.draw();
    const element = document.querySelector('#taskSimpleMath');

    expect(element).not.toBeNull();
  });
  test('should remove modal dialog with taskSimpleMath id', () => {
    SimpleMath.empty();
    const element = document.querySelector('#taskSimpleMath');

    expect(element).toBeNull();
  });
});

describe('tests for calculation function', () => {
  test('should calculate addition correctly', () => {
    const result = calculation(98, 85, '+');
    const result1 = calculation(0, 0, '+');
    const result2 = calculation(-1, 15, '+');

    expect(result).toBe(183);
    expect(result1).toBe(0);
    expect(result2).toBe(14);
  });
  test('should calculate subtraction correctly', () => {
    const result = calculation(67, 67, '-');
    const result1 = calculation(-65, 10, '-');
    const result2 = calculation(100, 33, '-');

    expect(result).toBe(0);
    expect(result1).toBe(-75);
    expect(result2).toBe(67);
  });
  test('should calculate multiplication correctly', () => {
    const result = calculation(0, 1, '*');
    const result1 = calculation(2, 9, '*');
    const result2 = calculation(-7, 8, '*');

    expect(result).toBe(0);
    expect(result1).toBe(18);
    expect(result2).toBe(-56);
  });
});
