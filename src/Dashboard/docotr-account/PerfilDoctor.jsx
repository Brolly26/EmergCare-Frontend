import { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'
import { BASE_URL, token } from '../../config'
import { toast } from 'react-toastify'
import DoctorAbout from '../../pages/Doctors/DoctorAbout'

const PerfilDoctor = ({ doctorData }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bio: '',
        gender: '',
        specialization: '',
        ticketPrice: 0,
        qualifications: [],
        experiences: [],
        timeSlots: [],
        about: '',
        photo: null
    })

    useEffect(() => {
        setFormData({
            name: doctorData?.name,
            email: doctorData?.email,
            phone: doctorData?.phone,
            bio: doctorData?.bio,
            gender: doctorData?.gender,
            specialization: doctorData?.specialization,
            ticketPrice: doctorData?.ticketPrice,
            qualifications: doctorData?.qualifications,
            experiences: doctorData?.experiences,
            timeSlots: doctorData?.timeSlots,
            about: doctorData?.about,
            photo: doctorData?.photo
        })
    }, [doctorData])

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFileInputChange = async e => {
        const file = e.target.files[0]
        const data = await uploadImageToCloudinary(file)

        console.log(data);
        setFormData({ ...formData, photo: data?.url })
    }

    const updateProfileHandler = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            const result = await res.json()

            if (!res.ok) {
                throw Error(result.message)
            }

            toast.success(result.message)

        } catch (error) {
            toast.error(error.message)
        }
    };

    // Função usada para adicionar item
    const addItem = (key, item) => {
        setFormData(prevFormData => ({ ...prevFormData, [key]: [...prevFormData[key], item] }))
    }

    const handleReusableInputChangeFunc = (key, index, event) => {
        const { name, value } = event.target

        setFormData(prevFormData => {

            const updateItems = [...prevFormData[key]]

            updateItems[index][name] = value
            return {
                ...prevFormData,
                [key]: updateItems,
            };
        });
    };

    // função para deletar items
    const deleteItem = (key, index) => {
        setFormData(prevFormData => ({
            ...prevFormData, [key]: [...prevFormData[key].filter((_, i) => i !== index),
            ]
        }));
    };

    const addQualification = e => {
        e.preventDefault()
        addItem('qualifications', {
            startingDate: '', endingDate: '', degree: 'PHD', university: 'CRUZ VERMELHA',
        });
    };

    const handleQualificationChange = (event, index) => {
        handleReusableInputChangeFunc('qualifications', index, event)
    }

    const deleteQualification = (e, index) => {
        e.preventDefault()
        deleteItem('qualifications', index)
    }

    // *********** Experiences     */

    const addExperience = e => {
        e.preventDefault()
        addItem('experiences', {
            startingDate: '', endingDate: '', position: 'Pediatra', hospital: 'CRUZ VERMELHA',
        });
    };

    const handleExperienceChange = (event, index) => {
        handleReusableInputChangeFunc('experiences', index, event)
    }

    const deleteExperience = (e, index) => {
        e.preventDefault()
        deleteItem('experiences', index)
    }

    // TimeSlots
    const addTimeSlote = e => {
        e.preventDefault()
        addItem('timeSlots', {
            day: '', startingTime: '', endingTime: ''
        });
    };

    const handleTimeSloteChange = (event, index) => {
        handleReusableInputChangeFunc('timeSlots', index, event)
    }

    const deleteTimeSlote = (e, index) => {
        e.preventDefault()
        deleteItem('timeSlots', index)
    }

    return (
        <div>
            <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>Informações de Perfil</h2>
            <form>
                <div className='mb-5'>
                    <p className='form_label'>Nome*</p>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Nome Completo'
                        className='form_input'
                    />
                </div>

                <div className='mb-5'>
                    <p className='form_label'>Email*</p>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Email'
                        className='form_input'
                        readOnly
                        aria-readonly={true}
                        disabled
                    />
                </div>

                <div className='mb-5'>
                    <p className='form_label'>Celular*</p>
                    <input
                        type='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder='Número do Celular'
                        className='form_input'
                    />
                </div>

                <div className='mb-5'>
                    <p className='form_label'>Biografia*</p>
                    <input
                        type='text'
                        name='bio'
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder='Biografia'
                        className='form_input'
                    />
                </div>

                <div className='mb-5'>
                    <div className='grid grid-cols-3 gap-5 mb-[30px]'>
                        <div>
                            <p className='form_label'>Gênero*</p>
                            <select
                                name='gender'
                                value={formData.gender}
                                className='form_input py-3.5'
                                onChange={handleInputChange}
                            >
                                <option value=''>Selecione</option>
                                <option value='male'>Masculino</option>
                                <option value='female'>Feminino</option>
                                <option value='other'>Outro</option>
                            </select>
                        </div>
                        <div>
                            <p className='form_label'>Especialização*</p>
                            <select
                                name='specialization'
                                value={formData.specialization}
                                className='form_input py-3.5'
                                onChange={handleInputChange}
                            >
                                <option value=''>Selecione</option>
                                <option value='Obstetricia'>Obstetrícia</option>
                                <option value='Ginecologista'>Ginecologia</option>
                                <option value='Pediatria'>Pediatria </option>
                            </select>
                        </div>

                        <div>
                            <p className='form_label'>Preço da Consulta*</p>
                            <input type='number' placeholder='100' name='ticketPrice' value={formData.ticketPrice} className='form_input' onChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                <div className='mb-5'>
                    <p className='form_label text-headingColor font-bold text-[24px]'>Qualificações</p>
                    {formData.qualifications?.map((item, index) => (
                        <div key={index}>
                            <div className='grid grid-cols-2 gap-5 '>
                                <div>
                                    <p className='form_label'>Data de ínicio*</p>
                                    <input type='date' name='startingDate' value={item.startingDate} className='form_input'
                                        onChange={e => handleQualificationChange(e, index)}
                                    />
                                </div>
                                <div>
                                    <p className='form_label'>Data final*</p>
                                    <input type='date' name='endingDate' value={item.endingDate} className='form_input'
                                        onChange={e => handleQualificationChange(e, index)}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-5 mt-5'>
                                <div>
                                    <p className='form_label'>Formação*</p>
                                    <input type='text' name='degree' value={item.degree} className='form_input'
                                        onChange={e => handleQualificationChange(e, index)}
                                    />
                                </div>
                                <div>
                                    <p className='form_label'>Universidade*</p>
                                    <input type='text' name='university' value={item.university} className='form_input'
                                        onChange={e => handleQualificationChange(e, index)}
                                    />
                                </div>
                            </div>

                            <button onClick={e => deleteQualification(e, index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'><AiOutlineDelete /> </button>
                        </div>
                    ))}
                    <button onClick={addQualification} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Adicionar Qualificações</button>
                </div>

                <div className='mb-5'>
                    <p className='form_label text-headingColor font-bold text-[24px]'>Experiências</p>
                    {formData.experiences?.map((item, index) => (
                        <div key={index}>
                            <div className='grid grid-cols-2 gap-5 '>
                                <div>
                                    <p className='form_label'>Data de ínicio*</p>
                                    <input type='date' name='startingDate' value={item.startingDate} className='form_input'
                                        onChange={e => handleExperienceChange(e, index)}
                                    />
                                </div>
                                <div>
                                    <p className='form_label'>Data final*</p>
                                    <input type='date' name='endingDate' value={item.endingDate} className='form_input'
                                        onChange={e => handleExperienceChange(e, index)}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-5 mt-5'>
                                <div>
                                    <p className='form_label'>Cargo*</p>
                                    <input type='text' name='position' value={item.position} className='form_input'
                                        onChange={e => handleExperienceChange(e, index)}
                                    />
                                </div>
                                <div>
                                    <p className='form_label'>Hospital*</p>
                                    <input type='text' name='hospital' value={item.hospital} className='form_input'
                                        onChange={e => handleExperienceChange(e, index)}
                                    />
                                </div>
                            </div>

                            <button onClick={e => deleteExperience(e, index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'><AiOutlineDelete /> </button>
                        </div>
                    ))}
                    <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Adicionar Experiências</button>
                </div>

                <div className='mb-5'>
                    <p className='form_label text-headingColor font-bold text-[24px]'>Períodos de atendimento</p>
                    {formData.timeSlots?.map((item, index) => (
                        <div key={index}>
                            <div className='grid grid-cols-2 gap-5 md:grid-cols-4 mb-[30px]'>
                                <div>
                                    <p className='form_label'>Dia*</p>
                                    <select name="day" value={item.day} className='form_input py-3.5'
                                        onChange={e => handleTimeSloteChange(e, index)}
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
                                    <p className='form_label'>Hora de início*</p>
                                    <input onChange={e => handleTimeSloteChange(e, index)} type='time' name='startingTime' value={item.startingTime} className='form_input' />
                                </div>
                                <div>
                                    <p className='form_label'>Hora de Término*</p>
                                    <input onChange={e => handleTimeSloteChange(e, index)} type='time' name='endingTime' value={item.endingTime} className='form_input' />
                                </div>
                                <div onClick={e => deleteTimeSlote(e, index)} className='flex items-center'>
                                    <button className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'><AiOutlineDelete /> </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={addTimeSlote} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Adicionar Horários</button>
                </div>

                <div className='mb-5'>
                    <p className='form_label text-headingColor font-bold text-[24px]'>
                        Sobre*
                    </p>
                    <textarea name='about' cols='' rows={5} value={formData.about} placeholder='Escreva sobre você'
                        onChange={handleInputChange} className='form_input'
                    ></textarea>
                </div>

                <div className='mb-5 flex items-center gap-3'>
                    {formData.photo && (
                        <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                            <img src={formData.photo} alt='' className='w-full rounded-full' />
                        </figure>
                    )}
                    <div className='relative w-[160px] h-[50px]'>
                        <input type='file' name='photo' id="customFile" className='absolute top-0 left-0 opacity-0 cursor-pointer' accept=".jpg, .png"
                            onChange={handleFileInputChange}
                        />
                        <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem]
                            py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold
                            rounded-lg truncate cursor-pointer'>Carregar Foto</label>
                    </div>
                </div>

                <div className='mt-7'>
                    <button type='submit' onClick={updateProfileHandler} className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>Atualiza Perfil</button>
                </div>
            </form>

        
        </div>
    )
}

export default PerfilDoctor;
