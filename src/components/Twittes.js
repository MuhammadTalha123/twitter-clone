import React from "react";
import CreateTweet from "./CreateTweet";
import Posts from "./Posts";
import Trends from "./Trends";

const Twittes = () => {
  var x = document.getElementsByClassName("trends");
  const trendFun = () => {
    var y = x.item("className")
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }

  const aboutFun = () => {
    alert("Wellcome to about section");
  }
  return (
    <div className="posts">
      <div className="posts__home">
        <h1 className="home">Home</h1> 
        <h2 className="trend"  onClick={trendFun}>Trends</h2>
        <h2 className="links" onClick={aboutFun}>About</h2>
      </div>
      <CreateTweet />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default Twittes;