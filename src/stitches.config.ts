import ThemeColors from './models/ThemeColors';
import { createStitches } from '@stitches/react';

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
   },
   shadows: {
     md: 'rgb(50 50 93 / 25%) 0px 30px 60px -12px, rgb(0 0 0 / 30%) 0px 18px 36px -18px'
   },
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