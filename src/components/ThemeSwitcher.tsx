import { useContext } from 'react';
import sun from '../assets/icon-sun.svg';
import moon from '../assets/icon-moon.svg';
import { styled } from '../stitches.config';
import ThemeContext from '../themes/ThemeContext';

const Switcher = styled('button', {
  width: '$xlg',
  height: '$xlg',
  outline: 'none',
  border: 'none',
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '$circle',
  justifyContent: 'center',
  background: 'transparent',
  '&:hover': {
    background: '#ffffff30'
  }
});



function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeIcon = theme === 'dark'? sun : moon;

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <Switcher onClick={toggleTheme}>
      <img src={themeIcon} alt="Theme icon" />
    </Switcher>
  );  
}

export default ThemeSwitcher;
