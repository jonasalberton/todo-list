import { createTheme } from '../stitches.config';
import ThemeColors from '../models/ThemeColors';

const colors: ThemeColors = {
  backgroundApp: 'hsl(240, 20%, 12%)',
  text: 'hsl(235, 19%, 35%)',
  disableText: 'hsl(233, 11%, 84%)',
  component: 'hsl(235, 24%, 19%)',
  border: 'hsl(232, 18%, 25%);'
}

const DarkTheme = createTheme({
  colors
});

export default DarkTheme;