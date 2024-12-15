import React from 'react'
import Title from '../Common/title/Title'
import { online } from '../../dummydata'

const OnlineCourses = () => {
  return (
    <>
    <section className="online">
        <div className="container">
            <Title subtitle='Courses' title='Browse Our Online Courses' />

            <div className="content grid3">
                {online.map((val)=>{
                  return  <div className="box">
                        <div className="img">
                            <img src={val.cover} alt="" />
                            <img src={val.hoverCover} alt="" className='show' />
                        </div>
                        <h1>{val.coursesName}</h1>
                        <span>{val.course}</span>

                    </div>
                })}

            </div>
        </div>
    </section>
      
    </>
  )
}

export default OnlineCourses
