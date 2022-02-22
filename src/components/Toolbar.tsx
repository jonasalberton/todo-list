import { styled } from '../stitches.config';
import ThemeSwitcher from './ThemeSwitcher';

const Title = styled('div', {
  color: 'White',
  fontSize: '40px',
  fontWeight: 'bold',
  letterSpacing: '7px',
  textTransform: 'uppercase',
})

const TitleContainer = styled('div', {
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

function Toolbar() {
  
  return (
    <TitleContainer>
      <Title>Todo</Title>
      <ThemeSwitcher/>
  </TitleContainer>
  )
}

export default Toolbar;