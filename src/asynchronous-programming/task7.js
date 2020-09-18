export async function task7() {
  const value1 = await getPromise1();
  const value2 = await getPromise2();
  const value3 = await getPromise3();

  console.log(value1 * (value2 + value3));
}
