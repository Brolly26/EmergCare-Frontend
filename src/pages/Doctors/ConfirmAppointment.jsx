import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
const ConfirmAppointment = ({  doctorId, ticketPrice, timeSlots }) => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const bookingHandler = async() => {
    //     setLoading(true);
    //     try {
    //         const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //             }
                
    //         });
    //         const data = await res.json();
    //         if (!res.ok) {
    //             throw new Error('Erro ao criar sessão de checkout');
    //         }


    //         if(data.session.url) {
    //             window.location.href = data.session.url
    //         }
    //     } catch (error) {
    //         toast.error(error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    
    



    return (
        <section className='section-margins px-5 xl:px-0'>
            <div className='max-w-[742px] mx-auto   border border-solid border-[#181A1E]' style={{ padding: '2.5rem', borderRadius: '26px' }} >
                <div className='rounded-l-lg '>
                    <form>
                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                            <div className='mb-5 ' style={{ width: '16rem' }}>
                                <input type='text' placeholder='Nome Completo'
                                    name='name'
                                    className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor
                                  text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md  cursor-pointer' required />
                            </div>

                            <div className='mb-5' style={{ width: '16rem' }}>
                                <p className='form_label'>Modelo de Consulta*</p>
                                <select name="day" className='form_input'
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="Online">Online</option>
                                    <option value="Presencial">Presencial</option>
                                    <option value="Domicilio">A domicílio</option>

                                </select>
                            </div>

                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>

                            <div className='mb-9' style={{ width: '16rem' }}>
                          
                                        <input  type='text' placeholder='Telefone para contato'
                                            name='phone'
                                            className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                                            required
                                        />
                             

                            </div>

                            <div className='mb-5' style={{ width: '16rem' }}>
                           
                                        <input  type='text' placeholder='Digite seu CPF'
                                            name='cpf'
                                            className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
                                            required
                                        />
                            </div>
                        </div>


                        <div className='mb-5'>
                            <p className='form_label text-headingColor font-bold text-[24px]'>Data disponíveis para consultar*</p>

                            <div >
                                <div className='grid grid-cols-2 gap-5 md:grid-cols-4 mb-[30px]'>
                                    <div>
                                        <p className='form_label'>Dia*</p>
                                        <select name="day" className='form_input py-3.5'
                                            required
                                        >
                                            <option value="">Selecione</option>
                                            <option value="Segunda-Feira">Segunda-Feira</option>
                                            <option value="Terça-Feira">Terça-Feira</option>
                                            <option value="Quarta-Feira">Quarta-Feira</option>
                                            <option value="Quinta-Feira">Quinta-Feira</option>
                                            <option value="Sexta-Feira">Sexta-Feira</option>
                                            <option value="Sábado">Sábado</option>
                                            <option value="Domingo">Domingo</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p className='form_label'>Horário*</p>
                                        <input type='time' name='startingTime' className='form_input' />
                                    </div>


                                </div>
                            </div>
                        </div>



                        <div className='mb-5'>

                            <p className='form_label text-headingColor font-bold text-[24px]'>Motivo da consulta</p>

                            <textarea name='about' cols='' rows={5} placeholder='Digite o motivo da consulta'
                                className='form_input' required
                            ></textarea>
                        </div>

                        <div className='mb-5'>
                            <p className='form_label form_label text-headingColor font-bold text-[24px]'>Observações</p>
                            <p className='form_label text-gray-500'>(Opcional)</p>
                            <input
                                type='text'
                                name='observacao'
                                className='form_input'
                            />
                        </div>
                        {/* <button type='submit' onClick={bookingHandler} className='btn w-full text-[20px] flex flex-row justify-center items-center' disabled={loading}>
                            {loading ? 'Processando...' : 'Avançar para a etapa de pagamento'}
                        </button> */}
                    
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ConfirmAppointment