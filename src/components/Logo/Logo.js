import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import brain from "./brain (1).png";
const Logo = () => {
  return (
    <div className="ma4 nt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img alt="brain" src={brain} />
        </div>
      </Tilt>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default Logo;
