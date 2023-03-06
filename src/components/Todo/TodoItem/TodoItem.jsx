import React, { useContext } from "react";
import CHECK from "../../../assets/icon-check.svg";
import styles from "./TodoItem.module.css";
import { useStore } from "../../../wideState/wide-state-hook";
import ThemeContext from "../../../ThemeContext/theme-context";
const TodoItem = ({ id, text, checked }) => {
  const Theme = useContext(ThemeContext).Theme;
  const dispatch = useStore(false)[1];
  const handleItem = () => {
    dispatch("CHECK_ITEM", id);
  };
  const handleRemove = () => {
    dispatch("REMOVE_ITEM", id);
  };
  let styleImg = styles.imgContainer;
  if (checked) {
    styleImg = `${styles.imgContainer} ${styles.checked}`;
  }
  const myStyles = Theme === "DARK" ? styles.darkTheme : styles.lightTheme;
  return (
    <li className={`${styles.Item} ${myStyles}`}>
      <div onClick={handleItem} className={styleImg}>
        <img src={checked ? CHECK : ""} alt="" />
      </div>
      <div className={styles.textContainer}>
        <p className={checked ? styles.complete : ""}>{text}</p>
        <span className={checked ? styles.complete : ""} onClick={handleRemove}>
          X
        </span>
      </div>
    </li>
  );
};

export default React.memo(TodoItem);
