import React, { useEffect, useState } from 'react';
import DoctorCard from '../../components/Doctors/DoctorCard';
import Testimonial from '../../components/Testimonial/Testimonial';
import { BASE_URL } from '../../config';
import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import useFetchData from '../../hooks/useFetchData';

const Doctor = () => {
  const [query, setQuery] = useState('');
  const [debounceQuery, setDebounceQuery] = useState('');
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  const handleSearch = () => {
    setQuery(query.trim());
    console.log('handle search');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <>
      <section className='bg-[#fff9ea] section-margins' style={{ height: '270px', marginBottom: '40px' }}>
        <div className='container text-center'>
          <h2 className='heading'>Busque por Especialistas</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input
              type='search'
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textcolor'
              placeholder='Procure um especialista'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section className='section-margins' style={{ paddingTop: '0px' }}>
        <div className='container'>
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {doctors.map((doctor, index) => (
                <DoctorCard key={`${doctor.id}-${index}`} doctor={doctor} />
              ))}

            </div>
          )}
        </div>
      </section>

      <section className='section-margins'>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>O que nossos pacientes estão dizendo</h2>
            <p className='text_para text-center'>
              Cuidados de classe mundial para todos. Nosso sistema de saúde oferece cuidados especializados sem igual.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctor;
