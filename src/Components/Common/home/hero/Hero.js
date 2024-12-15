import React from 'react'
import './hero.css'
import Title from '../../title/Title'

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle={'WELCOME TO ACDAMEIA'} title={'BEST ONLINE EDUCATION'} />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate incidunt repudiandae? Voluptate excepturi consequuntur temporibus sapiente voluptatibus, dolorem quos?</p>
            <div className="button">
                <button className="primary-btn">
                    GET STARTED NOW <i className='fa fa-long-arrow-right'></i>
                </button>
                <button className="primary-btn1">
                   VIEW COURSE<i className='fa fa-long-arrow-right'></i>
                </button>
            </div>
            </div>
        </div>
      </section>
      <div className="margin"></div>
    </div>
  )
}

export default Hero
