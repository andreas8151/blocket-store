import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";
import "./contentBox.css";

function ContentBox({ userContent, index }) {
  return (
    <div key={index} className="contentBox">
      <img src={userContent.imgUrl} alt={`Image ${index}`} />
      <div className="contentInfoBox">
        <p>{userContent.description}</p>
      </div>
      <Link className="GoTo" to={`/content/${userContent._id}`}>
        <AiOutlineFileSearch className="icon" />
      </Link>
    </div>
  );
}

export default ContentBox;
