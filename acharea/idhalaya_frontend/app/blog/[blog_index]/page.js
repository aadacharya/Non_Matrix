import React from 'react'
import styles from "./blog.module.css"
import Header from '../../_components/_header/header'
import Footer from '../../_components/_footer/footer'
import blogs from "../blogs"
const Blog_Page = ({ params }) => {
  const blogs_enteries = Object.entries(blogs)
//   const index = {params.blog_index}
  const [key,value] = blogs_enteries[params.blog_index]
    return (
    <div>
        <Header/>
        <div className={styles.blog_main}>
            <div className={styles.blog_title}>{key}</div>
            <div className={styles.blog_body}>{value}</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog_Page