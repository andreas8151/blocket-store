import "./home.css";
import AddFriendContainer from "./friends/FriendContainer";
import UploadContentContainer from "./contentContainer/UploadContentContainer";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="homeContainer">
      {" "}
      <div id="header">
        <Navbar />
        <div className="logoText"></div>
      </div>
      <UploadContentContainer />
      <AddFriendContainer />
    </div>
  );
}
export default Home;
