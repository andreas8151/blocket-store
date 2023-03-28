import { useState, useEffect } from "react";
import { fetchContent } from "./fetchContent";
import { uploadContent } from "./uploadContent";
import "./uploadContentContainer.css";

function UploadImgContainer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      await uploadContent(selectedFile);
      const newContent = await fetchContent();
      setContent(newContent);
    }
  };

  useEffect(() => {
    async function fetchContentAsync() {
      const userContent = await fetchContent();
      setContent(userContent);
    }
    fetchContentAsync();
  }, []);

  return (
    <div>
      <h1>Upload Image</h1>
      <div id="uploadContainer">
        <form
          action="/upload"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <button className="file-upload" onClick={() => setSelectedFile(null)}>
            <label htmlFor="file-upload">Select File</label>
            <input id="file-upload" type="file" onChange={handleFileSelect} />
          </button>
          <button type="submit">Upload</button>
        </form>
      </div>
      <div className="contentContainer">
        {content.map((userContent, index) => {
          return (
            <div key={index} className="contentBox">
              <img src={userContent.imgUrl} alt={`Image ${index}`} />
              <div className="contentInfoBox">
                <p>{userContent.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UploadImgContainer;
