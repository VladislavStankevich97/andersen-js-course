export const delay = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(100);
    }, ms);
  });
