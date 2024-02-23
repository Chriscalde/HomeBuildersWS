import React from "react";
import style from "../styles/Home.module.css"
import Link from "next/link";
export default function Header(){
    return ( 
            <div className="w-100 flex flex-row mx-auto">
                <div className="flex flex-wrap m-auto p-5 list-none h-auto">
                    <ul className="gap gap-8 flex w-100 ">
                    <li className="text-slate-700 font-bold mx-2"><Link href='/#about'>Hello There</Link></li>
                    <li className="mx-4">Hello</li>
                    <li>Hello</li>
                    </ul>
                </div>
            </div>
    )
}