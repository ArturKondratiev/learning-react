
export async function getAllUsers() {
  try {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
  } catch(err) {
    console.log(err);
  }
}
