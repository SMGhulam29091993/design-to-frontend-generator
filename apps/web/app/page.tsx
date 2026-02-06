"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");

  async function generate() {
    const res = await fetch("http://localhost:3030/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        figmaUrl:
          "https://www.figma.com/file/eA2EImKhwJQKyvY90moWIO/Sovi-Health-version-1.0-Handful-Client-file?node-id=2743-45274&t=Stb9yy41QgZvf51b-0",
        framework: "react",
      }),
    });

    const data = await res.json();
    if (data) {
      console.log(`Data : ${JSON.stringify(data.data)}`);
    } else {
      console.log(`Error : ${JSON.stringify(data)}`);
    }
    setCode(data.data);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <label>Figma Url :</label>
        <input type="text" placeholder="Figma Url" />
      </div>
      <div className="flex items-center gap-2">
        <label>Frame Work :</label>
        <input type="text" placeholder="Frame Work" />
      </div>
      </div>
      <button onClick={generate} className="bg-blue-600 text-white px-4 py-2">
        Generate
      </button>

      {code && (
        <Sandpack
          template="react"
          files={{
            "/App.js": code,
          }}
        />
      )}
    </div>
  );
}
