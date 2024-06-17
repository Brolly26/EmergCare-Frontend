import React from 'react'
import starIcon from '../../assets/Star.png'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const DoctorCard = ({doctor}) => {
    const {name, avgRating, totalRating, photo, specialization , totalPatients, hospital} = doctor
  return (
    <div className='p-3 lg:p-5'>
        <div>
            <img src={photo} className='w-full' style={{maxHeight: '295px', borderRadius:'10px', border:'1px solid #CCCCCC'} }alt=''/>
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text-[23px] lg:leading-9 overflow-hidden whitespace-nowrap text-headingColor font-[700] mt-3 lg:mt-5' style={{ maxWidth: '282px', textOverflow: 'ellipsis' }}>Dr. {name}</h2>
        <div className='mt-2 lg:mt-4 flex items-center justify-between'>
            <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] 
            leading-4 lg:text-[16px] font-semibold lg:leading-7 rounded'> 
            {specialization}
            </span>
            <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon}/>
                    {avgRating}
                </span>
                <span className=' text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>({totalRating})</span>
            </div>
        </div>
        <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
            <div>
               { totalPatients == null ?( <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'> +0 Pacientes</h3>)
                 :(<h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor'> +{totalPatients} Pacientes</h3>)
               
               }
                <p className='text-[14px] leading-6 font-[400] text-textColor'>{hospital}</p>
            </div>

            <Link to={`/doctor/${doctor._id}`} className='w-[44px] h-[44px] rounded-full border border-solid 
                                border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor'>
                                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                             </Link>
        </div>
    </div>
  )
}

export default DoctorCard