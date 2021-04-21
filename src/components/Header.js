import React from "react";
import goodDog from "../assets/goodDog.svg";

const Header = () => {
  return (
    <header className="header">
      <h1>
        🐩Woof
        <span>Mama</span>
        🐕
      </h1>
      <div className="wrapper">
        <div className="info">
          <h2>
            The <span>#1 Rated</span> DoggyCare App
          </h2>
          <p>
            Doggo ipsum wrinkler boof he made many woofs wow very biscit, h*ck.
            Dat tungg tho noodle horse length boy long woofer long doggo, borkf
            boof what a nice floof.
          </p>
          <div className="buttons">
            <button className="tealButton">Start now</button>
            <button className="blackButton">Get Quote</button>
          </div>
        </div>
        <div className="image">
          <img src={goodDog} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
