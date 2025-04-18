import React from 'react'
import aboutImg from '../../assets/pediatricImg.png'
import aboutCard from '../../assets/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/*      <----------------- Sobre imagem or About img  ------------>  */ }
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img style={{width:'659px' , height:'470px'}} className='rounded' src={aboutImg} />
             <div className='absolute z-20 bottom-4 w-[200px] right-[-30%] md:w-[300px] md:right-[-7%] lg:right-[22%]'> 
             <img src={aboutCard} />
             </div>
            </div>
            {/* <------------- sobre content or about content ------------>   */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading '>É uma honra fazer parte dos mais destacados da nossa nação. </h2>
                <p className='text_para'>
                Somos novos no mercado, mas estamos cheios de entusiasmo e determinação para oferecer o melhor aos nossos clientes, com foco na qualidade e inovação.
                 E já estamos começando a ser reconhecidos nacionalmente pelo nosso compromisso em proporcionar experiências excepcionais serviços de excelência.  </p>

                 <Link to='/'><button className='btn'> Ler mais </button></Link>
            </div>
        </div> 

      </div>
  </section>
   
  
}

export default About