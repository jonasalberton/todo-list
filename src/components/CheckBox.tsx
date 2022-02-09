import { styled } from '../stitches.config';

const Container = styled('div', {
  display: 'block',
  position: 'relative',
  height: '25px',
  width: '25px',
  cursor: 'pointer',
  marginRight: '$md',
  border: '2px solid #e0e0e0',
  borderRadius: '$circle',
  '&:hover': {
    border: '2px solid hsl(280, 87%, 65%)'
  }
});

const Input = styled('input', {
  opacity: 0,
  width: '25px',
  height: '25px',
  cursor: 'pointer',
  borderRadius: '50%'
});

const Checkmark = styled('span', {
  // position: 'absolute',
  // top: 0,
  // left: 0,
  // height: '25px',
  // width: '25px',
  // backgroundColor: '#eee'
});

function CheckBox() {

  return (
    <Container>
      <Input type="checkbox" />
      <Checkmark/>
    </Container>
  );
}

export default CheckBox;