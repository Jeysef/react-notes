import "./stylesForComponents/hamburgerMenu.css";

const BurgerMenu = () => {
  const toogle = (event) => {
    if (event.target.tagName != "INPUT")
      document.getElementById("menu__toggle").checked =
        !document.getElementById("menu__toggle").checked;
  };
  return (
    <div
      className="LinksWrapper"
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        top: "3px",
        right: "10px",
      }}
    >
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" for="menu__toggle">
        <span></span>
      </label>

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
                <img className="imageIcon" src="../favicon.ico" alt="Icon" />
              </div>
            </div>
          </div>
        </li>
        <li>
          <a
            className="menu__item"
            href="#"
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
            href="#"
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
            href="#"
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
            href="#"
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
    </div>
  );
};

export default BurgerMenu;
