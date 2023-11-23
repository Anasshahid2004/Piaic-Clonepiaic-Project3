/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/inline-script-id */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.main}></div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <title>PIAIC | WIT</title>
        <div className={styles.navbar}>
          <div className={styles["container"] + " " + styles["flex"]}>
            <Link href="/" className={styles.logo}> <img src="/piaiclogo.png"/> </Link>
            <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Howitork">How it work</Link></li>
                <li><Link href="/available">Available Programs</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/wit">WIT</Link></li>
                <li><Link href="https://portal.piaic.org/signup">Apply</Link></li>  
              </ul>
            </nav>
          </div>
        </div>
        <section>
          <div className={styles.MG1}>
          <h1>How It Work</h1>
          <h2>PIAIC will launch classes in the following locations, one city at a time, in the following order</h2>
          <h3>City by City Roadmap</h3>
          <div className={styles.grid}>
          <div className={styles.MG2}><img width={200} src="/pakmap.png"/></div>
          <img src="/table.JFIF"/>
          </div>
          </div>
        </section>
        <section>
          <div className='second-point'>
          <p>To participate in the program and become eligible for the most prestigious credentials for AI, Cloud and Blockchain technologies in the world, students must complete the following process.</p>
          </div>
        </section>
        <section>
          <div className='third-point'>
            <p>All programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 6 sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing, Blockchain, Internet of Things, 5G and Software Defined Networking and Quantum Computing . Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year. </p>
          </div>
        </section>
        <section>
          <div className='fourth-point'>
            <p>Those students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students.
            <br />
            <br />
            The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.
            <br />
            <br />
            The fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter.</p>
          </div>
        </section>
        <section>
          <div className='fivth-point'>
            <p>Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds.</p>
          </div>
        </section>
        <section>
          <div className='sixth-point'>
            <p>Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications.</p>
          </div>
        </section>
        <section>
          <div className='seveth-point'>
            <p>For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.
              <br />
               Please note we are closed on Fridays.
               <br />
               For technical questions related to coursework, you may contact us via email at education@piaic.org.</p>
          </div>
        </section>
      <footer className={styles["footer"] + " " + styles["bgdark"] + " " + styles["py5"]}>
        <div className={styles["container"] + " " + styles["grid"] + " " + styles["grid3"]}>
          <div className={styles.social}>
            <h1 className='main1'>PIAIC</h1>
            <p>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>
            <Link href="https://github.com/panaverse"><i className="fab fa-github fa-2x" /></Link>
            <Link href="https://www.youtube.com/@panaverse"><i className="fab fa-youtube fa-2x" /></Link>
            <Link href="https://twitter.com/Panaverse_edu"><i className="fab fa-twitter fa-2x" /></Link>
            <Link href="https://www.facebook.com/panaverse.dao/"><i className="fab fa-facebook fa-2x" /></Link>
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
            <Link href="https://www.saylaniwelfare.com/en" className={styles.logo2}> <img src="/saylaniLogo.png" /></Link>
            <Link href="https://www.panacloud.ai/" className={styles.logo}> <img src="/panalogo.png" /></Link>
          </div>
        </div>
        <p className={styles["bgfooter"] + " " + styles["textcenter"] + " " + styles["p-3"] + " " + styles["link"]}>© Copyrighted and Designed by <Link href="https://github.com/Anasshahid2004">Anas Shahid <i className="fab fa-github fa-1x" /></Link></p>
      </footer>

    </>
    );
}