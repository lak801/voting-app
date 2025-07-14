'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  function handleSubmit() {
  fetch('/api/add-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        console.log("User added!");
        setName(""); // Clear the input field
      } else {
        console.error("Error:", data.error);
      }
    });
}
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
        <button className="bg-white text-black rounded w-full mt-[5px] p-[2px]" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    
  );
}
