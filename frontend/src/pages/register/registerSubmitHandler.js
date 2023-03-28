export async function registerSubmitHandler(username, password) {
  try {
    const data = await fetch(`http://localhost:5050/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const responseText = await data.text();

    return responseText;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
}
