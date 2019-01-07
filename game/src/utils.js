const pause = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

const combinedMonsterName = (adjective, type, name) => {
  const random = arr => arr[Math.floor(Math.random() * arr.length)];
  return `${random(adjective)} ${random(type)} ${random(name)}`;
};

const shuffle = (array) => {
  const arr = array;
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
};

export { pause, combinedMonsterName, shuffle };
