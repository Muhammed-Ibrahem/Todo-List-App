import { memo, useContext } from "react";
import SUN from "../../../assets/icon-sun.svg";
import MOON from "../../../assets/icon-moon.svg";
import styles from "./TodoHeader.module.css";
import { useStore } from "../../../wideState/wide-state-hook";
import { useRef } from "react";
import ThemeContext from "../../../ThemeContext/theme-context";
const TodoHeader = () => {
  const [state, dispatch] = useStore(false);
  const themeCTX = useContext(ThemeContext);
  const inputRef = useRef();

  const handleTasks = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) return;
    dispatch("ADD_ITEM", inputRef.current.value);
    inputRef.current.value = "";
 
  };

  const setThemeImg = () => {
    themeCTX.toggleTheme();
    localStorage.setItem("Theme", themeCTX.Theme === "DARK" ? "LIGHT" : "DARK");
  };
  const myStyles =
    themeCTX.Theme === "DARK" ? styles.darkTheme : styles.lightTheme;
  return (
    <section className={`${styles.TodoHeader} ${myStyles}`}>
      <header>
        <h1>TODO</h1>
        <img
          onClick={setThemeImg}
          src={themeCTX.Theme === "DARK" ? SUN : MOON}
          alt="sun-for-color-theme"
        />
      </header>
      <form onSubmit={handleTasks}>
        <input ref={inputRef} type="text" placeholder="Create a new todo..." />
      </form>
    </section>
  );
};

export default memo(TodoHeader);
