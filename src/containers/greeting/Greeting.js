import React, { useState } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
//import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  const email = greeting.email;
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                {/* <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                /> */}
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
                <button
                  onClick={handleCopy}
                  theme={theme}
                  className="main-button"
                  style={{
                    color: theme.body,
                    backgroundColor: theme.text,
                    border: `solid 1px ${theme.text}`,
                  }}
                >
                  Copy Email
                </button>
                {copied && (
                  <div
                    style={{
                      marginTop: "10px",
                      color: "green",
                      fontSize: "14px",
                    }}
                  >
                    Email copied!
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div">
            <img
							alt="saad sitting on table"
							src={require("../../assets/images/feelingProud.svg")}
						></img>
            <FeelingProud theme={theme} />
          </div> */}
        </div>
      </div>
    </Fade>
  );
}
