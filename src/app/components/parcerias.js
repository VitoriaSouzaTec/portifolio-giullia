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
    link: "https://www.instagram.com/reel/CgUZ6T-AAdB/?igsh=MWI5MnFpOWtmNWRyaw%3D%3D"
  },
  {
    titulo: "Toddy",
    imagem: "/tod.jpeg",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODQ2MzM5ODA2OTc2MDI5/?story_media_id=2875108496657949339&igsh=MXF5cXpjaWo5aHk4eQ%3D%3D#"
  },
  {
    titulo: "Cheetos",
    imagem: "cheetos.jpeg",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODQ2MzM5ODA2OTc2MDI5/?story_media_id=2875108680276288467&igsh=MXF5cXpjaWo5aHk4eQ%3D%3D#"
  },
    {
    titulo: "Unifor",
    imagem: "unifor.jpeg",
    link: "https://www.instagram.com/reel/DNOqCGbyuNx/?igsh=MTlrcmpkdzgyenpzeQ%3D%3D"
  },
    {
    titulo: "Nutella",
    imagem: "nutella.jpeg",
    link: "https://www.instagram.com/reel/C_jLVdmSL7Y/?igsh=MWczMnhubHhnOWN4Zw%3D%3D"
  },
      {
    titulo: "Ibyte",
    imagem: "ibyte.jpeg",
    link: "https://www.instagram.com/reel/CppyZUIA6yV/?igsh=Ym5xc2U1azY0Y3E4"
  },
      {
    titulo: "Mob + Fortal",
    imagem: "fortal.jpeg",
    link: "https://www.instagram.com/reel/CghR39OA0Gl/?igsh=MXg1eGxqNHg4dm5sNg=="
  },
      {
    titulo: "Go Coffe",
    imagem: "gocoffe.jpeg",
    link: "https://www.instagram.com/reel/CgUZ6T-AAdB/?igsh=MWI5MnFpOWtmNWRyaw%3D%3D"
  },
        {
    titulo: "La Paleta",
    imagem: "laPaleta.jpeg",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODQ2MzM5ODA2OTc2MDI5/?story_media_id=3245572424165368436&igsh=MXF5cXpjaWo5aHk4eQ%3D%3D#"
  },
        {
    titulo: "Sucre",
    imagem: "sucre.jpeg",
    link: "https://www.instagram.com/reel/CnsXBUpBBoH/?igsh=Z2ZoNXQ2emFtajJ6"
  },
    {
    titulo: "Go Clear",
    imagem: "goclear.jpeg",
    link: "https://www.instagram.com/reel/C06xAFirYiZ/?igsh=MXRlczUyNmpsZWVxeA%3D%3D"
  },
  {
    titulo: "Yama Cosmeticos",
    imagem: "yama.jpg",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODQ2MzM5ODA2OTc2MDI5/?story_media_id=2901918379864499037&igsh=MXF5cXpjaWo5aHk4eQ%3D%3D#"
  },
    {
    titulo: "N&S",
    imagem: "n&s.jpeg",
    link: "https://www.instagram.com/reel/CvP6TC3g-7g/?igsh=bTRlZGZ3cDgyM2dj"
  },
    {
    titulo: "Ajustar Clinica de Quiropraxia",
    imagem: "ajustarClinicaDeQuiropraxia.jpeg",
    link: "https://www.instagram.com/reel/CuPU3BBAA-4/?igsh=MTczbzZsdHltZG5kZA%3D%3D"
  },
   {
    titulo: "Mestre da Parrila",
    imagem: "metreDaParrila.jpeg",
    link: "https://www.instagram.com/reel/CnPTKz2howW/?igsh=MXExejk2dGc2bml4aA%3D%3D"
  },
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
        arrows: false, 
      },
    },
  ],
  };

  return (
    <div className="w-full px-4 py-10 bg-gradient-to-t from-[#670d04] via-[#6c3810] to-black text-white" id="parcerias">
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
                className="bg-[#670d04] text-white font-bold px-4 py-2 rounded hover:bg-gray-200 transition"
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
