import "./myContentBox.css";

function MyContentBox({ userContent, index }) {
  return (
    <div key={index} className="contentBox">
      <img src={userContent.imgUrl} alt={`Image ${index}`} />
      <div className="contentInfoBox">
        <p>{userContent.description}</p>
      </div>
      <button className="deleteBtn">Delete</button>
    </div>
  );
}

export default MyContentBox;
