import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gagan XT assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <p><b>Developed by: </b>Gagan V</p>
      </footer>
    </div>
  )
}
