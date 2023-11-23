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
      <div className={styles.main}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <title>PIAIC | About</title>
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
              <h1>Dr. Arif-ur-Rehman Alvi.</h1>
              <p>Arif-ur-Rehman Alvi is a Pakistani dentist and politician currently serving as the 13th President of Pakistan, in office since 9 September 2018. He was a member of the National Assembly of Pakistan from June 2013 to May 2018 and again from August to September 2018.</p>
              <span className={styles["btn"] + " " + styles["btnoutline"]}><Link href="https://en.wikipedia.org/wiki/Arif_Alvi">Read More</Link></span>
            </div>
            <div className={styles["showcaseform"] + " " + styles["potrait"]}>
              <img src="/DrArifAlvi.jpg"/>
            </div>
          </div>
        </section>
        <section className={styles.stats}>
          <div className={styles.container}>
            <h2 className={styles.textcenter}></h2>
            <h3 className={styles["statsheading"] + " " + styles["textcenter"] + " " + styles["my1"]}>
            </h3>
          </div>
        </section>
        
        <section className={styles["featuressubhead"] + " " + styles["p-3"] + " " + styles["my-3"]}>
         <div className={styles["container"] + " " + styles["abouttext"]}>
           
            <div>
              <h1 className={styles.md}>Dr. Arif Alvi</h1>
              <h5>President of the Islamic Republic of Pakistan</h5>
              <p className={styles.lead}>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</p>
              <p className={styles.lead}>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate” . He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</p>
              <p className={styles.lead}>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</p>
              <p className={styles.lead}>Dr. Arif Alvi’s political career commenced with his pro-democracy struggle against the dictatorship of General Ayub Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being in 1996. He remained a member of the PTI’s Central Executive Committee since its inception and has held the offices of PTI President of Sindh (1997-2001), Central Vice President (2001-2006) and Secretary General (2006-2013). In line with Constitution of Pakistan, he resigned from all the positions of PTI before assuming the prestigious office of the President.</p>
              <p className={styles.lead}>During his tenure as the Secretary General of the party, Dr. Arif Alvi introduced social media platform in the politics of Pakistan. He was instrumental in holding intra-party election (2012-2013) and enabled millions of party members to digitally participate in the election process. He was elected as member of National Assembly from Karachi in 2013 and 2018 and was instrumental in drafting and the passage of many bills including one on Alternate Dispute Resolution. He also chaired the sub-committee of EVM’s, Digital Identification of voters and voting of overseas Pakistanis. The latter has finally come to fruition. Dr. Arif Alvi has keen interest in education and health sectors. Provision of basic facilities to the common man and uplifting the country’s image are very close to his heart. He considers people of Pakistan as the most precious asset and, therefore, accords special focus to human resource development in the country. He is happily married and has four children.</p>
              <span className={styles["btn"] + " " + styles["btndark"]}><Link href="https://en.wikipedia.org/wiki/Arif_Alvi">Read More</Link></span>
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
          <p className={styles["bgfooter"] + " " + styles["textcenter"] + " " + styles["p-3"] + " " + styles["link"]}>© Copyrighted and Designed by <Link href="https://github.com/Anasshahid2004">Anas Shahid <i className="fab fa-github fa-1x" /></Link></p>
        </footer>
      </div>
    
    </>
    );
}