import React from 'react'
import { BlogContainer } from '../Styles/BlogStyle'

function Blog(props) {
  return (
    <BlogContainer imgHeight={props.imgHeight} imgWidth={props.imgWidth} border={props.border}>
      <img src={props.imgUrl} alt="random lorem"></img>
      <h1>Blog Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </BlogContainer>
  )
}

export default Blog
