import { useState } from "react";

export default (props) => {
  let [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return props.render(theme, toggleTheme);
};
