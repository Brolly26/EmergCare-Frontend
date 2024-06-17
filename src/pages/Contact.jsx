import React from 'react'

const Contact = () => {
  return <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>
        Fale conosco
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>
        Tem algum problema técnico? Quer enviar feedback sobre um recurso beta? Deixe-nos saber.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='form_label'>
            Seu email
            </label>
            <input  type='email' id='email' placeholder='exemplo@gmail.com' className='form_input mt-1' />
          </div>
          <div>
            <label htmlFor='subject' className='form_label'>
            Assunto

            </label>
            <input  type='text' id='subject' placeholder='Assunto da sua mensagem' className='form_input mt-1' />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='subject' className='form_label'>
            Envie suas dúvidas 

            </label>
            <textarea  type='text' id='message' placeholder='Deixe-nos saber como podemos ajudá-lo?' className='form_input mt-1' rows='7' />
          </div>
          <button type='submit' className='btn rounded sm:w-fit'>Enviar</button>
        </form>
      </div>
    </section>

}

export default Contact