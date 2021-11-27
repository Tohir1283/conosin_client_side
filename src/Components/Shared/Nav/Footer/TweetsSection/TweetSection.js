import React from "react";
import { ImTwitter } from "react-icons/im";
import "./TweetSection.css";

const TweetSection = () => {
  return (
    <div className="tweetSection">
      <h2 style={{ color: "yellow" }}>Latest Tweets</h2>
      <div className="tweet d-flex justify-content-between">
        <span className="me-2" style={{ color: "yellow" }}>
          <ImTwitter />
        </span>
        <p>
          @alexherder hi @alexherder, we can’t recommend anyone specific, but
          you can find a list of freelenacers working wit…
          https://t.co/fs1gMcMOej
        </p>
      </div>
      <br />
      <div className="tweet d-flex justify-content-between">
        <span className="me-2" style={{ color: "yellow" }}>
          <ImTwitter />
        </span>
        <p>
          @simonrichwright Here’s an article to get you started with using our
          support platform: https://t.co/eiUoQNlHUh Let… https://t.co/PhSMKT4Rph
        </p>
      </div>
    </div>
  );
};

export default TweetSection;
