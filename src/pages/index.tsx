/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/inline-script-id */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Script from 'next/script'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
      <div className={styles.main}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <title>PIAIC</title>
        <div className={styles.navbar}>
          <div className={styles["container"] + " " + styles["flex"]}>
          <Link href="/" className={styles.logo}> <img src="/piaiclogo.png"/></Link>
            <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Howitwork">How it work</Link></li>
                <li><Link href="/available">Available Programs</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/wit">WIT</Link></li>
                <li><Link href="https://portal.piaic.org/signup">Apply</Link></li>  
              </ul>
            </nav>
          </div>
        </div>
        <section className={styles.showcase}>
          <div className={styles["container"] + " " + styles["grid"]}>
            <div className={styles.showcasetext}>
              <div className={styles.showcase1}>
              <h1>Presidential Initiative</h1>
              </div>
              <h2>for Artificial Intelligence & Computing (PIAIC)</h2>
              <p>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
              <span className={styles["btn"] + " " + styles["btnoutline"]}><Link href="https://portal.piaic.org/">Apply Now</Link></span>
            </div>
            <div className={styles.showcaseform}>
              <img src="/uncle.png"/>  
            </div>
          </div>
        </section>
        <section className={styles.stats}>
          <div className={styles.container}>
            <h2 className={styles.textcenter}>Available Programs</h2>
            <div className={styles["grid"] + " " + styles["grid3"] + " " + styles["textcenter"] + " " + styles["my8"]}>
              <div className={styles.statsitem}>
                {/* <h3>5,000+</h3> */}
                <p className={styles.textsecondary}>Artificial Intelligence</p>
              </div>
              <div className={styles.statsitem}>
                {/* <h3>1,000+</h3> */}
                <p className={styles.textsecondary}>Cloud Native & Mobile Web Computing Specialist</p>
              </div>
              <div className={styles.statsitem}>
                {/* <h3>100+</h3> */}
                <p className={styles.textsecondary}>Blockchain</p>
              </div>
              <div className={styles.statsitem4}>
                {/* <h3>100+</h3> */}
                <p className={styles.textsecondary}>Internet of Things and AI</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.cli}>
          <div className={styles["container"] + " " + styles["grid"] + " " + styles["my5"]}>
            {/* <img src="images/cli.png" alt="" /> */}
            <div className={styles.card}>
              <h3>Central Bank Digital Currencies (CBDCs)</h3>
            </div>
            <div className={styles.card}>
              <h3>Stablecoins</h3>
            </div>
            <div className={styles.card}>
              <h3>Cryptocurrency & Tokens</h3>
            </div>
          </div>
        </section>
        <section className={styles["featuressubhead"] + " " + styles["bgprimary"] + " " + styles[""] + " " + styles["py2"]}>
         <div className={styles["container"] + " " + styles["grid"]}>
            <div>
              <h1 className={styles.lg}>Video</h1>
              <p className={styles["lead"] + " " + styles["my1"]}>
              </p>
              <div className='ifvideo'>
              <iframe data-aos="fade-in" className={"hw hh PresidentLaunchingWeb-video-iframe aos-init aos-animate"} height={450} width={880} src="https://www.youtube.com/embed/m4g0zd4E_bo"></iframe>
              </div>
              <span className={styles["btn"] + " " + styles["btndark"]}><Link href="https://www.youtube.com/@PIAIC/playlists">More Video</Link></span>
            </div>
          </div>
        </section>
        <section className={styles["featuressubhead"] + " " + styles["bglight"] + " " + styles["p-3"]}>
         <div className={styles["container"] + " " + styles["grid"]}>
            <div>
              <h1 className={styles.md}>Image</h1>
              <img src="https://www.piaic.org/static/media/Launching-site-image2.c147d1bb.jpg"/>
            </div>
          </div>
        </section>
        <footer className={styles["footer"] + " " + styles["bgdark"] + " " + styles["py5"]}>
          <div className={styles["container"] + " " + styles["grid"] + " " + styles["grid3"]}>
            <div className={styles.social}>
              <h1 className='main1'>PIAIC</h1>
              <p>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
              <Link href="https://github.com/panaverse"><i className="fab fa-github fa-2x" /></Link>
              <Link href="https://www.youtube.com/@PIAIC  "><i className="fab fa-youtube fa-2x" /></Link>
              <Link href="https://twitter.com/piaicofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor  "><i className="fab fa-twitter fa-2x" /></Link>
              <Link href="https://www.facebook.com/groups/piaic/"><i className="fab fa-facebook fa-2x" /></Link>
            </div>
            <div>
              <h1 className='main2'>Links</h1>
              <nav>
              <ul>
                <li><Link href="/"></Link></li>
                <li><Link href="/Howitwork">How it work</Link></li>
                <li><Link href="/available">Available Programs</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/wit">WIT</Link></li>
                <li><Link href="https://portal.piaic.org/signup">Apply</Link></li>
              </ul>
            </nav>
            </div>
            <div>
              <h1 className='main3'>Strategic Partners</h1>
              <Link href="https://www.saylaniwelfare.com/en" className={styles.logo2}> <img src="/saylaniLogo.png"/></Link>
              <Link href="https://www.panacloud.ai/" className={styles.logo}> <img src="/panalogo.png"/></Link>
            </div>
          </div>
          <p className={styles["bgfooter"] + " " + styles["textcenter"] + " " + styles["p-3"] + " " + styles["link"]}>© Copyrighted and Designed by <Link href="https://github.com/Anasshahid2004">Anas Shahid<i className="fab fa-github fa-1x" /></Link></p>
        </footer>
      </div>
    </>
    );
}