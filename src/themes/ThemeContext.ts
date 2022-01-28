import { createContext } from "react";

type Context = {
  theme: 'dark' | 'light',
  setTheme: (field: 'dark' | 'light') => void
}

const ThemeContext = createContext<Context>({theme: 'dark', setTheme: () => ''});

export default ThemeContext;