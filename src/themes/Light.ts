import { createTheme } from '../stitches.config';
import ThemeColors from '../models/ThemeColors';

const colors: ThemeColors = {
  backgroundApp: 'hsl(240, 0%, 98%)',
  textColor: 'black'
}

const LightTheme = createTheme({
 colors
});

export default LightTheme;