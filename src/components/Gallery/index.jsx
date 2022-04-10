import { Slideshow } from "../Slider";
import { Container, Back, Address } from "./styles";
import pinIcon from "../../assets/pin.png";

export const Gallery = () => {
  return (
    <Container>
      <h1>Alguns dos nossos produtos</h1>

      <Slideshow />

      <Address>
        <img src={pinIcon} alt="" />

        <span>
          Serra da Praia de Peroba <br />
          n°91, Icapuí-CE
        </span>
      </Address>

      <Back href="/">&#x21d0; Voltar</Back>
    </Container>
  );
};
