import "./CardCarousel.css";

const cards = [
  {
    text: "Encontrar beleza no cotidiano, e dar pequenos descansos ao seu dia.",
    tone: "rose",
  },
  {
    text: "O que sua intuição já avisou e você ainda escolhe ignorar?",
    tone: "sand",
  },
  {
    text: "Você é protegida e amparada. Confia.",
    tone: "blue",
  },
  {
    text: "Seja leve. Há sutilezas belíssimas acontecendo agora mesmo.",
    tone: "beige",
  },
  {
    text: "O mundo precisa da sua luz. Reconheça o que te nutre.",
    tone: "pink",
  },
];

const carouselCards = [
  ...cards,
  ...cards,
];

export function CardCarousel() {
  return (
    <div className="card-carousel">
      <div className="card-carousel__track">
        {carouselCards.map((card, index) => (
          <article
            key={`${card.text}-${index}`}
            className={`oracle-card oracle-card--${card.tone}`}
          >
            <span className="oracle-card__symbol">
              ☼
            </span>

            <p>
              {card.text}
            </p>

            <span className="oracle-card__footer">
              ☾
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}