export const createCb = str => () => console.log(str);

export function task1(x, cb) {
  if (x <= 10) {
    console.log('x <= 10');
  } else {
    console.log('x > 10');
    cb();
  }
}
