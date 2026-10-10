import { useState, type FormEvent } from "react";
import { Moon, Sun, X } from "lucide-react";
import { Header } from "./components/Header/Header";
import { ImageSlot } from "./components/ImageSlot/ImageSlot";
import { CardCarousel } from "./components/CardCarousel/CardCarousel";
import CartasMao from "./assets/img_1.jpeg";
import Principal from "./assets/img_2.jpeg";
import Foto from "./assets/img_7.jpeg";
import Composicao from "./assets/img.png";
import Kit from "./assets/img_6.jpeg";
import KitCompra from "./assets/img_1.png";
import "./App.css";
import { addPayment, type Payment } from "./services/payment";
function App() {
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);

  const handlePurchaseSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Pedido:", data);
    addPayment(data as Partial<Payment>);

    setPurchaseModalOpen(false);
  };

  return (
    <>
      <Header />
      <main>
        {/* 1 - HERO */}
        <section className="hero">
          <div className="hero__image">
            <ImageSlot
              src={Principal}
              style={{ objectFit: "cover" }}
              label="Imagem principal do oráculo"
            />
          </div>
          <div className="hero__content">
            <span className="section-symbol">☼</span>
            <h1>Pequenas Escolhas</h1>
            <h2>
              Um oráculo para inspirar os seus dias.
            </h2>
            <div className="separator" />
            <p>
              44 mensagens para encontrar uma pequena e possível
              escolha… hoje!
            </p>
          </div>
        </section>
        {/* 2 - APRESENTAÇÃO */}
        <section
          id="apresentacao"
          className="presentation"
        >
          <div className="presentation__portrait">
            <ImageSlot
              src={Foto}
              label="Sua foto / foto do atelier"
            />
          </div>
          <div className="presentation__content">
            <span className="section-symbol">☼</span>
            <h2>
              Um oráculo que nasceu de{" "}
              <span className="italic">
                pequenas escolhas
              </span>{" "}
              diárias.
            </h2>
            <p>
              Este projeto é o fruto de uma semente que foi plantada
              há muitos anos: o desejo de que cada maravilhosa possa
              dar a si mesma a chance de transformar seus dias através
              daquilo que é possível no agora.
            </p>
            <p>
              Foram meses reunindo os melhores "café com cristal",
              criando, testando, refazendo, escolhendo papéis,
              formatos e cores, e acolhendo possibilidades até que
              ele finalmente pudesse chegar até você.
            </p>
            <p className="presentation__highlight">
              Pequenas Escolhas é um convite para você parar,
              respirar e sentir o que pode tornar o seu dia
              um dia bom.
            </p>
          </div>
          <div className="presentation__image">
            <ImageSlot
              src={Composicao}
              label="Foto de uma carta / composição"
            />
          </div>
        </section>
        {/* 3 - CARTAS */}
        <section className="messages">
          <div className="messages__title">
            <span className="section-symbol">☼</span>
            <h2>
              Algumas mensagens que podem encontrar você todos os dias:
            </h2>
            <div className="short-line" />
          </div>
          <div className="messages__carousel">
            <CardCarousel />
          </div>
        </section>
        {/* 4 - COMO USAR */}
        <section
          id="como-usar"
          className="feature"
        >
          <div className="feature__content">
            <span className="section-symbol">☼</span>
            <h2>Como usar?</h2>
            <p>
              <strong>
                Não existe um jeito certo.
              </strong>
            </p>
            <p>
              Você pode tirar uma carta pela manhã, abrir o baralho
              quando sentir que precisa de um conselho para clarear
              a mente, ou simplesmente escolher uma carta sempre que
              perceber que está deixando de contemplar a beleza
              do cotidiano.
            </p>
            <p className="feature__highlight">
              Você já sabe como fazer, só falta o seu oráculo chegar.
              Confia!
            </p>
          </div>
          <div className="feature__image">
            <ImageSlot
              src={CartasMao}
              style={{ objectFit: "cover" }}
              label="Foto das cartas nas mãos"
            />
          </div>
        </section>
        {/* 5 - O QUE VEM DENTRO */}
        <section className="feature feature--reverse">
          <div className="feature__image">
            <ImageSlot
              src={Kit}
              style={{ objectFit: "contain" }}
              styleSlot={{ background: "none" }}
              label="Foto do kit completo"
            />
          </div>
          <div className="feature__content">
            <span className="section-symbol">☼</span>
            <h2>O que vem dentro?</h2>
            <div className="content-item">
              <span>01</span>
              <p>
                <strong>44 cartas autorais</strong> com mensagens
                cultivadas ao longo dos últimos 4 anos. As cores
                que você vê são aquarelas originais do
                Água Marinha Atelier.
              </p>
            </div>
            <div className="content-item">
              <span>02</span>
              <p>
                <strong>Uma carta de abertura</strong>, que na verdade
                é um convite carinhoso para você se acolher enquanto
                acolhe o oráculo na sua rotina.
              </p>
            </div>
            <div className="content-item">
              <span>03</span>
              <p>
                <strong>Um saquinho de tecido</strong> feito
                especialmente para você guardar seu baralho e
                levá-lo para onde quiser.
              </p>
            </div>
            <p className="feature__final">
              Um trabalho feito artesanalmente e uma produção
              independente que me ensinou muito em cada etapa.
              Pequenas Escolhas carrega a força da semente,
              da raiz e do sonho que encontra um lugar para se
              nutrir e, enfim, florescer.
            </p>
          </div>
        </section>
        {/* 6 - ENVIO / IMAGEM / COMPRA */}
        <section className="pre-footer">
          <div className="pre-footer__text">
            <span className="section-symbol">☼</span>
            <h2>
              Este pacote contém amor!
            </h2>
            <p>
              A experiência de receber um pacotinho do Atelier
              é sempre um evento muito especial.
            </p>
            <p>
              O oráculo chega até você com o carinho das coisas
              feitas à mão, pensadas sem pressa e com muito cuidado.
              Eu mesma cuido de cada etapa pessoalmente e desejo que
              você se sinta abraçada por mim em cada detalhe.
            </p>
          </div>
          <div className="pre-footer__image">
            <ImageSlot
              src={KitCompra}
              label="Foto da embalagem / envio"
            />
          </div>
          <div className="pre-footer__purchase">
            <Sun
              className="purchase-card__sun"
              size={40}
              strokeWidth={1}
            />
            <h3>
              Pequenas Escolhas
            </h3>
            <span className="purchase-card__price">
              R$ 206 + Frete
            </span>
            <button
              type="button"
              className="purchase-card__button"
              onClick={() => setPurchaseModalOpen(true)}
            >
              <span>QUERO O MEU</span>
              <span>→</span>
            </button>
            <small>
              Pagamento via Pix ou Cartão.
            </small>
            <Moon
              className="purchase-card__moon"
              size={28}
              strokeWidth={1.1}
            />
          </div>
        </section>
        {/* ENCERRAMENTO */}
        <section className="closing">
          <span className="section-symbol">
            ☼
          </span>
          <p>
            E é isso, maravilhosa.
          </p>
          <h2>
            Talvez você não precise de uma grande resposta.
          </h2>
          <h3>
            Talvez uma pequena escolha seja mais do que suficiente.
          </h3>
          <p className="closing__question">
            Vamos juntas?
          </p>
        </section>
      </main>
      {/* MODAL */}
      {purchaseModalOpen && (
        <div
          className="modal-overlay"
          onMouseDown={() => setPurchaseModalOpen(false)}
        >
          <div
            className="purchase-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="purchase-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="purchase-modal__close"
              onClick={() => setPurchaseModalOpen(false)}
              aria-label="Fechar"
            >
              <X size={22} />
            </button>
            <Sun
              className="purchase-modal__symbol"
              size={34}
              strokeWidth={1}
            />
            <h2 id="purchase-modal-title">
              Quero o meu Pequenas Escolhas
            </h2>
            <p className="purchase-modal__intro">
              Preencha seus dados abaixo para registrar seu pedido.
            </p>
            <form
              className="purchase-form"
              onSubmit={handlePurchaseSubmit}
            >
              {/* 1 - DADOS PESSOAIS */}
              <fieldset className="purchase-form__section">
                <legend>
                  <span>01</span>
                  Dados pessoais
                </legend>
                <div className="purchase-form__grid">
                  <label className="form-field form-field--full">
                    <span>Nome completo</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>E-mail</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>WhatsApp com DDD</span>
                    <input
                      type="tel"
                      name="whatsapp"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="(31) 99999-9999"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>CPF</span>
                    <input
                      type="text"
                      name="cpf"
                      inputMode="numeric"
                      placeholder="000.000.000-00"
                      required
                    />
                  </label>
                </div>
              </fieldset>
              {/* 2 - ENTREGA */}
              <fieldset className="purchase-form__section">
                <legend>
                  <span>02</span>
                  Dados de entrega
                </legend>
                <div className="purchase-form__grid">
                  <label className="form-field">
                    <span>CEP</span>
                    <input
                      type="text"
                      name="cep"
                      autoComplete="postal-code"
                      inputMode="numeric"
                      placeholder="00000-000"
                      required
                    />
                  </label>
                  <label className="form-field form-field--full">
                    <span>Rua / Av.</span>
                    <input
                      type="text"
                      name="street"
                      autoComplete="address-line1"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Número</span>
                    <input
                      type="text"
                      name="number"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Complemento</span>
                    <input
                      type="text"
                      name="complement"
                      autoComplete="address-line2"
                    />
                  </label>
                  <label className="form-field">
                    <span>Bairro</span>
                    <input
                      type="text"
                      name="district"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Cidade</span>
                    <input
                      type="text"
                      name="city"
                      autoComplete="address-level2"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Estado</span>
                    <input
                      type="text"
                      name="state"
                      autoComplete="address-level1"
                      placeholder="MG"
                      maxLength={2}
                      required
                    />
                  </label>
                </div>
              </fieldset>
              {/* 3 - FORMA DE ENVIO */}
              <fieldset className="purchase-form__section">
                <legend>
                  <span>03</span>
                  Forma de envio
                </legend>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="correios"
                      required
                    />
                    <span className="radio-option__content">
                      <strong>Via Correios</strong>
                      <small>
                        Frete calculado separadamente.
                      </small>
                    </span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="bh"
                      required
                    />
                    <span className="radio-option__content">
                      <strong>Sou de BH</strong>
                      <small>
                        Vamos combinar a retirada ou entrega.
                      </small>
                    </span>
                  </label>
                </div>
              </fieldset>
              {/* 4 - PAGAMENTO */}
              <fieldset className="purchase-form__section">
                <legend>
                  <span>04</span>
                  Forma de pagamento
                </legend>
                <div className="radio-group radio-group--horizontal">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pix"
                      required
                    />
                    <span className="radio-option__content">
                      <strong>Pix</strong>
                    </span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cartao"
                      required
                    />
                    <span className="radio-option__content">
                      <strong>Cartão de crédito</strong>
                    </span>
                  </label>
                </div>
                <p className="purchase-form__help">
                  O código Pix ou link para pagamento via cartão
                  será enviado pelo WhatsApp.
                </p>
              </fieldset>
              {/* OBSERVAÇÕES */}
              <div className="purchase-form__section">
                <label className="form-field form-field--full">
                  <span>Observações ou mensagem especial</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Escreva aqui se o oráculo for um presente para alguém, ou se quiser deixar um recadinho de amor (eu vou amar)!"
                  />
                </label>
              </div>
              {/* RECADO PRÉ-VENDA */}
              <div className="purchase-form__notice">
                <Moon
                  size={25}
                  strokeWidth={1}
                />
                <div>
                  <h3>
                    Pausa para um recadinho sobre os mimos da pré-venda
                  </h3>
                  <p>
                    O horário de envio deste formulário registra
                    automaticamente a sua ordem de chegada!
                  </p>
                  <p>
                    Assim que eu receber o seu pedido, confirmo com você
                    pelo WhatsApp a sua posição na pré-venda e quais
                    mimos especiais você garantiu.
                  </p>
                  <p>
                    Em breve te chamo com os detalhes da posição do seu
                    pedido e os dados para pagamento. Até já!
                  </p>
                </div>
              </div>
              <div className="purchase-modal__actions">
                <button
                  type="button"
                  className="purchase-modal__cancel"
                  onClick={() => setPurchaseModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="purchase-modal__submit"
                >
                  Enviar pedido
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
