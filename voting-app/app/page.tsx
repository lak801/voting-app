'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1>Vote App! v1</h1>
      </div>
      <div className="">
      Please enter your name
      <input
      className="border p-2 rounded w-full"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Your name"
        />
        <button className="bg-white text-black rounded w-full mt-[5px] p-[2px]">Submit</button>
    </div>
    </div>
    
  );
}
