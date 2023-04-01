import React, { useState, useEffect } from "react";
import { addFriend } from "./addFriend";
import { getFriendsContent } from "./getFriendsContent";
import "./friendsContainer.css";
import ContentBox from "../contentContainer/ContentBox/ContentBox";

function AddFriendContainer() {
  const [friend, setFriend] = useState("");
  const [resText, setResText] = useState("");
  const [friends, setFriends] = useState([]);
  const [friendsContent, setFriendsContent] = useState([]);

  const username = localStorage.getItem("username");

  //get friends
  useEffect(() => {
    async function getFriends() {
      const data = await fetch("http://localhost:5050/friend/getFriends", {
        credentials: "include",
      });
      const res = await data.json();
      setFriends(res);
    }
    getFriends();
  }, []);

  // get friends content
  useEffect(() => {
    async function getFriendsContentAsync() {
      const res = await getFriendsContent();
      setFriendsContent(res);
    }
    getFriendsContentAsync();
  }, []);

  //submit
  async function submitHandler() {
    const res = await addFriend(friend);
    setResText(res);
    if (res == "Friend Added") {
      setFriends([...friends, { username: friend }]);
    }
  }

  return (
    <div className="friendsContainer">
      <div id="wallpaperWave"></div>

      <h4>Friends of {username}! </h4>
      <div className="addFriendContainer">
        <input onChange={(event) => setFriend(event.target.value)} />
        <button onClick={submitHandler}>Add Friend</button>
        <p>{resText}</p>
      </div>

      {friends.map((friend, index) => {
        return <p key={index}>{friend.username}</p>;
      })}
      <div className="contentContainer">
        {friendsContent.map((friend, index) => {
          return (
            <ContentBox
              userContent={friend}
              key={index}
              index={index}
              friendsContent={friendsContent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AddFriendContainer;
