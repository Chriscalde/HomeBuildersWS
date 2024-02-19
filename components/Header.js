import React from "react";
import style from "../styles/Home.module.css"

export default function Header(){
    return ( 
        <main>
            <div className="w-100 flex flex-row mx-auto">
                <div className={style.navmenu}>
                    <ul className="gap gap-8">
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}