import Menulist from "./MenuList";
import "./stylesForComponents/hamburgerMenu.css";

const BurgerMenu = () => {
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

      <Menulist />
    </div>
  );
};

export default BurgerMenu;
