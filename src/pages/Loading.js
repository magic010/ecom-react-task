import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div class="loading-content">
      <div class="loading-content__center-part"></div>
      <div class="loading-content__loader">
        <div class="loading-content__loader-content"></div>
      </div>
    </div>
  );
};

export default Loading;
