import ThemeColors from './models/ThemeColors';
import { createStitches } from '@stitches/react';
import ThemeShadows from './models/ThemeShadows';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
   colors: {
     white: '#ffff'
   },
   sizes: {
     lg: '25px',
     xlg: '40px'
   },
   fontSizes: {
     sm: '15px',
     md: '18px',
     lg: '25px'
   },
   space: {
     md: '1rem',
     lg: '2rem',
   },
   shadows: {} as ThemeShadows,
   radii: {
     md: '5px',
     circle: '50%'
   },
   fonts: {
     josefin: 'Josefin Sans, sans-serif'
   }
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
  },
});