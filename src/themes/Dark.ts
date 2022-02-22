import { createTheme } from '../stitches.config';
import ThemeColors from '../models/ThemeColors';

const colors: ThemeColors = {
  backgroundApp: 'hsl(240, 20%, 12%)',
  text: 'hsl(234, 39%, 85%)',
  disableText: 'hsl(234, 11%, 52%)',
  component: 'hsl(235, 24%, 19%)',
  border: 'hsl(232, 18%, 25%)',
  checkboxBorder: 'hsl(232, 18%, 25%)',
  primary: 'hsl(220, 98%, 61%)',
}

const DarkTheme = createTheme({
  colors
});

export default DarkTheme;