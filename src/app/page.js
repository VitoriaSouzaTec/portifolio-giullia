// app/page.tsx
import Image from "next/image";
import { FaInstagram, FaTiktok, FaTwitch, FaYoutube, FaDiscord, MdOutlineMailOutline } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import CarouselsParcerias from "./components/parcerias";

export default function Home() {
  return (
    <main className="bg-[#121212] text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-center items-center px-6 py-4 border-b border-gray-800">
        <nav className="flex gap-6 text-sm">
          <a href="#sobre" className="hover:text-[#670d04] font-bold">Sobre Mim</a>
          <a href="#redes" className="hover:text-[#670d04] font-bold">Insights</a>
          <a href="#parcerias" className="hover:text-[#670d04] font-bold">Parcerias</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-[#670d04] via-[#6c3810] to-black text-white">
        <div className="absolute inset-0 "></div>

        {/* conteúdo */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center 
                        rounded-2xl p-10 ">
          <img
            src="/perfil.jpg "
            sizes="w-40"
            alt="Giullia"
            className="w-45 h-45 rounded-full shadow-lg mb-6 border-4 border-[#670d04]"
          />
          <h2 className="text-5xl font-extrabold mb-3 drop-shadow-lg">Giullia Albertini </h2>
          <p className="text-xl mb-6 mt-2">
            Criadora de Conteúdo | Humor | Veterinária | Gamer | Modelo
          </p>

          {/* icons redes sociais */}
          <div className="w-full h-[50px] flex justify-center gap-5 mt-2">
            <a href="https://www.tiktok.com/@fenix151617" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="w-6 h-6 text-white hover:text-[#670d04] transition-colors" />
            </a>
            <a href="https://www.instagram.com/giullia.albertini/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-white hover:text-[#670d04] transition-colors" />
            </a>
            <a href="https://www.twitch.tv/fenix151617" target="_blank" rel="noopener noreferrer">
              <FaTwitch className="w-6 h-6 text-white hover:text-[#670d04] transition-colors" />
            </a>
            <a href="https://www.youtube.com/channel/UC4EMD28iH0gL1GG4ZIRNFrw" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-6 h-6 text-white hover:text-[#670d04] transition-colors" />
            </a>
            <a href="https://discord.com/invite/HTuudQVGzz" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="w-6 h-6 text-white hover:text-[#670d04] transition-colors" />
            </a>
              <a href="mailto:giullia.albertini151617@gmail.com" target="_blank" rel="noopener noreferrer">
              < MdEmail className="w-6 h-6 text-white hover:text-[#670d04] transition-colors" />
            </a>
          </div>
          <a
            href="#sobre"
            className="px-6 py-3 mt-2 bg-[#670d04] rounded-lg font-semibold  hover:bg-gray-200 transition"
          >
            Sobre Mim
          </a>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 px-8 bg-gradient-to-t from-[#670d04] via-[#6c3810] to-black text-white bg-black/60">
        <h3 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h3>
        <p className="max-w-2xl mx-auto text-gray-300 text-center leading-relaxed">
          Olá, Eu sou a Giullia Albertini, sou criadora de conteúdo há 8 anos, sou apaixonada por tudo que envolve internet: desde vídeos de humor, estilo de vida, até streams e games.
          Mas ao mesmo tempo, sou estudante de medicina veterinária e estou construindo minha carreira.
          Meu propósito é simples: criar conexões reais, divertir, informar e mostrar que podemos ser muitas coisas ao mesmo tempo, gamer, criadora, veterinária e, acima de tudo, autêntica.
        </p>
      </section>

      {/* Redes Sociais */}
      <section id="redes" className=" bg-black/60 py-16 px-8 bg-gradient-to-b from-[#670d04] via-[#6c3810] to-black text-white ">
        <h3 className="text-3xl font-bold mb-10 text-center ">Meus Insights</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* TikTok */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-4">TikTok</h4>
            <ul className="space-y-2 text-gray-300">
              <li>👥 Seguidores: <span className="text-[#ff1900] font-bold">1M</span></li>
              <li>📈 Média de visualizações: <span className="text-[#ff1900] font-bold">250k</span></li>
              <li>🎯 Público alvo: Jovens/Adultos </li>
              <li>📊 Idade do público: entre 18–34 anos</li>
            </ul>
          </div>

          {/* Instagram */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-4">Instagram</h4>
            <ul className="space-y-2 text-gray-300">
              <li>👥 Seguidores: <span className="text-[#ff1900] font-bold">94k</span></li>
              <li>📈 Média de visualizações: <span className="text-[#ff1900] font-bold">400k</span></li>
              <li>🎯 Público alvo: Jovens/Adultos</li>
              <li>📊 Idade do público: 18–30 anos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Parcerias */}
      <CarouselsParcerias/>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-400 text-sm">
        © 2025 - Todos os direitos reservados.
      </footer>
    </main>
  );
}
