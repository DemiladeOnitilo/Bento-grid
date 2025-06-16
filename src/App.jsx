import React from 'react'
import createPost from './assets/images/illustration-create-post.webp'
import stars from './assets/images/illustration-five-stars.webp'
import schedule from './assets/images/illustration-schedule-posts.webp'
import aiContent from './assets/images/illustration-ai-content.webp'
import platforms from './assets/images/illustration-multiple-platforms.webp'
import consistentSchedule from './assets/images/illustration-consistent-schedule.webp'
import audience from './assets/images/illustration-audience-growth.webp'
import followers from './assets/images/illustration-grow-followers.webp'

const App = () => {
  return (
    <div className='flex gap-x-7 justify-center items-center m-15 ml-40 mr-40 font-semibold'>
      <div className='grid grid-row-4 gap-7 h-200 w-60'>
        <div className='row-span-2 bright-yellow-bg flex flex-col justify-center items-center gap-y-5 p-8 rounded-lg'>
          <h2 className='text-4xl'>Create and Schedule content <span className='dark-purple-word italic'>quicker.</span></h2>
          <img src={createPost} alt="create post" className='w-50'/>
        </div>
        <div className='row-span-2 dark-yellow-bg flex flex-col gap-y-14 rounded-lg p-4'>
          <h2 className='text-4xl'>Write your content using AI</h2>
          <img src={aiContent} alt="AI content" className='w-57'/>
        </div> 
      </div>
      <div className='grid grid-cols-3 gap-7 h-200 w-200'>
        <div className='col-span-2 row-span-2 dark-purple-bg flex flex-col justify-center items-center rounded-lg p-8'>
          <h1 className='text-5xl text-white mb-6 text-center '>Social Media <span className='dark-yellow-word'>10x</span> <span className='italic'>Faster</span> with AI</h1>
          <img src={stars} alt="five stars" className='w-40'/>
          <p className='white'>Over 4,000 5-star reviews</p>
        </div>
        <div className='row-span-3 bright-purple-bg flex flex-col rounded-lg h-129 overflow-hidden relative'>
          <h2 className='text-3xl p-5 leading-7'>Schedule to social media.</h2>
          <div className='bright-purple-bg w-100 h-90 relative'>
            <img src={schedule} alt="schedule post" className='h-75 w-100 pl-5 absolute'/>
          </div>
          <p className='p-5 text-md'>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div> 
        <div className='white-bg rounded-lg h-60 overflow-hidden'>
          <div className='white-bg w-100 relative'>
            <img src={platforms} alt="multiple Platforms" className=' w-80 pl-5 pt-5 absolute'/>
          </div>
          <h2 className='text-3xl leading-7.5 p-5 mt-18'>Manage multiple accounts and platforms.</h2>
        </div>
        <div className='dark-yellow-bg rounded-lg flex flex-col gap-y-5 h-60 overflow-hidden p-5'>
          <h2 className='text-3xl leading-7.5'>Maintain a consistent posting schedule</h2>
          <img src={consistentSchedule} alt="Consistent Schedule" />
        </div>        
        <div className='white-bg rounded-lg pl-5'>
          <h2 className='text-6xl pt-3 mb-4'>{">"}56%</h2>
          <p className='text-lg mb-5'>faster audience growth</p>
          <img src={audience} alt="Audience Growth" className='w-40 mt-10'/>
        </div>
        <div className='col-span-2 dark-purple-bg text-white flex justify-center items-center rounded-lg p-4'>
          <img src={followers} alt="Grow followers" className='w-60'/>
          <h2 className='text-4xl leading-9'>Grow followers with non-stop content</h2>
        </div>
      </div>
    </div>
  )
}

export default App