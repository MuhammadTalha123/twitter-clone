import React from "react";
import CreateTweet from "./CreateTweet";
import Posts from "./Posts";
import Trends from "./Trends";

const Twittes = () => {
  const trendFun = () => {
    // var x = document.getElementsByClassName("trends");
    // var y = x.item("className")
    // if (y.style.display === "block") {
    //   y.style.display = "none";
    //   y.style.width = "300px";
    // } else {
    //   y.style.display = "block";
    // }
    alert("Wellcome to trend section");
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