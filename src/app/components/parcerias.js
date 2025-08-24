"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const projetos = [
  {
    titulo: "Richester",
    imagem: "/publis-richester.jpeg",
    link: "https://gerador-de-curriculo-pied.vercel.app/"
  },
  {
    titulo: "Toddy",
    imagem: "/tod.jpeg",
    link: "https://projeto-anime-rust.vercel.app/"
  },
  {
    titulo: "Cheetos",
    imagem: "cheetos.jpeg",
    link: "https://exemplo.com/loja-virtual"
  }
];

export default function CarouselsParcerias() {
  const [activeIndex, setActiveIndex] = useState(null); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
      responsive: [
    {
      breakpoint: 768, // até 768px (tablet/celular)
      settings: {
        slidesToShow: 1,
        arrows: false, // remove setas no mobile (se quiser)
      },
    },
  ],
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-20 px-4 sm:h-[350px] xs:h-[250px] cursor-pointer" id="parcerias">
      <h2 className="text-3xl font-bold text-center mb-8">Parcerias</h2>
      <Slider {...settings}>
        {projetos.map((proj, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden shadow-lg group h-[400px] cursor-pointer"
            onClick={() => setActiveIndex(index)} // 👈 salva o índice do card clicado
          >
            {/* Imagem de fundo */}
            <img
              src={proj.imagem}
              alt={proj.titulo}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className={`
                absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 transition
                ${activeIndex === index ? "bg-black/20 opacity-100" : "bg-black/60 opacity-100"}
              `}
            >
              <h3 className="text-2xl font-bold mb-2">{proj.titulo}</h3>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Ver parceria
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
