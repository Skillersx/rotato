import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rotato</title>
        <meta name="description" content="Rotating Potato is a memecoin we buy when rotating profits from other memecoin pumps. Rotato, it compounds because that's what it does." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rotato.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`} style={{ backgroundColor: '#2F2F2D' }}>
        <h1>Rotato</h1>
        <h3 style={{ color: 'lightgray' }}>
        Rotating Potato is a memecoin we buy when rotating profits from other memecoin pumps. Rotato, it compounds because that's what it does.
        </h3>
        <h4  style={{ color: 'lightgray' }}>No presales, no taxes, just rotating your profits, share with your frens.</h4>
        <img  
          src="https://i.imgur.com/9764Rc8.png"
          alt="Rotato"
          className={styles.rotate}
          style={{
            height: '20vh',
          }}
        />
 
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '80vw' }}>
          <a href="https://www.pump.fun/D1B7wS2MLJFd7UwbUZb9QhR1e4HDm7VXyqEUKHRrcsv4" target="_blank" rel="noreferrer">
            <button style={{ height: '6vh', width: '20vw' }}>
              Buy
            </button>
          </a>
          <a href="https://twitter.com/rotatosol" target="_blank" rel="noreferrer">
            <button style={{ height: '6vh', width: '20vw' }}>
              X/Twitter
            </button>
          </a>  
          <a href="https://t.me/+xM9kBnGUir1iNjRk" target="_blank" rel="noreferrer">
            <button style={{ height: '6vh', width: '20vw' }}>
              Telegram
            </button>
          </a>
        </div>
      </main>
    </>
  );
}
