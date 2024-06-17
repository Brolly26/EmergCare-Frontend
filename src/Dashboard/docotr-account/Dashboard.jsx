import { useState } from 'react'
import Loader from '../../components/Loader/Loading.jsx'
import Error from '../../components/Error/Error.jsx'
import useGetProfile from '../../hooks/useFetchData.jsx'
import { BASE_URL } from '../../config.js'
import Tabs from './Tabs.jsx'
import alert from '../../assets/spam-2-line.svg'
import DoctorAbout from '../../pages/Doctors/DoctorAbout.jsx'
import profile from '../../assets/user.png'
import starIcon from '../../assets/Star.png'
import PerfilDoctor from './PerfilDoctor.jsx'
import Appointment from './Appointment.jsx'
import ModalTutorial from '../../layout/ModalTutorial.tsx'; // Make sure to import the ModalTutorial component
import tl from '../../assets/Tutorial/Tutorial1.png'
import tl2 from '../../assets/Tutorial/Tutorial2.png'
import tl3 from '../../assets/Tutorial/Tutorial3.png'
import tl4 from '../../assets/Tutorial/Tutorial4.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ajuda from './Ajuda.jsx'
const Dashboard = () => {

  const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/perfil/eu`);

  const [open, setOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [tab, setTab] = useState('overview');

  return (
    <section>

      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {
          !loading && !error && (<div className='grid lg:grid-cols-3 gap-[30px] lg:gap[50px]'>
            <Tabs tab={tab} setTab={setTab} />
            <div className='lg:col-span-2'>
              {data.isApproved == 'pending' && (
                <div className='flex p-4 mb-4 text-yellow-700 bg-yellow-50 rounded-lg'>

                  <svg xmlns="http://www.w3.org/2000/svg" className='flex-shrink-0 h-5 w-5' viewBox="0 0 24 24" fill="rgba(161, 98, 7, 0.7)">
                    <path d="M15.936 2.50098L21.501
               8.06595V15.936L15.936 21.501H8.06595L2.50098 15.936V8.06595L8.06595 2.50098H15.936ZM15.1076 4.50098H8.89437L4.50098
                8.89437V15.1076L8.89437 19.501H15.1076L19.501 15.1076V8.89437L15.1076 4.50098ZM11.0002 15.0002H13.0002V17.0002H11.0002V15.0002ZM11.0002 
                7.00024H13.0002V13.0002H11.0002V7.00024Z">
                    </path>
                  </svg>

                  <div className='ml-3 text-sm font-medium'>
                    Para obter aprovação, preencha seu perfil. analisaremos manualmente e aprovaremos dentro de 3 dias.

                  </div>


                </div>)}

              <div className='mt-8'>
                {tab === 'overview' && (
                  <div>
                    <div className='help flex justify-end'>
                      <button className='btn' onClick={() => setOpen(true)}>
                      Ajuda com a plataforma
 
                      </button>
                      <ModalTutorial open={open} onClose={() => setOpen(false)}>
                        <h1 className='text-[18px]  leading-[30px]
                         text-headingColor font-bold' style={{ marginBottom: '20px' }}>Como Entrar na Plataforma de Videochamadas
                        </h1>
                        <Slider {...settings}>

                          <div>
                          <h2  className='text-textColor text-[15px] font-bold leading-7' >1. </h2>
                          
                             <p style={{ marginBottom: '20px', display: 'flex', textAlign: 'left' }} className='text-textColor text-[15px] font-bold leading-7'> Permitir Acesso ao Vídeo e Microfone:
                              Ao abrir a plataforma, você verá uma solicitação para permitir o acesso ao seu vídeo e microfone. Clique em "Permitir" para que a plataforma possa usar sua câmera e microfone durante a chamada.</p>
                           
                            <img src={tl} alt="Image 1" />
                          </div>
                          <div>

                          <h2  className='text-textColor text-[15px] font-bold leading-7' >2. </h2>
  
                            <p style={{ marginBottom: '20px', display: 'flex', textAlign: 'left' }} className='text-textColor text-[15px] font-bold leading-7'>Copiar o Link da Reunião:
                              Na tela inicial da plataforma, localize e copie o link da reunião. Este link é necessário para compartilhar com as outras pessoas que você deseja convidar para a chamada.
                            </p>
                            <img src={tl2} alt="Image 2" />
                          </div>
                          <div>
                          <h2  className='text-textColor text-[15px] font-bold leading-7' >3. </h2>


                            <p style={{ marginBottom: '20px', display: 'flex', textAlign: 'left' }} className='text-textColor text-[15px] font-bold leading-7'>
                              Digitar Seu Nome:
                              Em seguida, você será solicitado a digitar seu nome. Insira seu nome completo ou um apelido pelo qual deseja ser identificado durante a reunião.
                            </p>
                            <img src={tl3} alt="Image 3" />
                          </div>
                          <div>
                          <h2  className='text-textColor text-[15px] font-bold leading-7' >4. </h2>

                            <p style={{ marginBottom: '20px', display: 'flex', textAlign: 'left' }} className='text-textColor text-[15px] font-bold leading-7'>
                              Entrar na Reunião:
                              Após digitar seu nome, clique na opção "Entrar na Reunião". Você entrará na sala de espera e poderá ver a mensagem "Aguardando o anfitrião iniciar a reunião" ou algo semelhante.
                              </p>
                              <img src={tl4} alt="Image 4" />
                          </div>
                        </Slider>
                      </ModalTutorial>
                    </div>

                    <div className='flex items-center gap-4 mb-10'>
                      {data.photo ? (<figure className='max-w-[200px] max-h[200px]'>
                        <img src={data?.photo} />
                      </figure>) : (
                        <figure className='max-w-[200px] max-h[200px]'>
                          <img src={profile} />
                        </figure>
                      )}

                      <div>
                        <span className='bg-[#CCF0F3] text-irisBlueColor
                       py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] 
                      leading-4 lg:text-[16px] lg:leading-6 font-semibold'>
                          {data.specialization}
                        </span>
                        <h3 className='text-[22px] leading-9  font-bold text-headingColor mt-3'>{data.name}</h3>

                        <div className='flex items-center gap-[6px]'>
                          <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold '>
                            <img src={starIcon} />
                            {data.averageRating}
                          </span>
                          <span className=' text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold '>({data.totalRating})</span>

                        </div>
                        <p className='text_para font-[15px] lg:max-w-[390px] leading-6'>
                          {data?.bio}
                        </p>
                      </div>


                    </div>
                    <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences} />
                  </div>
                )}

                {tab === 'appointments' && <Appointment appointments={data.appointments} />}
                {tab == 'settings' && <PerfilDoctor doctorData={data} />}
                {tab == 'help' && <Ajuda  />}
              </div>

            </div>
          </div>

          )}
      </div>
    </section>
  )
}

export default Dashboard