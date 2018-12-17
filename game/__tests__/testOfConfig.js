const colorConfig = {
  1: 'red',
  2: 'black',
};

const items = [{ id: 1, color: 1 }, { id: 2, color: 2 }, { id: 3, color: 3 }];

function ourCompleFunction(itemsForTest, config) {
  return itemsForTest
    .filter(({ color }) => config[color] === 'red')
    .map(({ id }) => id);
}

describe('Very fast start to run the program', () => {
  it('insert some data into the dom', () => {
    document.body.innerHTML = '<div><span id="username">Test1</span><button id="button" /></div>';
    const buttonEl = document.querySelector('#button');

    expect(buttonEl).not.toBe(null);
  });
  it('ourCompleFunction', () => {
    const targetIds = ourCompleFunction(items, colorConfig);

    expect(targetIds).toEqual([1]);
  });
});
