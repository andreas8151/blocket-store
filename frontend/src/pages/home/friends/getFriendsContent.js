export async function getFriendsContent() {
  try {
    const data = await fetch(`http://localhost:5050/friend/getFriendsContent`, {
      credentials: "include", //include cookies
      method: "GET",
    });

    const res = await data.json();
    const content = res.map((file) => {
      return {
        imgUrl: `http://localhost:5050/images/${file.filename}`,
        description: file.description,
      };
    });
    return content;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
}
