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
      background: ''
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
  },
});