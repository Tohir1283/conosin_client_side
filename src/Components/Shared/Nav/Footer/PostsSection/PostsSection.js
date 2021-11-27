import React from "react";
import "./PostsSection.css";

const PostsSection = () => {
  return (
    <div style={{ maxWidth: "420px" }}>
      <div className="latestPosts">
        <h2 style={{ color: "yellow" }}>Latest Posts</h2>
        <>
          <small>August 30, 2017</small>
        </>
        <p>How To Take Better Photos? </p>
      </div>
      <div className="latestPosts">
        <>
          <small>August 30, 2017</small>
        </>
        <p>14 Things To See And Do When Visiting Kyoto</p>
        <button
          className="button-primary "
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "1rem 2rem",
            margin: "1rem 0",
          }}
        >
          learn more...
        </button>
      </div>
    </div>
  );
};

export default PostsSection;
