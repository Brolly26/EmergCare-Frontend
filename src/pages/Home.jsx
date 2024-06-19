import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import hero from './../assets/Gravidas/gravida1.jpg'
import hero2 from './../assets/kids/children1.png'
import hero3 from './../assets/kids/children.png'
import icon from './../assets/icon01.png'
import icon2 from './../assets/icon02.png'
import icon3 from './../assets/icon03.png'
import { Link } from 'react-router-dom';
import videoIcon from './../assets/video-icon.png'
import avatarIcon from './../assets/avatar-icon.png'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import featureImg from './../assets/pediatric.jpg'
import DoctorList from '../components/Doctors/DoctorList'
import faqIcon from './../assets/kids/children3.jpeg'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'
const Home = () => {
  return <>

    {/* < ------------Sessão Doutores  or Hero Section ------------> */}
    <section className='hero_section pt-[60px] 2xl:h-[860px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

          {/* <---------------- Content Doutores  or Hero SContent ------------------>*/}

          <div>
            <div className='lg:w-[570px]'>

              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] 
                md:leading-[70px]'>
                Promovendo uma Vida Longa e Saudável para Grávidas e Crianças.


              </h1>

              <p className='text_para'> Durante a gravidez e a infância, saúde e bem-estar são essenciais para mães e filhos. Promover uma vida saudável envolve alimentação equilibrada, acompanhamento pré-natal, exercícios e apoio emocional.
              </p>
              <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid'>
              <button className='btn' > Solicitar Agendamento</button>
              </Link>
            </div>
            <div className=' columnn-info mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-[30px]'>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>+10.000</h2>
                <span className='w-[180px] h-2 bg-yellowColor rounded-full block mt-[-6px]'></span>
                <p className='text_para font-[700] lg:text-center mt-[5px]'> Usuários Ativos </p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>+15</h2>
                <span className='w-[90px] h-2 bg-irisBlueColor  rounded-full block mt-[-6px]'></span>
                <p className='text_para font-[700] lg:text-center mt-[5px]'> Clínicas Locais </p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                <span className='w-[120px] h-2 bg-purpleColor rounded-full block mt-[-6px]'></span>
                <p className='text_para font-[700] lg:text-center mt-[5px]'> Pacientes Satisfeitos </p>
              </div>

            </div>

          </div>

          {/* <---------------- Content Doutores  or Hero SContent ------------------>*/}

          <div className='flex gap-[30px] justify-end'>
            <div>
              <img className='w-full rounded-2xl' style={{height:'95%'}} src={hero} />
            </div>
            <div style={{width:'284px'}}>
              <img className='w-full mb-[20px] rounded-2xl' style={{height:'240px'}} src={hero2} />
              <img className='w-full mb-[30px] rounded-2xl' style={{height:'262px'}} src={hero3} />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <----------- Fim Sessão Doutores  or    hero section and  ------------------->*/}


    <section className='section-margins'>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'> Provendo os melhores serviços médicos
          </h2>
          <p className='text_para text-center'>Assistência de classe mundial para todos. Nosso sistema de saúde oferece cuidados de saúde especializados e incomparáveis. </p>
        </div>

        <div className='grid grid-cols-1  lg:grid-cols-3  
            gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

          <div className='py-[30px] px-5 '>
            <div className='flex items-center justify-center'><img src={icon} /> </div>
            <div className='mt-[30px]'>

              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Encontre um especialista
              </h2>

              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                Assistência de classe mundial para todos. Nosso sistema de saúde oferece cuidados de saúde especializados e incomparáveis.
              </p>
              <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid 
                                border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className='py-[30px] px-5 '>
            <div className='flex items-center justify-center'><img src={icon2} /> </div>
            <div className='mt-[30px]'>

              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Encontre Clínicas
              </h2>

              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Encontre clínicas próximas com serviços especializados para grávidas e crianças. Nossa rede oferece tecnologia de ponta e altamente qualificados para garantir o melhor atendimento.
              </p>
<Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid 
                                border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className='py-[30px] px-5 '>
            <div className='flex items-center justify-center'><img src={icon3} /> </div>
            <div className='mt-[30px]'>

              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Marque uma Consulta Online
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                Agende suas consultas facilmente com nossa ferramenta online. Veja horários disponíveis e marque sua consulta de forma rápida e conveniente.
              </p>
              <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid 
                                border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
    <About />


    {/* ----------------------------- serviço section or services section ---------------------------- */}
    <section className='section-margins'>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'> Nosso serviços médicos </h2>
          <p className='text_para text-center'>
            Temos o sistema de saúde reconhecido por seus cuidados especializados
          </p>
        </div>
        <ServiceList />
      </div>
    </section>
    {/* ----------------------------- final serviço section or services section end ---------------------------- */}


    {/* -----------------------------  Sessão recurso or featura section ---------------------------- */}
    <section className='section-margins'>
      <div className='container'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>

          {/*  Recurso Content or Feature content */}
          <div className='xl:w-[670px]'>
            <h2 className='heading' style={{ marginBottom: '24px', fontSize: '40px' }}>
              Tratamento Virtual para Mães e Crianças
              <br />
            </h2>
            <span className='heading' style={{}}>  A qualquer momento.       </span>

            <ul className='pl-4'>
              <li className='text_para'>
                1.  Agende a consulta diretamente.
              </li>
              <li className='text_para'>
                2.   Procure por especialistas ideais e encontre consultórios perto de você.
              </li>
              <li className='text_para'>
                3.   Veja nossos médicos que estão aceitando novos pacientes, use a
                ferramenta de agendamento on-line para selecionar um horário de consulta.
              </li>
            </ul>
            <Link to='/'><button className='btn'>Ler Mais</button></Link>
          </div>
          {/* -------------------- Recurso Imagem  or  feature img -------------------- */}
          <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
            <img src={featureImg} className='w-3/4' style={{width:'550px', height:'550px'}} alt='' />
            <div className='w-[150px] lg:w-[248px] border-solid border-2 border-gray-300  bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 
                lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[6px] lg:gap-3'>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>Terça-Feira, 24</p>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>10:00 AM</p>
                </div>
                <span className='w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                  <img src={videoIcon} alt='' />
                </span>
              </div>

              <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] 
                  leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                Consulta
              </div>
              <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                <img src={avatarIcon} alt='' />
                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
                  Gabriel Augusto
                </h4>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    {/* -----------------------------  Fim sessão recurso  or featura section ---------------------------- */}


    { /* ------------ Nossos melhores especialista or our great doctors ----------- */}
    <section className='section-margins' >
      <div className='container section-margins'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'> Nossos melhores especialista  </h2>
          <p className='text_para text-center'>
            Cuidados de classe mundial para todos. Nosso sistema de saúde oferece cuidados especializados sem igual.
          </p>
        </div>
        <DoctorList />
      </div>
    </section>
    { /* ------------ Nossos melhores especialista or our great doctors ----------- */}

    {/* Sessão faq or faq section */}
    <section className='section-margins' >
      <div className='container section-margins'>
        <div className='flex justify-between gap-[50px] lg:gap-0'>
          <div className='w-1/2 hidden md:block'>
            <img src={faqIcon} className='rounded' style={{width:'670px', height:'660px'}} alt='' />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='heading'>Perguntas Frequentes dos Nossos Queridos Pacientes
            </h2>
            <FaqList />
          </div>
        </div>
      </div>
    </section>
    {/* Final Sessão faq or faq section end */}

    {/* ------------------------------ testimonial  ----------------------------- */}
    <section className='section-margins'>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'> Oque nossos pacientes estão dizendo</h2>
          <p className='text_para text-center'>
            Cuidados de classe mundial para todos. Nosso sistema de saúde oferece cuidados especializados sem igual.
          </p>
        </div>
        <Testimonial />
      </div>
    </section>
    {/* ------------------------------  testimonial end ----------------------------- */}


  </>
}

export default Home