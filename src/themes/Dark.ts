import { createTheme } from '../stitches.config';
import ThemeColors from '../models/ThemeColors';

const colors: ThemeColors = {
  backgroundApp: 'hsl(240, 20%, 12%)',
  textColor: 'hsl(235, 19%, 35%)'
}

const DarkTheme = createTheme({
  colors
});

export default DarkTheme;