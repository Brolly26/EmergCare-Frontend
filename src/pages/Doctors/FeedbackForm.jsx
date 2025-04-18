import  { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useParams } from 'react-router-dom';
import { BASE_URL,token } from '../../config';
import {toast} from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'
const FeedbackForm = () => {
    const [rating, setRating] = useState(0)
    const [hover, sethover] = useState(0)
    const [reviewText, setReviewText] = useState('')
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    const handleSubmitReview = async e => {
        e.preventDefault()
        setLoading(true)
    
    try {
        if (!rating || !reviewText) {
            setLoading(false);
            toast.error('Avaliações e comentários são indispensáveis.');
            return; // Adicione um return para evitar a continuação do código
        }
    
        setLoading(true);
    
        const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ rating, reviewText })
        });
    
        const result = await res.json(); // Use await aqui
    
        if (!res.ok) {
            throw new Error(result.message);
        }
    
        setLoading(false);
        toast.success(result.message);
    } catch (error) {
        setLoading(false);
        toast.error(error.message);
    }
}

    return (
        <form action=''>
            <div>
                <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>Como você avaliaria a sua experiência ?*</h3>
                <div>
                    {[...Array(5).keys()].map((_, index) => {
                        index += 1
                        return (
                            <button key={index} type='button' 
                            className={`${index <= ((rating && hover) || hover) ? 'text-yellowColor' : 'text-gray-400'} bg-transparent border-none outline-none text-[22px] cursor-pointer`} 
                           
                           onClick={() => setRating(index)} 
                           onMouseEnter={() => sethover(index)} 
                           onMouseLeave={()=>sethover(rating)}
                           onDoubleClick={() => {sethover(0); setRating(0);
                        }}
                           >
                            
                            <span><AiFillStar /></span>


                            </button>
                        )
                    })}
                </div>
            </div>

            <div className='mt-[40px]'>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                Compartilhe seu feedback ou sugestões*</h3>
            <textarea placeholder='Escreva sua mensagem' className='border border-solid border-[#0066ff34] focus:outline
             outline-primaryColor w-full px-4 py-3 rounded-md' onChange={(e)=> setReviewText(e.target.value)} rows='10'>

             </textarea>
            </div>
            <button type='submit' onClick={handleSubmitReview} className='btn'> { loading ? < HashLoader size={25} color='#fff' /> : 'Enviar Feedback'}</button>
        </form>
    );
};

export default FeedbackForm