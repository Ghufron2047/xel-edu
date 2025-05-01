"use client";

import { useState } from "react";

export default function SkayAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const reply = { sender: "ai", text: data.reply };
      setMessages((msgs) => [...msgs, reply]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {open ? (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-72 h-96 flex flex-col">
          <div className="overflow-y-auto flex-grow space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  msg.sender === "user" ? "bg-blue-100 dark:bg-blue-700 text-right" : "bg-gray-200 dark:bg-gray-600"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <input
            className="mt-2 p-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Tanyakan sesuatu..."
          />
          <button
            onClick={() => setOpen(false)}
            className="mt-2 p-1 text-sm text-red-500 hover:underline"
          >
            Tutup
          </button>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          💬 Skay
        </button>
      )}
    </div>
  );
}