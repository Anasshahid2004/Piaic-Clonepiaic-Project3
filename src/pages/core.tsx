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




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <title>PIAIC | Quarter I (Core)</title>
        <div className={styles.navbar}>
          <div className={styles["container"] + " " + styles["flex"]}>
          <Link href="/" className={styles.logo}> <img src="/piaiclogo.png"/></Link>
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
        <section className={styles.showcase}>
          <div className={styles["container"] + " " + styles["grid"]}>
            <div className={styles.showcasetext}>
              <h1>Quarter I (Core).</h1>
              <p>We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.</p>
              <span className={styles["btn"] + " " + styles["btnoutline"]}><Link href="https://www.piaic.org/">Read More</Link></span>
            </div>
            <div className={styles.showcaseform}>
              <img src="https://media.discordapp.net/attachments/1072569568691761254/1072569713453965382/29343-removebg-preview.png?width=577&height=427" alt="" />
            </div>
          </div>
        </section>
        <section className={styles.stats}>
          <div className={styles.container}>
            <h2 className={styles.textcenter}>Detailed Course Syllabus</h2>
            <h3 className={styles["statsheading"] + " " + styles["textcenter"] + " " + styles["my1"]}>
            Q1 | CS-101: Object-Oriented Programming using TypeScript.
            </h3>
          </div>
        </section>

        <section className={styles.languages}>
          <p className={styles["lead"] + " " + styles["textcenter"]}>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
          <h2 className={styles["textcenter"] + " " + styles["m2"] + " " + styles["flex"]}>Quarter I (Core)</h2>
          <p className={styles.textcenter}>Duration: 13 Weeks </p>
          <div className={styles["container"] + " " + styles["flex"]}>
            <div className={styles.card}>
              <Link href="/core">
                <h4 className={styles.textcenter}>Quarter I</h4>
                <p className={styles.textcenter}>CS-101: Object-Oriented Programming using TypeScript.</p>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className={styles["container"] + " " + styles[""]}>
            <div className="py-40 h-auto">
              <h1 className='text-center font-semibold text-slate-900 text-3xl mb-5'>Quarter I (Core)</h1>
              <div className="max-w-2xl mx-auto px-6">
                <div className="bg-white rounded-xl border-2">
                  <div className="accordion-header flex items-center justify-between bg-blue-700 text-white">
                    <span className='font-semibold text-lg'>HTML and CSS (Homework)</span>
                    <i className="fa fa-chevron-down fa-1x"></i>
                  </div>
                  <div className="accordion-body">
                    <div className="p-4 border-t ">
                    
                      <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"><i className="text-black fab fa-youtube fa-1x" /> <p className='text-black inline-block p-1'>Learn HTML by Hira Khan (Watch Recorded Videos)</p></Link>
                      <hr></hr>
                      <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"><i className="text-black fab fa-youtube fa-1x" /> <p className='text-black inline-block p-1'>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</p></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-6 mt-4">
                <div className="bg-white rounded-xl border-2">
                  <div className="accordion-header flex items-center justify-between bg-blue-700 text-white">
                    <span className='font-semibold text-lg'>Web 3.0 and MetaVerse Theory </span>
                    <i className="fa fa-chevron-down fa-1x"></i>
                  </div>
                  <div className="accordion-body">
                  <div className="p-4 border-t ">
                    
                    <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>Introduction To Panaverse DAO</p></Link>
                    <hr></hr>
                    <Link href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>Web 3.0 User Guide</p></Link>
                    <hr></hr>
                    <Link href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>Complete Web 3 Assigments included in the Web3 User Guide</p></Link>
                  </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-6 mt-4">
                <div className="bg-white rounded-xl border-2">
                  <div className="accordion-header flex items-center justify-between bg-blue-700 text-white">
                    <span className='font-semibold text-lg'>Fundamentals of JavaScript </span>
                    <i className="fa fa-chevron-down fa-1x"></i>
                  </div>
                  <div className="accordion-body">
                  <div className="p-4 border-t ">
                    
                    <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"><i className="text-black fab fa-youtube fa-1x" /> <p className='text-black inline-block p-1'>Learn JavaScript by Zeeshan Hanif [Recorded Videos]</p></Link>
                    <hr></hr>
                    <Link href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>Chapters 2-6, 13 of JavaScript from Beginner to Professional</p></Link>
                    <hr></hr>
                    <Link href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>JavaScript Book</p></Link>
                    <hr></hr>
                    <Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>Getting Started Exercises with JavaScript and Node.js</p></Link>
                    <hr></hr><i className="text-black fa fa-info fa-1x" /> <p className='text-black inline-block p-1'>More Info</p>
                    <ul>
                      <li>Background of JavaScript and How to use JavaScript in Browser</li>
                      <li>Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</li>
                      <li>Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with (<Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"><i className="text-black fa fa-link fa-1x" /> <p className='text-black inline-block'>NPM</p></Link>) </li>
                      <li>How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs (<Link href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"><i className="text-black fa fa-link fa-1x" /> <p className='text-black inline-block'>Notes</p></Link>)
                      <br></br>
                      Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</li>
                      <li>Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</li>
                      <li>Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>
                      <li>Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>
                      <li>Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</li>
                      <li>Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>
                      <li>JavaScript promises, mastering the asynchronous</li>
                      <li><Link href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"><i className="text-black fa fa-link fa-1x" /> <p className='text-black inline-block p-1'>JavaScript promises, mastering the asynchronous</p></Link></li>
                      <li><Link href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"><i className="text-black fa fa-link fa-1x" /> <p className='text-black inline-block p-1'>New JavaScript Features in ECMAScript 2022 and 2021</p></Link></li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-6 mt-4">
                <div className="bg-white rounded-xl border-2">
                  <div className="accordion-header flex items-center justify-between bg-blue-700 text-white">
                    <span className='font-semibold text-lg'>Object Oriented Programming with TypeScript </span>
                    <i className="fa fa-chevron-down fa-1x"></i>
                  </div>
                  <div className="accordion-body">
                  <div className="p-4 border-t">
                    
                    <Link href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"><i className="text-black fab fa-youtube fa-1x" /> <p className='text-black inline-block p-1'>Chapters 1-11 of Learning TypeScript Enhance Your Web Development Skills.</p></Link>
                    <hr></hr>
                    <Link href="https://www.learningtypescript.com/"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>In Class Companion projects and articles for Learning TypeScript</p></Link>
                    <hr></hr>
                    <i className="text-black fa fa-arrow-down fa-1x" /> <p className='text-black inline-block p-1'>More</p>
                    <hr></hr>
                    <Link href="https://github.com/panaverse/typescript-node-projects"><i className="text-black fa fa-info fa-1x" /> <p className='text-black inline-block p-1'>Homework Project</p></Link>
                    <hr></hr>
                    <i className="text-black fa fa-info fa-1x" /> <p className='text-black inline-block p-1'>Fundamentals of TypeScript Quiz</p>
                    <hr></hr><i className="text-black fa fa-info fa-1x" /> <p className='text-black inline-block p-1'>TypeScript Professional Proficiency Quiz</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-6 mt-4">
                <div className="bg-white rounded-xl border-2">
                  <div className="accordion-header flex items-center justify-between bg-blue-700 text-white">
                    <span className='font-semibold text-lg'>TypeScript for React </span>
                    <i className="fa fa-chevron-down fa-1x"></i>
                  </div>
                  <div className="accordion-body">
                  <div className="p-4 border-t ">
                    <i className="text-black fa fa-info fa-1x" /> <p className='text-black inline-block p-1'>Minimal TypeScript Crash Course For React</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-6 mt-4">
                <div className="bg-white rounded-xl border-2">
                  <div className="accordion-header flex items-center justify-between bg-blue-700 text-white">
                    <span className='font-semibold text-lg'>Quarter Break Assignments and Quizzes </span>
                    <i className="fa fa-chevron-down fa-1x"></i>
                  </div>
                  <div className="accordion-body">
                  <div className="p-4 border-t ">
                    
                    <Link href="https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>Cloud to Edge</p></Link>
                    <hr></hr>
                    <Link href="https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>Todo App</p></Link>
                    <hr></hr>
                    <Link href="https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>Pricing Ui</p></Link>
                    <hr></hr>
                    <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline p-1'>Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document.</p></Link>
                    <hr></hr>
                    <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline p-2'>Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following (Document).</p></Link>
                    <hr></hr>
                    <i className="text-black fa fa-info fa-1x" /> <p className='text-black inline p-1'>The best-developed Website will be hosted on  www.piaic.org and www.panaverse.co domain.</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-6 mt-4">
                <div className="bg-white rounded-xl border-2">
                  <div className="accordion-header flex items-center justify-between bg-blue-700 text-white">
                    <span className='font-semibold text-lg'>Fundamentals of Version Control With Git Quiz</span>
                    <i className="fa fa-chevron-down fa-1x"></i>
                  </div>
                  <div className="accordion-body">
                  <div className="p-4 border-t ">
                    
                    <Link href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"><i className="text-black fab fa-youtube fa-1x" /> <p className='text-black inline p-1'>Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</p></Link>
                    <hr></hr><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline p-1'>Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</p>
              
                  </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-6 mt-4">
                <div className="bg-white rounded-xl border-2">
                  <div className="accordion-header flex items-center justify-between bg-blue-700 text-white">
                    <span className='font-semibold text-lg'>TypeScript Proficiency Quiz </span>
                    <i className="fa fa-chevron-down fa-1x"></i>
                  </div>
                  <div className="accordion-body">
                  <div className="p-4 border-t ">
                    
                    <Link href="https://github.com/panaverse/learn-typescript"><i className="text-black fa fa-book fa-1x" /> <p className='text-black inline-block p-1'>Study Material</p></Link>
                    
                  </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </section>
        <footer className={styles["footer"] + " " + styles["bgdark"] + " " + styles["py5"] + " " + styles["mt"]}>
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
      <script src='/sc.js'></script>
    
    </>
    );
  }