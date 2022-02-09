import { createStitches } from '@stitches/react';
import ThemeColors from './models/ThemeColors';

const colors: Partial<ThemeColors> = {};

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
   colors: {} as ThemeColors,
   space: {
     md: '1rem'
   },
   radii: {
     md: '5px',
     circle: '50%'
   }
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
  },
});