import React from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import splash from '../../assets/splash.svg'
import '../../styles/style.css'

function Contact() {
  const [sent, setSent] = useState()
  const [load, setLoad] = useState(false)

  const messageSent = (status) => {
    if (status === 'error') {
      setSent(
        <p className='contact-error contact__sent-message'>
          Something went wrong sending your message
        </p>
      )
    } else {
      setSent(
        <p className='contact-success contact__sent-message'>
          Your message has been sent! <br /> I will get back to you ASAP.
        </p>
      )
    }
  }

  const clearForm = () => {
    document.getElementById('email-form').reset()
  }

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_hvielbl',
        'template_jx2rpfn',
        e.target,
        'user_Tl9V0BUgoVZYVuUAbt0Lo',
        setLoad(true)
      )
      .then(
        (result) => {
          console.log(result)
          clearForm()
          messageSent()
          setLoad(false)
        },
        (error) => {
          console.log(error.text)
          clearForm()
          messageSent('error')
          setLoad(false)
        }
      )
  }

  return (
    <div className='contact section' id='contact'>
      <img src={splash} className='contact__splash' alt='splash-svg' />
      <h1>
        Now let's do <span className='base__span'>something.</span>
      </h1>
      <div className='form-container'>
        <form onSubmit={sendEmail} id='email-form' className='email__form'>
          <input
            type='text'
            className='form-input'
            required
            placeholder='Name..'
            name='from_name'
          />
          <input
            name='_replyto'
            type='email'
            className='form-input'
            required
            placeholder='Email..'
          />
          <textarea
            name='message'
            cols='30'
            className='form-textarea'
            rows='10'
            placeholder='Your message..'
          ></textarea>
          <button className='form-button' type='submit' value='Send'>
            Send message
          </button>
        </form>
        {load ? <i class='fas fa-spinner'></i> : ''}
        {sent}
      </div>
    </div>
  )
}

export default Contact
