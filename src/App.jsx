import Layout from "./UI/LAYOUT/Layout";
import TodoList from "./components/Todo/TodoList";
import ThemeContext from "./ThemeContext/theme-context";
import { useContext, useEffect } from "react";
function App() {
  const ctx = useContext(ThemeContext);
  useEffect(() => {
    const BODY = document.body;
    BODY.className = ctx.Theme === "DARK" ? "darkTheme" : "lightTheme";
  }, [ctx.Theme]);
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
}

export default App;
