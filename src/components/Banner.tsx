// components/Banner.tsx
import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/image2.png"
          alt="Logo da empresa"
          width={400}
          height={500}
          className={styles.bannerPicture}
          priority
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.scrollText}>
          <p>
            A <span className={styles.highlight}>PRECJUSPB</span> é uma empresa especializada na compra de precatórios
            federais, estaduais e municipais, com foco total na escuta do cliente,
            na transparência dos processos e na agilidade para transformar
            direitos em soluções reais.
            <br />
            <br />
            Nosso atendimento vai muito além de números: acompanhamos o credor ou
            herdeiro desde a simulação até o pagamento, explicando com clareza
            cada etapa e respeitando o momento de quem, muitas vezes, já esperou
            demais.
            <br />
            <br />
            Atuamos com seriedade na análise dos processos, na atualização dos
            valores (juros, correções e deságios) e na elaboração de propostas
            justas, sempre considerando as particularidades de cada caso. Também
            auxiliamos na parte documental, inclusive com herdeiros e inventários,
            sempre com o apoio de nossa equipe jurídica.
            <br />
            <br />
            A <span className={styles.highlight}>PRECJUSPB</span> conquistou a confiança de credores em todo o Brasil por
            construir uma imagem humana, ética e transparente, garantindo
            segurança jurídica sem juridiquês e facilitando o recebimento justo e
            rápido dos valores devidos.
          </p>
        </div>
      </div>
    </div>
  );
}
