export async function loginUser() {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    console.log(data);
    return data;
}
