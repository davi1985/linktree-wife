import { links } from '../../data/links';
import { Container, Link, Info } from './styles';

export const Links = () => {
  return (
    <Container>
      {links.map(link => (
        <Link>
          <Info href={link.url}>{link.name}</Info>
        </Link>
      ))}
    </Container>
  );
};
