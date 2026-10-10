import "./CardCarousel.css";

import card01 from "../../assets/Carousel/1.png";
import card02 from "../../assets/Carousel/2.png";
import card03 from "../../assets/Carousel/3.png";
import card04 from "../../assets/Carousel/4.png";
import card05 from "../../assets/Carousel/5.png";
import card06 from "../../assets/Carousel/6.png";
import card07 from "../../assets/Carousel/7.png";
import card08 from "../../assets/Carousel/8.png";
import card09 from "../../assets/Carousel/9.png";
import card10 from "../../assets/Carousel/10.png";

const cards = [
  {
    src: card01,
    alt: "Carta Pequenas Escolhas 01",
  },
  {
    src: card02,
    alt: "Carta Pequenas Escolhas 02",
  },
  {
    src: card03,
    alt: "Carta Pequenas Escolhas 03",
  },
  {
    src: card04,
    alt: "Carta Pequenas Escolhas 04",
  },
  {
    src: card05,
    alt: "Carta Pequenas Escolhas 05",
  },
  {
    src: card06,
    alt: "Carta Pequenas Escolhas 06",
  },
  {
    src: card07,
    alt: "Carta Pequenas Escolhas 07",
  },
  {
    src: card08,
    alt: "Carta Pequenas Escolhas 08",
  },
  {
    src: card09,
    alt: "Carta Pequenas Escolhas 09",
  },
  {
    src: card10,
    alt: "Carta Pequenas Escolhas 10",
  },
];

/*
 * Duplicamos as cartas para criar o efeito
 * de carrossel infinito.
 */
const carouselCards = [...cards, ...cards];

export function CardCarousel() {
  return (
    <div className="card-carousel">
      <div className="card-carousel__track">
        {carouselCards.map((card, index) => (
          <div
            className="card-carousel__item"
            key={`${card.alt}-${index}`}
          >
            <img
              src={card.src}
              alt={card.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}