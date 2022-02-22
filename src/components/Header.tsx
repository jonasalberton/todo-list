import { useContext } from 'react';
import { styled } from '../stitches.config';
import ThemeContext from '../themes/ThemeContext';
import darkBg from '../assets/bg-desktop-dark.jpg';
import lightBg from '../assets/bg-desktop-light.jpg';

const Heading = styled('div',  {
  top: 0,
  width: '100%',
  height: '300px',
  position: 'absolute',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});


function Header() {
  const { theme } = useContext(ThemeContext);
  const backgroundImage = theme === 'dark' ? darkBg : lightBg;

  return (
    <Heading style={{backgroundImage: `url(${backgroundImage})`}}></Heading>
  );
}

export default Header;