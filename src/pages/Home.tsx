import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import { styled } from '../stitches.config';
import TodoList from '../components/TodoList';

const Container = styled('div', {
  display: 'flex',
  padding: '30px',
  justifyContent: 'center'
})

const Body = styled('div', {
  zIndex: 1,
  width: '100%',
  maxWidth: '600px',
})


function Home() {
  return (
    <Container>
      <Header></Header>
      <Body>
        <Toolbar></Toolbar>
        <TodoList></TodoList>
      </Body>
    </Container>
  )
}

export default Home
