import React from 'react'
import Feed from '../../component/feed/feed'
import Rightbar from '../../component/rightbar/rightbar'
import Sidebar from '../../component/sidebar/sidebar'
import Topbar from '../../component/topbar/topbar'

function Home() {
  return (
    <>
      <Topbar />
      <div className='homecontiner d-flex'>
      <Sidebar/>
      <Feed/>
     <Rightbar/>
    </div>
    </>
  )
}

export default Home
