import { createContext } from "react";
import Theme from '../models/Theme';

type Context = {
  theme: Theme,
  setTheme: (field: Theme) => void
}

const ThemeContext = createContext<Context>({theme: 'dark', setTheme: () => ''});

export default ThemeContext;