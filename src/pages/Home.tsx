import Header from '../components/Header';
import { styled } from '../stitches.config';
import TodoList from '../components/TodoList';
import Toolbar from '../components/Toolbar';

const Container = styled('div', {
  display: 'flex',
  padding: '30px',
  justifyContent: 'center'
})

const Body = styled('div', {
  width: '100%',
  maxWidth: '600px',
  zIndex: '1'
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
