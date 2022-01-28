import { styled } from '../stitches.config';
import darkBg from '../assets/bg-desktop-dark.jpg';

const Body = styled('div', {
  display: 'flex',
  justifyContent: 'center'
})

const Header = styled('img',  {
  position: 'fixed',
  zIndex: '-1',
  width: '100%',
  top: 0,
});

const Container = styled('div', {
  width: '100%',
  maxWidth: '600px',
  backgroundColor: 'red',
  height: '100vh'
})

function Home() {

  return (
    <Body>
      <Header src={darkBg}></Header>
      <Container></Container>
    </Body>
  )
}

export default Home
