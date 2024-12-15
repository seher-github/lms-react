import React from 'react'
import BlogCard from './BlogCard'
import Back from '../Common/back/Back'

const Blog = () => {
  return (
    <>
       <Back title={'Blog Posts'} />
        <section className="blog padding">
            <div className="container grid">
                <BlogCard />
            </div>
        </section>
    </>
  )
}

export default Blog
