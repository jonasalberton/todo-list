import { styled } from '../stitches.config';
import check from '../assets/icon-check.svg';

const Container = styled('div', {
  display: 'flex',
  position: 'relative',
  height: '25px',
  width: '25px',
  cursor: 'pointer',
  marginRight: '$md',
  flexShrink: '0',
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
  borderRadius: '$circle',
  cursor: 'pointer',
  zIndex: '2',
  position: 'absolute',
});

const Checkmark = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: '1',
  height: '25px',
  borderRadius: '50%',
  width: '25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(113deg, #57ddff, #c058f3)',
  variants: {
    checked: {
      true: {
        display: 'flex'
      },
      false: {
        display: 'none'
      }
    }
  }
});

type Props = {
  value: boolean,
  onChange?: (value: boolean) => void
}

function CheckBox({ value, onChange }: Props) {

  const handleInputChanged = () => {
    const newState = !value;

    if (!onChange) {
      throw new Error("You need to pass a (onChange) function prop");
    }

    console.log('aroo');
    
    onChange(newState);
  }

  return (
    <Container>
      <Input checked={value} type="checkbox" onChange={handleInputChanged} />
      <Checkmark checked={value}>
        <img src={check} alt="Task completed icon" />
      </Checkmark>
    </Container>
  );
}

export default CheckBox;