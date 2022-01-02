// import logo from './logo.svg';
import React, { Component } from "react";
import "./index.css";
import LoginForm, { toogle } from "./components/loginForm";
import BurgerMenu from "./components/BurgerMenu";

const HeaderApp = () => {
  /*

  * FUNCTIONS

  */
  const toogle = () => {
    if (!document.getElementById("menu-window-toogle").checked) {
      document.getElementsByClassName("menu-window-center")[0].style.transform =
        "scale(0)";
        document.getElementById("overlay").style.transform = "scale(0)";

    } else {
      document.getElementsByClassName("menu-window-center")[0].style.transform =
      "scale(1)";
      document.getElementById("overlay").style.transform = "scale(1)";
    }
    document.getElementById("menu-window-toogle").checked =
      !document.getElementById("menu-window-toogle").checked;
  };
  

  return (
    <>
      <div className="logo">
        <div>
          <img className="imageIcon" src="./favicon.ico" alt="Icon" />
        </div>
      </div>
      <div className="wrapper mob-hide">
        <ul>
          <li className="bookmark">
            <p>Files</p>
          </li>
          <li
            className="bookmark flex-between"
            onClick="toogleBackgroundColourMenu()"
          >
            <p>Color</p>
            <div className="BackgroundColorDropMenu">
              <div style={{ borderRadius: "0.25rem" }}>
                <div className="NotePopupTitle">
                  <span
                    className="button"
                    style={{ justifyContent: "center", width: "100%" }}
                  >
                    Change backgroung color
                  </span>
                  <span
                    onClick="toogleBackgroundColourMenu()"
                    className="button"
                    title="Close Menu"
                  >
                    &times;
                  </span>
                </div>
                <a className="button">
                  <colors style={{ width: "100%" }}>
                    <white onClick="changeBgColor(note[1], 4, 'main')"></white>
                    <red onClick="changeBgColor(note[1], 0, 'main')"></red>
                    <blue onClick="changeBgColor(note[1], 1, 'main')"></blue>
                    <green onClick="changeBgColor(note[1], 2, 'main')"></green>
                    <gray onClick="changeBgColor(note[1], 3, 'main')"></gray>
                  </colors>
                </a>
              </div>
            </div>
          </li>
          <li className="bookmark">
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0",
              }}
              onClick={toogle}
            ></div>
            <p>log in</p>
            <LoginForm />
          </li>
          <li className="bookmark">
            <a href="#secondPage">About Me</a>
          </li>
        </ul>
      </div>
      <BurgerMenu />
    </>
  );
};

export default HeaderApp;
