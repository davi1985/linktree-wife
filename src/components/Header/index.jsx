import { Container, Title, Image, Text } from './styles';
import logo from '../../assets/logo.jpg';

export const Header = () => {
  return (
    <Container>
      <Image src={logo} />

      <Title>Flor de Lís</Title>

      <Text>Moda Evangélica</Text>
    </Container>
  );
};
