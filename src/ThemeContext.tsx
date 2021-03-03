import { createContext } from "react";

const ThemeContext = createContext<[String, (theme: string) => void]>([
  "green",
  () => {}
]);

export default ThemeContext;
