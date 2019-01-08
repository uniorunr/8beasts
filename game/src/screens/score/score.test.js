import { JSDOM } from 'jsdom';
import ScoreTable from './score';
import FireBase from '../../db/firebase';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

const content = document.createElement('div');
content.className = 'container';
document.querySelector('body').appendChild(content);

const initFireBase = async () => {
  await FireBase.init();
};
initFireBase();

describe('test for ScoreTable class', () => {
  test('should initialize firebase and return object with a data', async () => {
    const data = await ScoreTable.getDBData();

    expect(data).not.toBeNull();
    expect(typeof data).toBe('object');
  });

  test('should return an object with numbers as the values', async () => {
    const data = await ScoreTable.getDBData();
    const values = Object.values(data);
    const valueCheck = element => typeof element === 'number';

    expect(values.every(valueCheck)).toBe(true);
  });
});

describe('tests for ScoreTable creation process', () => {
  test('should create ScoreTable dialog', async () => {
    await ScoreTable.draw(await ScoreTable.getDBData());
    const element = document.querySelector('#scoreTable');

    expect(element).not.toBeNull();
  });
  test('should remove scoreTable dialog', () => {
    ScoreTable.empty();
    const element = document.querySelector('#scoreTable');

    expect(element).toBeNull();
  });
});
