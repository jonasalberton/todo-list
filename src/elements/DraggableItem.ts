import { styled } from '../stitches.config';

const DraggableItem = styled('div', {
  display: 'block',
  height: '66px',
  transition: '.2s',
  variants: {
    marginTop: {
      true: {
        paddingTop: '90px'
      }
    },
    marginBotton: {
      true: {
        paddingBottom: '90px'
      }
    }
  }
})

export default DraggableItem;