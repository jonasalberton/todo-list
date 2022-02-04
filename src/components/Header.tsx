import { useContext } from 'react';
import { styled } from '../stitches.config';
import ThemeContext from '../themes/ThemeContext';
import darkBg from '../assets/bg-desktop-dark.jpg';
import lightBg from '../assets/bg-desktop-light.jpg';

const Heading = styled('div',  {
  position: 'absolute',
  width: '100%',
  top: 0,
  height: '300px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});


function Header() {
  const { theme } = useContext(ThemeContext);
  const background = theme === 'dark' ? darkBg : lightBg;

  return (
    <Heading style={{backgroundImage: `url(${background})`}}></Heading>
  );
}

export default Header;