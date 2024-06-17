import { formateDate } from '../../utils/formateDate';
import user from  '../../assets/user.png'

const Appointment = ({ appointments }) => {
    // Ordenar compromissos do mais recente para o mais antigo
    const sortedAppointments = appointments?.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (

        
        <table className='w-full text-left text-sm text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                    <th className='px-6 py-3'>Nome</th>
                    <th className='px-6 py-3'>Gênero</th>
                    <th className='px-6 py-3'>Pagamento</th>
                    <th className='px-6 py-3'>Preço</th>
                    <th className='px-6 py-3'>Data de Reserva</th>
                    <th className='px-6 py-3'>Status</th>
                </tr>
            </thead>
            <tbody>
                {sortedAppointments?.map(item => (
                    <tr key={item._id}>
                        <th scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
                          { item.user.photo? (<img src={item.user.photo} alt={`${item.user.name}`} className='w-10 h-10 rounded-full' />)
                        : (<img src={item.user.photo} alt={`${item.user.name}`} className='w-10 h-10 rounded-full' />)}
                            <div className='pl-3'>
                                <div className='text-base font-semibold'>{item.user.name}</div>
                                <div className='text-normal text-gray-500'>{item.user.email}</div>
                            </div>
                        </th>
                        <td className='px-6 py-4'>{item.user.gender}</td>
                        <td className='px-6 py-4'>
                            {item.isPaid && item.status =='approved' ? (
                                <div className='flex items-center'>
                                    <div className='h-2.5 w-2.5 rounded-full bg-green-500 mr-2'></div>
                                    Pago
                                </div>
                            ) : (
                                <div className='flex items-center'>
                                    <div className='h-2.5 w-2.5 rounded-full bg-red-500 mr-2'></div>
                                    Não Pago
                                </div>
                            )}
                        </td>
                        <td className='px-6 py-4'>R${item.ticketPrice}</td>
                        <td className='px-6 py-4'>{formateDate(item.createdAt)}</td>
                        <td className='px-6 py-4'>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Appointment;
