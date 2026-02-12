"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";

// --- KOMPONEN ICON (Biar gak perlu install library icon tambahan) ---
const BotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-700"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-600"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);
const LoadingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 animate-spin text-blue-600"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);
// ------------------------------------------------------------------

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Halo! Saya asisten virtual FSM Undip. Ada yang bisa dibantu?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll ke pesan terbawah
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- AREA KERJA MAHASISWA (TODO) ---
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // 1. Tampilkan pesan user ke UI
    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      // -------------------------------------------------------
      // TODO 1: Connect ke Backend FastAPI di sini!
      // const response = await axios.post("http://localhost:8000/chat", { 
      //   message: userMessage 
      // });
      // const botReply = response.data.reply;
      // -------------------------------------------------------

      // Simulasi delay (Hapus bagian ini nanti saat live coding)
      await new Promise(resolve => setTimeout(resolve, 1000));
      const botReply = "Maaf, Backend belum terhubung. Coba coding dulu bagian axios-nya! 😉";

      // 2. Tampilkan balasan bot ke UI
      setMessages((prev) => [...prev, { role: "bot", content: botReply }]);

    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "bot", content: "Error: Gagal terhubung ke server." }]);
    } finally {
      setIsLoading(false);
    }
  };
  // -----------------------------------

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans">
      {/* HEADER */}
      <header className="bg-blue-900 text-white p-4 shadow-md flex items-center gap-3">
        <div className="bg-white p-1.5 rounded-full">
          <BotIcon />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-wide">Chatbot StarterPack</h1>
          <p className="text-xs text-blue-200">Matkul Topik Khusus 2026</p>
        </div>
      </header>

      {/* CHAT AREA */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            
            {/* Icon Bot */}
            {msg.role === "bot" && (
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shrink-0">
                <BotIcon />
              </div>
            )}
            
            {/* Bubble Chat */}
            <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm shadow-sm leading-relaxed ${
                msg.role === "user" 
                  ? "bg-blue-600 text-white rounded-tr-none" 
                  : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
              }`}>
              {msg.content}
            </div>

            {/* Icon User */}
            {msg.role === "user" && (
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                <UserIcon />
              </div>
            )}
          </div>
        ))}
        
        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 justify-start animate-pulse">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <LoadingIcon />
            </div>
            <div className="bg-gray-200 h-10 w-24 rounded-2xl rounded-tl-none"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* INPUT AREA */}
      <footer className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex gap-2 max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanya seputar akademik..."
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <SendIcon />
          </button>
        </form>
      </footer>
    </div>
  );
}