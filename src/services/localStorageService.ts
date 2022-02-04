import Theme from "../models/Theme";

const THEME = 'THEME';

const setTheme = (theme: Theme): void => {
  localStorage.setItem(THEME, theme);
}

const getTheme = (): Theme => {
  return localStorage.getItem(THEME) as Theme;
}

const localStorageService = {
  setTheme,
  getTheme
}

export default localStorageService