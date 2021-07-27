import React from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import splash from '../../assets/splash.svg'
import '../../styles/style.css'

function Contact() {
  const [sent, setSent] = useState()

  const messageSent = (status) => {
    if (status === 'error') {
      setSent(
        <p className='contact-error'>
          Something went wrong sending your message
        </p>
      )
    } else {
      setSent(
        <p className='contact-success'>
          Your message has been sent! I will get back to you ASAP.
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
        'user_Tl9V0BUgoVZYVuUAbt0Lo'
      )
      .then(
        (result) => {
          console.log(result)
          clearForm()
          messageSent()
        },
        (error) => {
          console.log(error.text)
          clearForm()
          messageSent('error')
        }
      )
  }

  return (
    <div className='contact section'>
      <img src={splash} className='contact__splash' alt='splash-svg' />
      <h1>
        Now let's do <span className='base__span'>something.</span>
      </h1>
      <div className='form-container'>
        <form onSubmit={sendEmail} id='email-form'>
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
        <p>{sent}</p>
      </div>
    </div>
  )
}

export default Contact
