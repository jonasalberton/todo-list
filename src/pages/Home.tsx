import { styled } from '../stitches.config';
import TodoList from '../components/TodoList';
import darkBg from '../assets/bg-desktop-dark.jpg';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Body = styled('div', {
  display: 'flex',
  padding: '30px',
  justifyContent: 'center'
})

const Header = styled('div',  {
  position: 'absolute',
  width: '100%',
  top: 0,
  height: '300px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
});

const Container = styled('div', {
  width: '100%',
  maxWidth: '600px',
  height: '1000px',
  background: 'blue',
  zIndex: '1'
})

function Home() {

  return (
    <Body>
      <Header style={{backgroundImage: `url(${darkBg})`}}></Header>
      <Container>
        <ThemeSwitcher></ThemeSwitcher>
        <TodoList></TodoList>
      </Container>
    </Body>
  )
}

export default Home
