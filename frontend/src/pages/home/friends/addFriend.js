export async function addFriend(friend) {
  try {
    const data = await fetch(`http://localhost:5050/friend/addFriend`, {
      credentials: "include", //include cookies
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        friend,
      }),
    });

    const responseText = await data.text();
    return responseText;
    
  } catch (error) {
    const res = error.response.data;
    return res;
  }
}
