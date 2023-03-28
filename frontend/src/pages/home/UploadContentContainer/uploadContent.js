export async function uploadContent(selectedFile) {
  try {
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("description", "test");

    const data = fetch("http://localhost:5050/content/upload", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const res = await data;
  } catch (err) {
    console.log(err);
  }
}
