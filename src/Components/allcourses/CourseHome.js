import React from 'react'
import Back from '../Common/back/Back'
import CourseCard from './CourseCard'
import OnlineCourses from './OnlineCourses'

const CourseHome = () => {
  return (
    <div>
        <Back title="Explore Courses"/>
        <CourseCard />
        <OnlineCourses />
      
    </div>
  )
}

export default CourseHome
