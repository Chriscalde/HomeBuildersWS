import React from "react";
export default function Footer(){
    return (
        <div className="md:grid md:grid-cols-2 gap-4 w-full p-4 bg-amber-500">
            <div className="flex flex-row">
                <h1>Oneway E&T Home Builders</h1>
                <p>Contact</p>
                <a href="tel:+14355545038">+1 (435) 554-5038</a>
                <a href="tel:+14352298523">+1 (435) 229-8523</a>
            </div>
            <div className="flex flex-row">
                <h2>Logan, Utah 84321</h2>
                <h2>149 West, 400 #5 </h2>
            </div>
        </div>
    )
}