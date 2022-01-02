import React from "react";

const Menulist = () => {
  const toogle = (event) => {
    if (event.target.tagName !== "INPUT")
      document.getElementById("menu__toggle").checked =
        !document.getElementById("menu__toggle").checked;
  };
  return (
    <ul className="menu__box ">
      <li>
        <div
          className="menu__item"
          onClick={(event) => {
            toogle(event);
          }}
        >
          <div className="logo">
            <div>
              <img className="imageIcon" src="./favicon.ico" alt="Icon" />
            </div>
          </div>
        </div>
      </li>
      <li>
        <a
          className="menu__item"
          href="#main"
          onClick={(event) => {
            toogle(event);
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="menu__item"
          href="#main"
          onClick={(event) => {
            toogle(event);
          }}
        >
          Files
        </a>
      </li>
      <li>
        <a
          className="menu__item"
          href="#main"
          onClick={(event) => {
            toogle(event);
          }}
        >
          Color
        </a>
      </li>
      <li>
        <a
          className="menu__item"
          href="#main"
          onClick={(event) => {
            toogle(event);
          }}
        >
          Settings
        </a>
      </li>
      <li>
        <a
          className="menu__item"
          href="#secondPage"
          onClick={(event) => {
            toogle(event);
          }}
        >
          About Me
        </a>
      </li>
    </ul>
  );
};

export default Menulist;
