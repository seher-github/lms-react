import React from 'react'
import Back from '../Common/back/Back'
import './contact.css'

const Contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106228.88433884497!2d72.98088960000001!3d33.6920576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1734013436588!5m2!1sen!2s"
  return (
    <>
      <Back title={'Contact Us'} />
      <section className="contact padding">
        <div className="container shadow flexSB">
            <div className="left row">
                <iframe src={map} ></iframe>
            </div>
            <div className="right row">
              <h1>Contact Us</h1>
              <p>Ullam sit neque atque vitane</p>
             <div className='items grid2'>
                <h4>ADDRESS:</h4>
                <p>198 west street, suite 751 New York NY 10016</p>

           
            <div className='box'>
            <h4>Email:</h4>
            <p>info@gmail.com</p>

                </div>
                <div className='box'>
            <h4>Phone:</h4>
            <p>+123 456 7898</p>

                </div>
                

        </div>
        <form action=''>
        <div className='flexSB'>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            </div>
            <input type="email" placeholder='Subject'/>
            <textarea  cols="30" rows="10">
                Create a message here...
            </textarea>
            <button className='primary-btn'>SEND MESSAGE</button>
        </form>
        <h3>Follow us here:</h3>
        <span>FACEBOOK TWITTER INSTAGRAM YOUTUBE</span>
        </div>
        </div>
      </section>
    </>
  )
}

export default Contact
