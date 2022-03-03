import { styled } from '../stitches.config';

const Container = styled('div', {
  display: 'flex',
  padding: '$md',
  boxShadow: '$md',
  alignItems: 'center',
  boxSizing: 'border-box',
  background: '$component',
  borderBottom: '1px solid $border',
  variants: {
    border: {
      roundTop: {
        borderRadius: '$md $md 0 0'
      },
      noBorder: {
        borderRadius: '0'
      },
      roundBottom: {
        borderRadius: '0 0 $md $md'
      },
    },
    justify: {
      between: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    },
    completed: {
      true: {
        color: '$disableText',
        textDecoration: 'line-through'
      }
    },
  
  }
});

export default Container;