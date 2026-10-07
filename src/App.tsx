import { useState } from "react";
import { Moon, Sun, X } from "lucide-react";

import { Header } from "./components/Header/Header";
import { ImageSlot } from "./components/ImageSlot/ImageSlot";
import { CardCarousel } from "./components/CardCarousel/CardCarousel";

import "./App.css";

function App() {
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);

  return (
    <>
      <Header />

      <main>
        {/* 1 - HERO */}
        <section className="hero">
          <div className="hero__image">
            <ImageSlot label="Imagem principal do oráculo" />
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
            <ImageSlot label="Sua foto / foto do atelier" />
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
            <ImageSlot label="Foto de uma carta / composição" />
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
              <strong>Não existe um jeito certo.</strong>
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
            <ImageSlot label="Foto das cartas nas mãos" />
          </div>
        </section>

        {/* 5 - O QUE VEM DENTRO */}
        <section className="feature feature--reverse">
          <div className="feature__image">
            <ImageSlot label="Foto do kit completo" />
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

            <h2>Este pacote contém amor!</h2>

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
            <ImageSlot label="Foto da embalagem / envio" />
          </div>

          <div className="pre-footer__purchase">
            <Sun
              className="purchase-card__sun"
              size={40}
              strokeWidth={1}
            />

            <h3>Pequenas Escolhas</h3>

            <span className="purchase-card__price">
              R$ 206
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
              Pagamento via Pix ou PayPal.
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
          <span className="section-symbol">☼</span>

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

            <h2>Pequenas Escolhas</h2>

            <div className="purchase-modal__form">
              Form
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
                type="button"
                className="purchase-modal__submit"
                onClick={() => setPurchaseModalOpen(false)}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;