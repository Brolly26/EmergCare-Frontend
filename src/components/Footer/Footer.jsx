import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/Logo2.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'

const socialLinks= [
  {
    path:"https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5"/>,
  },
  {
    path:"https://www.github.com/brolly26",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5"/>,

  },
  {
    path:"https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>,
  },
  {
    path:"https://www.linkedin.com/in/gabriel-augusto-86aa031b2/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5"/>,

  },
  ];
  const quickLinks01 = [
    {
      path:"/home",
      display:"Home",
    },
    {
      path:"/",
      display:"Sobre nós",
    },
    {
      path:"/services",
      display:"Serviços",
    },
    {
      path:"/",
      display:"Blog",
    },
  ];
  const quickLinks02 = [ 
    {
      path: "/find-a-doctor",
      display: "Encontre um especialista",
    },
    {
      path: "/",
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
      path:'/',
      display: 'Doar',
    },
    {
      path:'/contact',
      display: 'Contate-nos',
    },
  ]

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>

    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img src={logo} style={{width:"131px", height:'40px'}}/>
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
          Copyright © {year} Desenvolvido por Gabriel Augusto. Todos os direitos reservados.
          </p>
          <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link,index) => <Link to={link.path} key={index}
             className='w-9 h-9 border border-solid border-[#181A1E]
             rounded-full flex items-center justify-center group
              hover:bg-primaryColor hover:border-none'
              >
                {link.icon}
                </Link>)}
          </div>
        </div>
        <div >
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Encontre:
          </h2>
          <ul>
            {quickLinks02.map((item,index)=> <li key={index} className='mb-4'>
              <Link to={item.path} className='text-[16px] leading-7 text-textColor font-[400]'>{item.display} 
              </Link> </li>)}
          </ul>
        </div>

        <div >
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Suporte
          </h2>
          <ul>
            {quickLinks03.map((item,index)=> <li key={index} className='mb-4'>
              <Link to={item.path} className='text-[16px] leading-7 text-textColor font-[400]'>{item.display} 
              </Link> </li>)}
          </ul>
        </div>

        <div >
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Acesso rápido
          </h2>
          <ul>
            {quickLinks01.map((item,index)=> <li key={index} className='mb-4'>
              <Link to={item.path} className='text-[16px] leading-7 text-textColor font-[400]'>{item.display} 
              </Link> </li>)}
          </ul>
        </div>

      </div>
    </div>
  </footer>
  );
}

export default Footer
