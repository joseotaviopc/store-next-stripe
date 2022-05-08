import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JO Fotografia</title>
        <meta name="description" content="José Otavio Fotografia" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">JO Fotografia</Link>
        </h1>

        <p className={styles.description}>
          Escolha sua foto, sua moldura e faça seu quadro!
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="#">
              <Image width="3rem" height="3rem" layout='responsive' src="/images/onda-01.jpg" alt="Foto de um quadro" />
              <h3>Onda 01</h3><h4>R$ 499,00</h4>
              <p>Descrição da onda 01.</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="#">
              <Image width="3rem" height="3rem" layout='responsive' src="/images/onda-02.jpg" alt="Foto de um quadro" />
              <h3>Onda 02</h3><h4>R$ 499,00</h4>
              <p>Descrição da onda 02.</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="#">
              <Image width="3rem" height="3rem" layout='responsive' src="/images/onda-03.jpg" alt="Foto de um quadro" />
              <h3>Onda 03</h3><h4>R$ 499,00</h4>
              <p>Descrição da onda 03.</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="#">
              <Image width="3rem" height="3rem" layout='responsive' src="/images/onda-04.jpg" alt="Foto de um quadro" />
              <h3>Onda 04</h3><h4>R$ 499,00</h4>
              <p>Descrição da onda 04.</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="#">
              <Image width="3rem" height="3rem" layout='responsive' src="/images/onda-05.jpg" alt="Foto de um quadro" />
              <h3>Onda 05</h3><h4>R$ 499,00</h4>
              <p>Descrição da onda 05.</p>
            </a>
          </li>

        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por: JO Fotografia
          <span className={styles.logo}>
            {/* <Image src="/" alt="JO Fotografia Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}
