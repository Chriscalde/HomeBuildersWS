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
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
      <div className="flex flex-wrap md:px-24 px-4 py-8 bg-zinc-100 w-full">
                <div className="lg:mr-auto lg:ml-0 ml-auto mr-auto">
                    <Link href="/" className="text-amber-500 md:text-3xl text-xl font-extrabold hover:scale-110">
                        OneWay E&T <span className="text-zinc-600">Home Builders</span>
                    </Link>
                </div>
                <div className="mx-auto md:mx-0">
                    <div className={styles.navmenu}>
                        <ul>
                            <li className="text-amber-500 hover:text-zinc-800 lg:mx-4 mx-0"><Link href="/">Home</Link></li>
                            <li className="text-amber-500 hover:text-zinc-800 lg:mx-4"><Link href="/#about">About</Link></li>
                            <li className="text-amber-500 hover:text-zinc-800 lg:mx-4"><Link href="/#services">Services</Link></li>
                            <li className="text-amber-500 hover:text-zinc-800 lg:mx-4"><Link href="/gallery">Gallery</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
      <div className="w-full">
        <div className={styles.maindiv}>
          <div className="md:py-6 my-auto items-center align-middle text-center">
            <h1 className="text-3xl text-amber-500 font-bold my-2">E&T Home Builders</h1>
            <h2 className="text-2xl text-zinc-100 my-2">Home Building & Remodeling, we work all around Utah. </h2>
            <div className="flex flex-row justify-center gap-2 font-bold mt-6">
              <button className="bg-transparent border-zinc-100 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-800 border-2 p-2">Learn More</button>
              <button className=" bg-amber-500 border-2 border-amber-500 hover:bg-amber-600 hover:text-zinc-100 p-2 ">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center p-4 bg-gradient-to-b from-zinc-100 to-zinc-200 w-full">
        <h1 className="text-zinc-700 text-xl font-bold">About <span className="text-amber-500">Us</span></h1>
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
      <div className="md:grid md:grid-cols-2 gap-4 w-full p-4 bg-amber-500 text-zinc-800 text-lg">
            <div className="flex flex-col p-6 items-center">
                <h1 className="font-bold">Oneway E&T Home Builders</h1>
                <p>Contact</p>
                <a href="tel:+14355545038">+1 (435) 554-5038</a>
                <a href="tel:+14352298523">+1 (435) 229-8523</a>
            </div>
            <div className="flex flex-col p-6 items-center align-middle my-auto">
                <h2>Logan, Utah 84321</h2>
                <h2>149 West, 400 #5 </h2>
            </div>
        </div>
      <footer className="w-full bg-zinc-700 text-center text-zinc-100 flex flex-row justify-center items-center py-2">
        <a href="https://raptordevs.com" target="_blank" rel="noopener noreferrer" className="text-stone-100 mx-auto flex flex-grow justify-center items-center">
          <span className="font-bold mr-2">OneWay E&T Home Builders</span>
          Powered by {' '}
          <span className=" ">
            <Image src={logord} alt="logo" width={80} height={60}></Image>
          </span>
        </a>
      </footer>
    </main>
  );
}
