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
                <li><Link href="/Howitwork">How it work</Link></li>
                <li><Link href="/available">Available Programs</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/wit">WIT</Link></li>
                <li><Link href="https://portal.piaic.org/signup">Apply</Link></li>  
              </ul>
            </nav>
          </div>
        </div>
        <section>
          <div className='paragraph1'><img width={25000} src="women.jpeg"/>
          <p className='paragraph'>
          The Women Empowerment Division of the Presidential Initiative for Artificial Intelligence & Computing is committed to the empowerment and autonomy <br /> of women in Pakistan.<br></br><br/>
          The single most important channel for the empowerment of women is education. The Women Empowerment Division is committed to providing the best technical education in the world with the flexibility to allow just about anyone to participate and improve their lives. The primary objective of the Women Empowerment Division is to provide a platform via which women can receive education and training to jumpstart their careers in the global technology industry.<br></br><br/>
          The Women Inclusion in Technology project is the largest initiative on women education in Pakistan. The main of the project is to drive female participation in the technology industry in Pakistan from less than 5% to 30% over the next two years. Via this project, PIAIC is propagating awareness and training on the latest, most state-of-the-art technologies to women in Pakistan. The Women Empowerment Division will aid highly skilled women in technology to establish themselves as entrepreneurs and leaders in the technology industry not only in Pakistan but also around the world.</p>
          </div>    
        </section>
        <section>
         <div>
           <h1 className='heading'>WOMEN INCLUSION IN TECHNOLOGY</h1>
           <p className='heading1'>PIAIC WOMENS GALLERY </p>
         </div>
        </section>
        <section className=''>
        <div className="flex-container">
            
                  <img width={450} height={250} src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364749/wit/51029395_10156517515841281_7963296630130606080_o.jpg" /> 

                  <img width={350} height={250} src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364738/wit/50690232_10156517507666281_4171136796081520640_n.jpg" />  

                  <img width={450} height={250} src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364748/wit/50985903_10156517518846281_6420746962424823808_o.jpg" /> 

                  <img width={470} height={280} src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364752/wit/51066316_10156517520621281_4992381620213252096_o.jpg" />  

                  <img width={350} height={250} src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364738/wit/50675836_10156517507021281_4706052772112367616_n.jpg" />

                  <img width={430} height={250} src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364727/wit/50458348_10156517507336281_6817312210671370240_n.jpg" />

                  <img width={450} height={250} src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364738/wit/50685972_10155901301712623_7726406252925812736_o.jpg" /> 

                  <img width={850} height={250} src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364748/wit/50985903_10156517518846281_6420746962424823808_o.jpg" /> 
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