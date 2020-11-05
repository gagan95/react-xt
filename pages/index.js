import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Filter from './../component/Filter';
import LaunchCard from './../component/LaunchCard';
import axios from 'axios'
export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <html lang={"en"} />
        <title>Gagan XT assignment</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="SpaceX Launch Programs."></meta>
      </Head>

      {/* Header Section */}
      <header className={styles.header}>
        <h1>SpaceX Launch Programs</h1>
      </header>
      {/* Header Ends */}

      {/* Body Starts */}
      <main className={styles.main}>
        <>
          <Filter />
          <LaunchCard data={data} />
        </>
      </main>
      {/* Body Ends */}
      {/* Footer section  */}
      <footer className={styles.footer}>
        <p><b>Developed by: </b>Gagan V</p>
      </footer>
      {/* Footer ends */}
    </div>
  )
}


// Data Render Server Side

export async function getServerSideProps(context) {
  // getting queryparam
  let val = Object.keys(context.query).map((key) => key + "=" + context.query[key]).join("&");

  // Calling Api 
  const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&${val ? val : ""}`)
  const data = await res.data;
  return {
    props: { data: data }, // will be passed to the page component as props
  }
}
