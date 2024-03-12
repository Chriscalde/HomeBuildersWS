import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css"
import mainPic from "../../assets/img/image000000.png"
import frame from "../../assets/img/frame.png"
import paint from "../../assets/img/paint.png"
import carpentry from "../../assets/img/carpentry.png"
import sheet from "../../assets/img/sheet.png"
import floor from "../../assets/img/fl.png"
import remodel from "../../assets/img/re.png"
import logord from "../../assets/img/logord.png"
import proj1 from "../../assets/img/proj1.png"
import proj2 from "../../assets/img/proj2.png"
import proj3 from "../../assets/img/proj3.png"
import proj4 from "../../assets/img/fr1.png"
import proj5 from "../../assets/img/fr2.png"
import proj6 from "../../assets/img/fr3.png"
import proj7 from "../../assets/img/fr4.png"
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
      <div className="flex flex-wrap md:px-24 px-4 py-8 bg-zinc-100 w-full">
                <div className="lg:mr-auto lg:ml-0 ml-auto mr-auto">
                    <Link href="/" className="text-amber-500 md:text-3xl text-xl font-extrabold hover:scale-110">
                        OneWay E&T <span className="text-zinc-600">Home Builders LLC</span>
                    </Link>
                </div>
                <div className="mx-auto md:mx-0">
                    <div className={styles.navmenu}>
                        <ul>
                            <li className="text-amber-500 hover:text-zinc-800 lg:mx-4"><Link href="/#about">About</Link></li>
                            <li className="text-amber-500 hover:text-zinc-800 lg:mx-4"><Link href="/#services">Services</Link></li>
                            <li className="text-amber-500 hover:text-zinc-800 lg:mx-4"><Link href="/#projects">Projects</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
      <div className="w-full">
        <div className={styles.maindiv}>
          <div className="md:py-6 my-auto items-center align-middle text-center">
            <h1 className="text-3xl text-amber-500 font-bold my-2">E&T Home Builders LLC</h1>
            <h2 className="text-2xl text-zinc-100 my-2">Home Building & Remodeling, we work all around Utah. </h2>
            <div className="flex flex-row justify-center gap-2 font-bold mt-6">
              <a href="/#about" className="bg-transparent border-zinc-100 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-800 border-2 p-2">Learn More</a>
              <a href="/#contact" className=" bg-amber-500 border-2 border-amber-500 hover:bg-amber-600 hover:text-zinc-100 p-2 ">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center bg-gradient-to-b from-zinc-100 to-zinc-200 w-full" id="about">
        <h1 className="text-zinc-700 text-2xl font-bold mt-4">About <span className="text-amber-500">Us</span></h1>
        <p className="mt-2 text-zinc-800">Welcome to <span className="font-bold"> OneWay E&T Home Builders</span>, where craftsmanship meets innovation, and dreams take shape. 
        <br className="my-2"/>We are a leading force in the world of house remodeling and building, dedicated to transforming your vision into reality.
        <br/> With a passion for quality and a commitment to excellence, we pride ourselves on delivering unparalleled construction and remodeling services.</p>
        <div className="md:grid md:grid-cols-4 my-4 gap-0 mx-auto">
          <h1 className="font-extrabold text-lg text-zinc-700 my-auto">Why Choose Us?</h1>
          <h1 className="font-bold hover:text-amber-500 text-zinc-800 hover:scale-125 cursor-default my-auto">{'\u2022'}Expertise </h1>
          <h1 className="font-bold hover:text-amber-500 text-zinc-800 hover:scale-125 cursor-default my-auto">{'\u2022'}Quality Assurance </h1>
          <h1 className="font-bold hover:text-amber-500 text-zinc-800 hover:scale-125 cursor-default my-auto">{'\u2022'}Innovation </h1>
        </div>
        <div className="md:grid md:grid-cols-2 w-full bg-zinc-800 mx-auto p-2 my-2">
          <h1 className="text-3xl text-amber-600 font-bold align-middle my-auto">Mission</h1>
          <p className="text-zinc-100 md:text-right p-2">At OneWay E&T Home Builders, our mission is to redefine living spaces, one project at a time. 
          <br/>We strive to exceed client expectations by blending innovative design, superior craftsmanship, and a client-centric approach.
          <br/>Whether it&apos;s a complete home remodel or a ground-up construction project, we are committed to turning your ideas into tangible, breathtaking spaces.</p>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center bg-gradient-to-b from-zinc-200 to-zinc-300 p-5 text-zinc-600" id="services">
        <h1 className="text-xl font-bold mb-4">Our Services</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4">
            <div>
              <Image src={frame} width={250} height={170} alt="framing"></Image>
              <h2 className="text-lg mt-2">Framing</h2>
            </div>
            <div>
              <Image src={paint} width={250} height={170} alt="painting"></Image>
              <h2 className="text-lg mt-2">Painting</h2>
            </div>
            <div>
              <Image src={carpentry} width={250} height={170} alt="carpentry"></Image>
              <h2 className="text-lg mt-2">Carpentry</h2>
            </div>
            <div>
              <Image src={sheet} width={250} height={170} alt="sheetrock"></Image>
              <h2 className="text-lg mt-2">Sheetrock</h2>
            </div>
            <div>
              <Image src={floor} width={250} height={170} alt="flooring"></Image>
              <h2 className="text-lg mt-2">Flooring</h2>
            </div>
            <div>
              <Image src={remodel} width={250} height={170} alt="remodeling"></Image>
              <h2 className="text-lg mt-2">Remodeling</h2>
            </div>
        </div>
      </div>
      <div className="flex flex-col bg-zinc-100" id="projects">
        <h1 className="text-2xl text-center mt-4 font-bold text-zinc-700">Projects</h1>
        <div className=" flex flex-row gap-4 p-4 overflow-x-scroll overflow-auto overflow-y-hidden">
          <Image src={proj1} alt="Project1"></Image>
          <Image src={proj2} alt="Project2"></Image>
          <Image src={proj3} alt="Project3"></Image>
          <Image src={proj4} alt="Project3"></Image>
          <Image src={proj5} alt="Project3"></Image>
          <Image src={proj6} alt="Project3"></Image>
          <Image src={proj7} alt="Project3"></Image>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-4 w-full p-4 bg-amber-500 text-zinc-800 text-lg" id="contact">
            <div className="flex flex-col p-6 items-center">
                <h1 className="font-bold">OneWay E&T Home Builders LLC</h1>
                <p>Contact</p>
                <a href="tel:+14355545038">+1 (435) 554-5038</a>
                <a href="tel:+14352298523">+1 (435) 229-8523</a>
            </div>
            <div className="flex flex-col p-6 items-center align-middle my-auto">
                <h2>Logan, Utah 84321</h2>
                <h2>149 West, 400 #5 </h2>
            </div>
        </div>
      <footer className="w-full bg-zinc-700 text-center text-zinc-100 md:flex md:flex-row justify-center items-center py-2">
        <a href="https://raptordevs.com" target="_blank" rel="noopener noreferrer" className="text-stone-100 mx-auto flex flex-grow justify-center items-center">
          <span className="font-bold mr-2">OneWay E&T Home Builders LLC</span>
          Powered by {' '}
          <span className=" ">
            <Image src={logord} alt="logo" width={80} height={60}></Image>
          </span>
        </a>
      </footer>
    </main>
  );
}
