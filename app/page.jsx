import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          React Holiday 2022 Learning
        </h1>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About Me</h2>
            <p>Find more about me and why I'm doing this course</p>
          </a>

          <a
            href="https://react.holiday/"
            className={styles.card}
          >
            <h2>React.Holiday Sign up</h2>
            <p>Follow along.</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="/social-links" className={styles.card}>
            <h2>Find More Of My Stuff</h2>
            <p>This has links to my social links.</p>
          </a>

          <a href="/hello" className={styles.card}>
            <h2>See async fetch component</h2>
            <p>This uses an async data-fetching.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
