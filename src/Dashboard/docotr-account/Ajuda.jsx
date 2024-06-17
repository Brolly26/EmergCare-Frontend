import React from 'react'
import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalTutorial from '../../layout/ModalTutorial.tsx'; 
import tl from '../../assets/Tutorial/Tutorial1.png'
import tl2 from '../../assets/Tutorial/Tutorial2.png'
import tl3 from '../../assets/Tutorial/Tutorial3.png'
import tl4 from '../../assets/Tutorial/Tutorial4.png'

const Ajuda = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [open, setOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    if (isOpen2) setIsOpen2(false);
  }

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
    if (isOpen1) setIsOpen1(false);
  }

  return (
    <div>
      <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'>
        <div className='flex items-center justify-between gap-5' onClick={toggleAccordion1}>
          <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>
            Assistência para o acesso à plataforma de video chamadas
          </h4>
          <div className={`${isOpen1 && "bg-primaryColor text-white border-none"} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
            {isOpen1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>
        {isOpen1 && (
          <div className='mt-4'>
            <div>
              <button className='btn' onClick={() => setOpen(true)}>
                Como acessar a plataforma de video
              </button>
            </div>
          </div>
        )}
      </div>

      <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'>
        <div className='flex items-center justify-between gap-5' onClick={toggleAccordion2}>
          <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>
          Nossos contatos
          </h4>
          <div className={`${isOpen2 && "bg-primaryColor text-white border-none"} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
            {isOpen2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>
        {isOpen2 && (
          <div className='mt-4 flex flex-col gap-3'>
            <div>
           
              <p className='flex flex-row form_label text-headingColor font-bold text-[20px] mb-2   gap-1'>E-mail: <p className=' text-gray-600'>bielaugusto8@hotmail.com</p></p>
              <p className='flex flex-row form_label text-headingColor font-bold text-[20px] gap-1'> WhatsApp: <p  className=' text-gray-600'>+55 (31) 9 994232364</p></p>
         
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ajuda
