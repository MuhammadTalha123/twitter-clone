import React, { createContext } from "react";
import { FaSistrix } from "react-icons/fa";
import TrendsKeyword from "./TrendsKeyword";

const Trends = () => {
  // var x = document.getElementsByClassName("trends");
  return (
    <div className="trends">
      <div className="trends__search">
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
        <div className="trend__icon">
          <FaSistrix className="search" />
        </div>
      </div>
      <TrendsKeyword />
    </div>
  );
};

// export const trendFun = () => {
//   var x = document.getElementsByClassName("trends")};
  // if (x.style.display === "none") {
  // x.style.display = "block";
  // } else {
  // x.style.display = "none";
  // alert(123);
  // }

export default Trends;