import React from 'react'
import Post from '../post/post'
import Share from '../share/share'
import "./feed.scss"

function Feed() {
  return (
    <div className='flex-5_5 feedsection pt-2'>
     <div className="feedcontainer px-2">
    <Share/>
    <Post/>
     </div>
    </div>
  )
}

export default Feed
