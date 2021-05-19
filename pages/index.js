import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <head>
        <title>Seth Hogue's Portfolio</title>
      </head>

      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Seth Hogue</h1>
          <p className={styles.description}>Full-Stack Software Engineer</p>
        </div>
      </div>
    </div>
  )
}
