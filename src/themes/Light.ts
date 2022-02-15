import { createTheme } from '../stitches.config';
import ThemeColors from '../models/ThemeColors';

const colors: ThemeColors = {
  backgroundApp: 'hsl(240, 0%, 98%)',
  textColor: 'hsl(235, 19%, 35%)'
}

const LightTheme = createTheme({
 colors
});

export default LightTheme;
