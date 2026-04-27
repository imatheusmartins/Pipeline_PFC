import { Carousel } from "antd";
import CarouselContent from "./CarouselContent";
import team from "@/assets/team.png";
import eye from "@/assets/eye.png";
import oftalmologista from "@/assets/oftalmologista.mp4";
import Content from "./Content";

const LandingCarousel = () => {
  return (
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={4000}>
      <CarouselContent background={team}>
        <Content
          buttonText="Saiba mais"
          typographyText="Conheça nossa equipe"
          typographyWidth="29rem"
          to=""
        />
      </CarouselContent>
      <CarouselContent background={eye}>
        <Content
          buttonText="Ver conteúdo"
          typographyText="Confira nosso referencial teórico"
          typographyWidth="59rem"
          to=""
        />
      </CarouselContent>
      <CarouselContent background={oftalmologista}>
        <Content
          buttonText="Conhecer projeto"
          typographyText="Entenda a proposta do projeto"
          typographyWidth="39rem"
          to=""
        />
      </CarouselContent>
    </Carousel>
  );
};

export default LandingCarousel;
