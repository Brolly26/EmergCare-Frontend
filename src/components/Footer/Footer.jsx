import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo2.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import Slider from 'react-slick';
import ModalTutorial from '../../layout/ModalTutorial.tsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.github.com/brolly26",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/gabriel-augusto-86aa031b2/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Início",
  },
  {
    path: "/",
    display: "Sobre nós",
  },
  {
    path: "/services",
    display: "Serviços",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/doctor",
    display: "Encontre um especialista",
  },
  {
    path: "/doctor",
    display: "Marque uma Consulta",
  },
  {
    path: "/",
    display: "Encontre um consultório",
  },
  {
    path: "/",
    display: "Dê uma opinião",
  },
];

const quickLinks03 = [
  {
    path: '/contact',
    display: 'Contate-nos',
  },
];

const quickLinks04 = [
  {
    path: '/doar',
    display: 'Doar',
  },
];

const Footer = () => {
  const [open, setOpen] = useState(false);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleDoarClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} style={{ width: "131px", height: '40px' }} alt="Logo" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright © {year} Desenvolvido por Gabriel Augusto. Todos os direitos reservados.
            </p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Encontre:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 text-textColor font-[400]'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Suporte
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 text-textColor font-[400]'>
                    {item.display}
                  </Link>
                </li>
              ))}
              {quickLinks04.map((item, index) => (
                <li key={index} className='mb-4' style={{zIndex:9999}}>
                  <button
                    onClick={handleDoarClick}
                    className='text-[16px] leading-7 text-textColor font-[400] cursor-pointer'
                  >
                    {item.display}
                  </button>
                  {open && (
                    <ModalTutorial open={open} onClose={handleCloseModal} >
                      <h1 className='text-[18px] leading-[30px] text-headingColor font-bold' style={{ marginBottom: '20px' }}>
                        {item.display}
                      </h1>
                      <Slider>
                        <div>
                          <h2 className='text-textColor text-[15px] font-bold leading-7'>1. </h2>
                          <p style={{ marginBottom: '20px', display: 'flex', textAlign: 'left' }} className='text-textColor text-[15px] font-bold leading-7'>
                            Permitir Acesso ao Vídeo e Microfone: Ao abrir a plataforma, você verá uma solicitação para permitir o acesso ao seu vídeo e microfone. Clique em "Permitir" para que a plataforma possa usar sua câmera e microfone durante a chamada.
                          </p>
                          <img src="image-url" alt="Image 1" />
                        </div>
                      </Slider>
                    </ModalTutorial>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Acesso rápido
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 text-textColor font-[400]'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
