import { createTheme } from '../stitches.config';
import ThemeColors from '../models/ThemeColors';

const colors: ThemeColors = {
  backgroundApp: 'hsl(240, 20%, 12%)',
  textColor: 'white'
}

const DarkTheme = createTheme({
  colors
});

export default DarkTheme;