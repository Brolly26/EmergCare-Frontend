import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const zapHandler = () => {
    const url = 'https://wa.me/+5531971047839';
    window.open(url, '_blank'); 
} 

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:bielaugusto8@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    // Abre o cliente de email padrão do usuário com os dados preenchidos
    window.location.href = mailtoLink;
  };

  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Fale conosco</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>
          Tem algum problema técnico? Quer enviar feedback sobre um recurso beta? Deixe-nos saber.
        </p>
        {/* Botão para abrir o cliente de email padrão */}
        <a href={`mailto:emergcare@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`} className='btn rounded sm:w-fit' style={{marginRight:'30px'}} target='_blank' rel='noopener noreferrer'>
          Enviar por Email
        </a>
        
        <a className='btn_invert rounded sm:w-fit cursor-pointer' onClick={zapHandler}>Enviar por WhatsApp</a>
      </div>
    </section>
  );
};

export default Contact;
