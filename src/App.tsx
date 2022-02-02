import { useState } from 'react';
import Home from './pages/Home';
import { styled } from './stitches.config';
import DarkTheme from './themes/Dark';
import LightTheme from './themes/Light';
import ThemeContext from './themes/ThemeContext';

const Body = styled('div', {
  background: '$background',
  width: '100%',
  minHeight: '100%',
})


function App() {

  const [currentTheme, setCurrentTheme] = useState<any>('light');

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: setCurrentTheme }}>
      <Body className={currentTheme === 'dark' ? DarkTheme : LightTheme}>
        <Home></Home>
      </Body>
    </ThemeContext.Provider>
  )
}

export default App
