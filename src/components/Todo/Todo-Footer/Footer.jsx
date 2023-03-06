import React, { useContext, useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { useStore } from "../../../wideState/wide-state-hook";
import ThemeContext from "../../../ThemeContext/theme-context";
const Footer = () => {
  const [size, setResizer] = useState(window.innerWidth);
  const Theme = useContext(ThemeContext).Theme;
  const [state, dispatch] = useStore();
  let theActiveClass = state.ItemsFilter;
  const handleClear = () => {
    dispatch("RESET_LIST");
  };
  const handleListItems = (e) => {
    dispatch("SET_FILTER", e.target.textContent.toUpperCase());
  };
  const myThemeStyle = Theme === "DARK" ? styles.darkTheme : styles.lightTheme;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResizer(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setResizer(window.innerWidth);
      });
    };
  }, []);
  return (
    <footer className={`${styles.TheFooter} ${myThemeStyle}`}>
      <div>
        {state.TodoItems.length} {size > 425 && "items left"}
      </div>
      <ul>
        <li
          onClick={handleListItems}
          className={theActiveClass === "ALL" ? styles.active : ""}
        >
          All
        </li>
        <li
          onClick={handleListItems}
          className={theActiveClass === "ACTIVE" ? styles.active : ""}
        >
          Active
        </li>
        <li
          onClick={handleListItems}
          className={theActiveClass === "COMPLETED" ? styles.active : ""}
        >
          Completed
        </li>
      </ul>
      <button onClick={handleClear}>
        {size > 425 ? "Clear Completed" : "Clear Completed"}
      </button>
    </footer>
  );
};

export default React.memo(Footer);
