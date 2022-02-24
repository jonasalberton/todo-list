import Theme from '../models/Theme';
import { createContext } from "react";

type Context = {
  theme: Theme,
  setTheme: (field: Theme) => void
}

const ThemeContext = createContext<Context>({theme: 'dark', setTheme: () => ''});

export default ThemeContext;