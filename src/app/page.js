// app/page.tsx (Next.js 13+ com App Router)
import Image from "next/image";
import { FaInstagram, FaTiktok, FaTwitch, FaYoutube } from 'react-icons/fa';
import CarouselsParcerias from "./components/parcerias";



export default function Home() {
  return (
    <main className="bg-[#121212] text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-center items-center px-6 py-4 border-b border-gray-800">
        <nav className="flex gap-6 text-sm">
          <a href="#sobre" className="hover:text-[#ff1900] font-bold">Sobre Mim</a>
          <a href="#redes" className="hover:text-[#ff1900] font-bold">Insights</a>
          <a href="#parcerias" className="hover:text-[#ff1900] font-bold">Parcerias</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-[url('/bg-ciclismo.jpg')] bg-cover bg-center">
  <div className="absolute inset-0 bg-black/60"></div>

  {/* conteúdo */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center 
                  bg-gradient-to-br rounded-2xl p-10 shadow-xl">
    <img
      src="/perfil.jpg "
      sizes="w-40"
      alt="Giullia"
      className="w-60 h-60 rounded-full shadow-lg mb-6 border-4 border-[#ff1900]"
    />
    <h2 className="text-5xl font-extrabold mb-3 drop-shadow-lg">Giullia Albertini </h2>
    <p className="text-xl text- mb-6 mt-2">
      Criadora de Conteúdo | Humor | Veterinária | Gamer | Modelo
    </p>

   {/* icons redes sociais*/}

    <div className="w-full h-[50px] flex justify-center gap-5 mt-2">
  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@fenix151617?_d=secCgsIARCbDRgBIAMoARI%2BCjxVJ0gOF5spY0%2B50wpRK1Z3q4sUYDj7KLjRmmzxbCGHwWxpG7JNde6vVR0fVgj0QkYSu8E2cStyCQDxwLkaAA%3D%3D&language=pt&sec_uid=MS4wLjABAAAA_dYjQ6aL2OPFk2RshdYSW3rHeTYCM_JalGqJ-TfAeEI1kwLmcAB6pIlZVr6tApW_&sec_user_id=MS4wLjABAAAA_dYjQ6aL2OPFk2RshdYSW3rHeTYCM_JalGqJ-TfAeEI1kwLmcAB6pIlZVr6tApW_&share_app_name=musically&share_author_id=235937524890947584&share_link_id=87c00086-f1aa-4ef8-b3e1-d705922ede66&timestamp=1607533647&u_code=ahe7blh38l0ij&user_id=235937524890947584&utm_campaign=client_share&utm_medium=android&utm_source=copy&_r=1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTiktok className="w-6 h-6 text-white hover:text-[#ff1900] transition-colors" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/giullia.albertini/?igsh=MWI3OXY2ZmR0c2k1Ng%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="w-6 h-6 text-white hover:text-[#ff1900] transition-colors" />
  </a>

  {/* Twitch */}
  <a
    href="https://www.twitch.tv/fenix151617?sr=a"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitch className="w-6 h-6 text-white hover:text-[#ff1900] transition-colors" />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/channel/UC4EMD28iH0gL1GG4ZIRNFrw"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube className="w-6 h-6 text-white hover:text-[#ff1900] transition-colors" />
  </a>
  </div>
    <a
      href="#sobre"
      className="px-6 py-3 mt-2 bg-[#ff1900] rounded-lg font-semibold hover:text-[#ff1900] transition"
    >
      Sobre Mim
    </a>
  </div>
</section>

       {/* Sobre Mim */}
      <section id="sobre" className="py-20 px-8">
        <h3 className="text-3xl font-bold mb-6 text-center">Sobre Mim</h3>
        <p className="max-w-2xl mx-auto text-gray-300 text-center leading-relaxed">
          Olá, Eu sou a Giullia Albertini, sou criadora de conteúdo há 8 anos, sou apaixonada por tudo que envolve internet: desde vídeos de humor, estilo de vida, até streams e games.
          Mas ao mesmo tempo, sou estudante de medicina veterinária e estou construindo minha carreira.
          Meu propósito é simples: criar conexões reais, divertir, informar e mostrar que podemos ser muitas coisas ao mesmo tempo, gamer, criadora, veterinária e, acima de tudo, autêntica.
        </p>
      </section>

      {/* Redes Sociais */}
      <section id="redes" className="py-16 px-8">
        <h3 className="text-3xl font-bold mb-10 text-center">Meus Insights</h3>
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
              <li>📈 Média de visualizações: <span className="bg-[#ff1900]font-bold">400k</span></li>
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
