import { styled } from '../stitches.config';
import check from '../assets/icon-check.svg';

const Container = styled('div', {
  width: '$lg',
  height: '$lg',
  display: 'flex',
  flexShrink: 0,
  cursor: 'pointer',
  marginRight: '$md',
  position: 'relative',
  border: '2px solid $checkboxBorder',
  borderRadius: '$circle',
  '&:hover': {
    border: '2px solid $purple'
  }
});

const Input = styled('input', {
  zIndex: 2,
  opacity: 0,
  width: '$lg',
  height: '$lg',
  cursor: 'pointer',
  position: 'absolute',
  borderRadius: '$circle',
});

const Checkmark = styled('span', {
  top: 0,
  left: 0,
  zIndex: 1,
  width: '$lg',
  height: '$lg',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  borderRadius: '$circle',
  justifyContent: 'center',
  background: 'linear-gradient(113deg, $cian, $purple)',
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
};

function CheckBox({ value, onChange }: Props) {

  const handleInputChanged = () => {
    onChange && onChange(!value);
  }

  return (
    <Container>
      <Input type="checkbox" checked={value} onChange={handleInputChanged}/>
      <Checkmark checked={value}>
        <img src={check} alt="Completed Task Icon" />
      </Checkmark>
    </Container>
  );
}

export default CheckBox;
