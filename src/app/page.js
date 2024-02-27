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
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-100">
      <div className="w-100 flex flex-row mx-auto">
        <div className="flex flex-wrap m-auto p-5 list-none h-auto">
            <ul className="gap gap-8 flex w-100 ">
              <li className="text-zinc-800 hover:text-amber-600 font-bold mx-2"><Link href='/#about'>About</Link></li>
              <li className="text-zinc-800 hover:text-amber-600 font-bold mx-2"><Link href='/#services'>Services</Link></li>
              <li>Hello</li>
            </ul>
        </div>
      </div>
      <div className="w-full">
        <div className={styles.maindiv}>
          <div className="py-6 my-auto items-center align-middle text-center">
            <h1 className="text-3xl text-amber-500 font-bold my-2">E&T Home Builders</h1>
            <h2 className="text-2xl text-zinc-100 my-2">Home Building & Remodeling, we work all around Utah. </h2>
            <div className="flex flex-row justify-center gap-2 font-bold mt-6">
              <button className="bg-transparent border-zinc-100 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-800 border-2 p-2">Learn More</button>
              <button className=" bg-amber-500 border-2 border-amber-500 hover:bg-amber-600 hover:text-zinc-100 p-2 ">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center bg-zinc-300 p-5 text-zinc-800">
        <h1 className="text-xl font-bold">Our Services</h1>
        <div className="grid grid-cols-3 gap-x-10 gap-y-4">
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
