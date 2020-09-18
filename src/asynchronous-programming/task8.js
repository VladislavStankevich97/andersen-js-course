export async function fooTask8(url) {
  try {
    const response = await getUsers(url);
    const [user] = await response.json();

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
