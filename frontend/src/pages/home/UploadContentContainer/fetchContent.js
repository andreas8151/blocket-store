async function fetchContent() {
  try {
    const response = await fetch("http://localhost:5050/content/get", {
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch content");
    }
    const data = await response.json();
    const content = data.map((file) => {
      return {
        imgUrl: `http://localhost:5050/images/${file.filename}`,
        description: file.description,
      };
    });
    return content;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export { fetchContent };
