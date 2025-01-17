import React from 'react'
import Title from '../../title/Title'
import { testimonial } from '../../../../dummydata'
import './style.css'

const Test = () => {
  return (
    <>
      <section className="testimonial padding">
        <div className="container">
            <Title subtitle={'testimonial'} title='our successful student' />
            <div className="content grid2">
                {testimonial.map((val)=>{
                  return(  <div className="items shadow">
                        <div className="box flex">
                            <div className="img">
                                <img src={val.cover} alt="" />
                                <i className="fa fa-quote-left icon"></i>
                            </div>
                            <div className="name">
                                <h2>{val.name}</h2>
                                <span>{val.post}</span>
                            </div>
                        </div>
                        <p>{val.desc}</p>
                    </div>)
                })}
            </div>
        </div>
      </section>
    </>
  )
}

export default Test
