import styles from "./Hero.module.css";
import ThemeContext from "../../ThemeContext/theme-context";
import { useContext } from "react";
const Hero = () => {
  const Theme = useContext(ThemeContext).Theme;
  const myThemeStyles = Theme === "DARK" ? styles.darkTheme : styles.lightTheme;
  return <header className={`${styles.hero} ${myThemeStyles}`}></header>;
};

export default Hero;
