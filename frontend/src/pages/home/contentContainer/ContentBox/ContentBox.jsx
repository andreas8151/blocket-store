import React from "react";
import "./contentBox.css";

function ContentBox({ userContent, index }) {
  return (
    <div key={index} className="contentBox">
      <img src={userContent.imgUrl} alt={`Image ${index}`} />
      <div className="contentInfoBox">
        <p>{userContent.description}</p>
      </div>
    </div>
  );
}

export default ContentBox;
