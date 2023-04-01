import React from "react";
import "./uploadForm.css";

function UploadForm({ handleFileSelect, handleSubmit, handleDescriptionText }) {
  return (
    <div id="uploadContainer">
      {" "}
      <h2>Upload here</h2>
      <div> </div>
      <textarea
        placeholder="description"
        type="text"
        onChange={handleDescriptionText}
      />{" "}
      <div className="buttonContainer">
        {" "}
        <div className="file-input">
          {" "}
          <label htmlFor="file-upload">Select Img</label>{" "}
          <input id="file-upload" type="file" onChange={handleFileSelect} />
        </div>
        <button onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  );
}

export default UploadForm;
