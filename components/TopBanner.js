import React from 'react'

function TopBanner() {
  return (
      <div className='max-w-7xl mx-auto flex justify-between items-center bg-yellow-400 p-5 border-2 border-gray-300 drop-shadow-xl'>
        <div  className='max-w-xl'>
            <h1 className='text-6xl max-w-xl my-4'>What is <span className='underline decoration-red-500'>Medium</span></h1>
            <h2 className='text-4xl whitespace-pre my-4'>You can Read, Connect,  <br/>Write and Learn <br/>New Things</h2>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div  className='max-w-xl items-center hidden md:inline-flex'>
            <p className='text-9xl font-bold'>M</p>
        </div>
      </div>
  )
}

export default TopBanner