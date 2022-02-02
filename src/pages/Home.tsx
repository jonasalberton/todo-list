import { styled } from '../stitches.config';
import TodoList from '../components/TodoList';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Header from '../components/Header';

const Body = styled('div', {
  display: 'flex',
  padding: '30px',
  justifyContent: 'center'
})

const Container = styled('div', {
  width: '100%',
  maxWidth: '600px',
  height: '1000px',
  zIndex: '1'
})

function Home() {

  return (
    <Body>
      <Header></Header>
      <Container>
        <ThemeSwitcher></ThemeSwitcher>
        <TodoList></TodoList>
      </Container>
    </Body>
  )
}

export default Home
