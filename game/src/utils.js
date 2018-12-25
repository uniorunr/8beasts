const pause = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

const combinedMonsterName = (adjective, type, name) => {
  const random = arr => arr[Math.floor(Math.random() * arr.length)];
  return `${random(adjective)} ${random(type)} ${random(name)}`;
};

export { pause, combinedMonsterName };
