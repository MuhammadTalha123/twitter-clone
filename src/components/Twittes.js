import React from "react";
import CreateTweet from "./CreateTweet";
import Posts from "./Posts";
import Trends from "./Trends";

const Twittes = () => {
  return (
    <div className="posts">
      <div className="posts__home">
        <h1 className="home">Home</h1> 
        <h2 className="trend">Trends</h2>
        <h2 className="links">About</h2>
      </div>
      <CreateTweet />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default Twittes;