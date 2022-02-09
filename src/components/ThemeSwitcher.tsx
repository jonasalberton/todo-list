import { useContext } from 'react';
import sun from '../assets/icon-sun.svg';
import moon from '../assets/icon-moon.svg';
import { styled } from '../stitches.config';
import ThemeContext from '../themes/ThemeContext';

const Switcher = styled('button', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    background: '#ffffff30'
  }
});

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <Switcher onClick={toggleTheme}>
      <img src={theme === 'dark'? sun : moon} alt="Theme icon" />
    </Switcher>
  );  
}

export default ThemeSwitcher;