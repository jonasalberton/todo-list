import Home from './pages/Home';
import { useState } from 'react';
import Theme from './models/Theme';
import DarkTheme from './themes/Dark';
import LightTheme from './themes/Light';
import ThemeContext from './themes/ThemeContext';
import { styled } from './stitches.config';
import localStorageService from './services/localStorageService';

const Body = styled('div', {
  background: '$backgroundApp',
  color: '$text',
  width: '100%',
  minHeight: '100vh',
});


function App() {

  const [currentTheme, setCurrentTheme] = useState<Theme>(localStorageService.getTheme() || 'light');

  const handleThemeChanged = (theme: Theme): void => {
    localStorageService.setTheme(theme);
    setCurrentTheme(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: handleThemeChanged }}>
      <Body className={currentTheme === 'dark' ? DarkTheme : LightTheme}>
        <Home></Home>
      </Body>
    </ThemeContext.Provider>
  )
}

export default App
