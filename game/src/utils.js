export const pause = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

export const test = 0;
