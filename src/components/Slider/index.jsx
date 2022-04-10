import { Fade } from "react-slideshow-image";
import { Image, Container } from "./styles";

import image01 from "../../assets/01.jpg";
import image02 from "../../assets/02.jpg";
import image03 from "../../assets/03.jpg";
import image04 from "../../assets/04.jpg";
import image05 from "../../assets/05.jpg";
import image06 from "../../assets/06.jpg";
import image07 from "../../assets/07.jpg";
import image08 from "../../assets/08.jpg";
import image09 from "../../assets/09.jpg";
import image10 from "../../assets/10.jpg";

export const Slideshow = () => (
  <Container>
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <Image src={image01} />
        </div>
        <div className="each-fade">
          <Image src={image02} />
        </div>
        <div className="each-fade">
          <Image src={image03} />
        </div>
        <div className="each-fade">
          <Image src={image04} />
        </div>
        <div className="each-fade">
          <Image src={image05} />
        </div>
        <div className="each-fade">
          <Image src={image06} />
        </div>
        <div className="each-fade">
          <Image src={image07} />
        </div>
        <div className="each-fade">
          <Image src={image08} />
        </div>
        <div className="each-fade">
          <Image src={image09} />
        </div>
        <div className="each-fade">
          <Image src={image10} />
        </div>
      </Fade>
    </div>
  </Container>
);
