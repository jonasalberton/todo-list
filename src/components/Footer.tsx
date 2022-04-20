import { styled } from "@stitches/react";
import Container from "../elements/Container";
import Filter from "../models/Filter";

const Button = styled('button', {
  color: '$text',
  border: 'none',
  padding: '0 5px',
  cursor: 'pointer',
  background: 'none',
  '&:hover': {
    opacity: '.6'
  },
  variants: {
    selected: {
      true: {
        color: '$primary'
      }
    }
  }
});


const Typograph = styled('span', {
  fontSize: '$sm',
});


type Props = {
  length: number,
  filter: Filter,
  onChangeFilter: (filter: Filter) => void,
  onClearCompleted: () => void
}

function Footer(props: Props) {
  
  return (
    <Container border="roundBottom" justify="between">
      <Typograph>{props.length} itens</Typograph>
      <div>
        <Button onClick={() => props.onChangeFilter('All')} selected={props.filter === 'All'}>
          <Typograph >Todas</Typograph>
        </Button>

        <Button onClick={() => props.onChangeFilter('Active')} selected={props.filter === 'Active'}>
          <Typograph >Ativas</Typograph>
        </Button>

        <Button onClick={() => props.onChangeFilter('Completed')} selected={props.filter === 'Completed'}>
          <Typograph >Finalizadas</Typograph>
        </Button>
      </div>
        <Button onClick={props.onClearCompleted}>
          <Typograph>Remover Finalizadas</Typograph>
        </Button>
    </Container>
  );

}

export default Footer;