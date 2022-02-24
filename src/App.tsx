import Home from './pages/Home';
import { useState } from 'react';
import Theme from './models/Theme';
import DarkTheme from './themes/Dark';
import LightTheme from './themes/Light';
import { styled } from './stitches.config';
import ThemeContext from './themes/ThemeContext';
import localStorageService from './services/localStorageService';

const Body = styled('div', {
  width: '100%',
  color: '$text',
  minHeight: '100vh',
  background: '$backgroundApp',
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

export default App;
