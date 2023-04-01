import { useState, useEffect } from "react";
import ContentBox from "./ContentBox/ContentBox";
import { fetchContent } from "./fetchContent";
import { uploadContent } from "./uploadContent";
import UploadForm from "./UploadForm/UploadForm";

import "./uploadContentContainer.css";
import MyContentBox from "./ContentBox/MyContentBox";

function UploadImgContainer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [descriptionText, setDescriptionText] = useState("");
  const [content, setContent] = useState([]);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDescriptionText = (event) => {
    setDescriptionText(event.target.value);
  };

  //submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      await uploadContent(selectedFile, descriptionText);
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
    <div id="mainContainer">
      {" "}
      <div>
        {" "}
        <UploadForm
          handleFileSelect={handleFileSelect}
          handleSubmit={handleSubmit}
          handleDescriptionText={handleDescriptionText}
        />
      </div>
      <div className="myContent">
        <h2>Your products</h2>
        <div className="contentContainer">
          {content.map((userContent, index) => (
            <MyContentBox userContent={userContent} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UploadImgContainer;
