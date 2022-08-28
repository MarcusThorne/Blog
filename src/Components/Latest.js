import React from 'react'
import { LatestContainer, LatestTitle } from '../Styles/LatestStyle'
import Blog from './Blog'

function Latest() {
  return (
    <LatestContainer>
      <LatestTitle>Latest Blogs</LatestTitle>
      <Blog imgHeight="18rem" imgWidth="20rem" imgUrl="https://picsum.photos/500/500" />
      <Blog imgHeight="20rem" imgWidth="30rem" imgUrl="https://picsum.photos/400/400" />
      <Blog imgHeight="18rem" imgWidth="20rem" imgUrl="https://picsum.photos/300/300" />
    </LatestContainer>
  )
}

export default Latest
