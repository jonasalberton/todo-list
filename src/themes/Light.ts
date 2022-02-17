import { createTheme } from '../stitches.config';
import ThemeColors from '../models/ThemeColors';

const colors: ThemeColors = {
  backgroundApp: 'hsl(240, 0%, 98%)',
  text: 'hsl(235, 19%, 35%)',
  disableText: 'hsl(233, 11%, 84%)',
  component: 'hsl(0, 0%, 100%)',
  border: 'hsl(0, 0%, 96%)',
  checkboxBorder: 'hsl(0, 0%, 88%)',
  primary: 'hsl(220, 98%, 61%)'
}

const LightTheme = createTheme({
 colors
});

export default LightTheme;
