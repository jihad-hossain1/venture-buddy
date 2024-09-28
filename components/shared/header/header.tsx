import React from 'react'
import MobileSidebar from './MobileSidebar'

const header = () => {
  return (
    <div>
      <h1 className='lg:block hidden'>Header</h1>
      <MobileSidebar />
    </div>
  )
}

export default header