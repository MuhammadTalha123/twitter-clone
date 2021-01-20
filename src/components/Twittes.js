import React from "react";
import CreateTweet from "./CreateTweet";
import Posts from "./Posts";
import Trends from "./Trends";

const Twittes = () => {
  // var x = document.getElementsByClassName("trends");
  // var a = document.getElementsByClassName("sidebar");
  const trendFun = () => {
    // var y = x.item("className")
    // if (y.style.display === "none") {
    //   y.style.display = "block";
    // } else {
    //   y.style.display = "block";
    // }
    alert("welcome to Trends Section.");
  }

  const aboutFun = () => {
    // var b = a.item("className")
    // if (b.style.display === "none") {
    //   b.style.display = "block";
    // } else {
    //   b.style.display = "block";
    // }
    alert("welcome to About Section.");
  }

  // const homeFun = () => {
  //   var y = x.item("className")
  //   var b = a.item("className")
  //   y.style.display = "none";
  //   b.style.display = "none";
  // }
 
  return (
    <div className="posts">
      <div className="posts__home">
        <h1 className="home">Home</h1> 
        <h2 className="trend"  onClick={trendFun}>Trends</h2>
        <h2 className="links" onClick={aboutFun}>About</h2>
      </div>
      <div className="create_tweet_and_post">
      <CreateTweet />
      <Posts />
      <Posts />
      <Posts />
      </div>
    </div>
  );
};

export default Twittes;