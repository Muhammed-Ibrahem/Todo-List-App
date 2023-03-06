import React, { useContext } from "react";
import TodoHeader from "./Todo-Header/TodoHeader";
import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem/TodoItem";
import Footer from "./Todo-Footer/Footer";
import { useStore } from "../../wideState/wide-state-hook";
import ThemeContext from "../../ThemeContext/theme-context";
const TodoList = () => {
  const Theme = useContext(ThemeContext).Theme;
  const state = useStore()[0];
  let itemsList;
  if (state.ItemsFilter === "ALL") {
    itemsList = state.TodoItems.map((e) => {
      return (
        <TodoItem key={e.id} id={e.id} text={e.text} checked={e.checked} />
      );
    });
    if (!itemsList.length)
      itemsList = <p className={styles.empty}>Feeling Empty? Add Some Goals</p>;
  }
  if (state.ItemsFilter === "ACTIVE") {
    const filteredItems = state.TodoItems.filter((e) => e.active);
    itemsList = filteredItems.map((e) => {
      if (e.active) {
        return (
          <TodoItem key={e.id} id={e.id} text={e.text} checked={e.checked} />
        );
      }
    });
    if (!itemsList.length && state.TodoItems.length)
      itemsList = (
        <p className={styles.empty}>
          Great Job, You've Completed All Your Tasks!
        </p>
      );
    if (!state.TodoItems.length) {
      itemsList = (
        <p className={styles.empty}>
          Looks like you got no Todos, What about creating one?
        </p>
      );
    }
  }
  if (state.ItemsFilter === "COMPLETED") {
    const filteredItems = state.TodoItems.filter((e) => e.checked);
    itemsList = filteredItems.map((e) => {
      if (e.checked) {
        return (
          <TodoItem key={e.id} id={e.id} text={e.text} checked={e.checked} />
        );
      }
    });
    if (!itemsList.length && state.TodoItems.length)
      itemsList = (
        <p className={styles.empty}>
          Stop procrastinating & Complete your Todos!
        </p>
      );
    if (!state.TodoItems.length) {
      itemsList = (
        <p className={styles.empty}>What about creating some Todos first?</p>
      );
    }
  }
  const themeStyle = Theme === "DARK" ? styles.darkTheme : styles.lightTheme;
  return (
    <section className={`${styles.TodoList} ${themeStyle}`}>
      <TodoHeader />
      <ul className={styles.Items}>{itemsList}</ul>
      <Footer />
    </section>
  );
};

export default TodoList;
