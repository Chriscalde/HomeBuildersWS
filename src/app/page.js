import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css"
import mainPic from "../../assets/img/image000000.png"
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
          <h1 className="py-auto my-auto items-center align-middle text-center text-3xl text-amber-500 font-bold ">E&T Home Builders</h1>
          <h2></h2>
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
      
    </main>
  );
}
