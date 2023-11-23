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
        <title>PIAIC | Available</title>
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
        <section className={styles.showcase}>
          <div className={styles["container"] + " " + styles["grid"]}>
            <div className={styles.showcasetext}>
              <h1>Artificial Intelligence</h1>
              <p>Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence displayed by humans or by other animals. Example tasks in which this is done include speech recognition, computer vision, translation between (natural) languages, as well as other mappings of inputs.</p>
              <a href="#" className={styles["btn"] + " " + styles["btnoutline"]}>Read More</a>
            </div>
            <div className={styles.showcaseform}>
              <img src="/showcase.png"/>
            </div>
          </div>
        </section>
        <section className={styles.languages}>
          <h1 className={styles["md"] + " " + styles["textcenter"] + " " + styles["my5"]}>
            Program Structure
          </h1>
          {/* <p className={styles["lead"] + " " + styles["textcenter"]}>A four-quarter AI program in Data Science, Machine Learning, and Deep Learning.<p> */}
          <p className={styles.textcenter3}>A four-quarter AI program in Data Science, Machine Learning, and Deep Learning.</p>
          {/* <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Core Courses (Common in All Specializations)</h2> */}  
          <h1 className={styles.textcenter2}>Technical Track</h1>
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter I</h4>
              <p className={styles.textcenter}>AI Foundations</p>
              </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter II</h4>
              <p className={styles.textcenter}>Introduction to Data Science & Deep Learning</p>
              </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter III</h4>
              <p className={styles.textcenter}>Deploying AI Solutions</p>
              </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter IV</h4>
              <p className={styles.textcenter}>AI In Practice</p>
              </Link>
            </div>
          </div>
          {/* <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Web 3.0 (Blockchain) and Metaverse Specialization</h2> */}
          <h1 className={styles.textcenter1}>Compulsory Innovation Track</h1>
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter I</h4>
              <p className={styles.textcenter}>W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Apps</p>
              </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter I</h4>
              <p className={styles.textcenter}>Innovation Methodologies</p>
              </Link>
            </div>
          </div>
            {/* <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Artificial Intelligence (AI) and Deep Learning Specialization</h2>
            <p className={styles.textcenter}>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p> */}
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter II</h4>
              <p className={styles.textcenter}>Infrastructure As Code and DevOps</p>
              </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter III</h4>
              <p className={styles.textcenter}>Lean UI/UX and Bot Design</p>
              </Link>
            </div>
          </div>
            <h1 className={styles.textcenter4}>Detailed Program Structure</h1>
          {/* <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Cloud-Native Computing Specialization</h2>
          <p className={styles.textcenter}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</p> */}
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter IV</h4>
              <p className={styles.textcenter}>CN-351: Certified Kubemetes Application Developer (CKAD)</p>
              </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter V</h4>
              <p className={styles.textcenter}>CN-361: Developing Mutli-Cloud APIs using CDK for Terraform</p>
              </Link>
            </div>
          </div>
          {/* <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Ambient Computing and IoT Specialization</h2>
          <p className={styles.textcenter}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.</p> */}
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter IV</h4>
              <p className={styles.textcenter}>AC-351: Ambient Computing with Voice Assistants and Matter Devices</p>
            </Link>
            </div>
            <div className={styles.card}>
            <Link href="/core">
              <h4 className={styles.textcenter}>Quarter V</h4>
              <p className={styles.textcenter}>AC-361: Embedded Programming Using C and Rust</p>
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.abtn}>
        <a href="#" className={styles["btn"] + " " + styles["btnoutline"]}>Next Page</a>
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