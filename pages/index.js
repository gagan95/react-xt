import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Filter from './../component/Filter'
export default function Home({ data }) {
  // console.log(data)
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
        <Filter />
      </main>
      <footer className={styles.footer}>
        <p><b>Developed by: </b>Gagan V</p>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log(context)
  const res = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
  const data = await res.json()
  // console.log(data)
  return {
    props: { data: data }, // will be passed to the page component as props
  }
}
