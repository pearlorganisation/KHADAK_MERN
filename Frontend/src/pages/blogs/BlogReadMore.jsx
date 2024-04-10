import React from 'react'
import { useLocation } from 'react-router-dom'

const BlogReadMore = () => {

    const {state:data}= useLocation();
    
console.log(data)
  return (<div className='space-y-2 mb-16'>
    <div className='border rounded-lg border-slate-300 p-3 mt-16 mx-48 bg-gradient-to-r from-pink-600 to-pink-500 space-y-5 text-center' >
        <div className='font-bold text-4xl text-white'>{data?.title}</div>
       
    </div>
    <div className='border rounded-lg border-slate-300 p-6 mx-48 bg-gradient-to-r from-pink-600 to-pink-500 space-y-6 text-center' >
    
                  <img
                    src={data?.profileImage}
                    alt=""
                    className="mx-auto rounded-lg w-[800px] h-[500px]"
                  />
               
    <div dangerouslySetInnerHTML={{
                      __html: data?.description,
                    }}></div>   
    </div>
    </div>
  )
}

export default BlogReadMore