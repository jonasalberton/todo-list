import { createTheme } from '../stitches.config';
import ThemeColors from '../models/ThemeColors';
import ThemeShadows from '../models/ThemeShadows';

const shadows: ThemeShadows = {
  md: 'rgb(0 0 0) 0px 20px 30px -10px'
}

const colors: ThemeColors = {
  backgroundApp: 'hsl(240, 20%, 12%)',
  text: 'hsl(234, 39%, 85%)',
  disableText: 'hsl(234, 11%, 52%)',
  component: 'hsl(235, 24%, 19%)',
  border: 'hsl(232, 18%, 25%)',
  checkboxBorder: 'hsl(232, 18%, 25%)',
  primary: 'hsl(220, 98%, 61%)',
  purple: 'hsl(280, 87%, 65%)',
  cian: 'hsl(192, 100%, 67%)'
}

const DarkTheme = createTheme({
  colors,
  shadows
});

export default DarkTheme;