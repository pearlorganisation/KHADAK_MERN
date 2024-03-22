import React from 'react'
import { useNavigate } from 'react-router';
import { Stack,Skeleton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




const ViewBlog = () => {
    const navigate = useNavigate();

    const handleAddBlog= () => {
        navigate('/createBlog');
      };
  

  return (
    <>
      <div className="max-w-screen-xl mt-10 mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div >
            <h3 className="px-1 text-gray-800 text-xl font-bold sm:text-2xl">
              Manage Blogs
            </h3>
           
          </div>
        
          
          <div className="mt-3 md:mt-0">
            <a
              onClick={handleAddBlog}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Add Blog
            </a>
          </div>
          </div>
     
        
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
              <th className="py-3 px-6">Id</th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6">Content</th>
                <th className="py-3 px-6">Created On</th>
                <th className="py-3 px-6">Action</th>

                
               
               
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
            {"loading ho rha hai!" ? (
            <tr>
            <td colSpan="6" className="text-center px-6 py-8">
              <Stack spacing={4}>
                <Skeleton variant="rounded" height={30} />
                <Skeleton variant="rounded" height={25}/>
                <Skeleton variant="rounded" height={20}/>
                <Skeleton variant="rounded" height={20}/>
                <Skeleton variant="rounded" height={20}/>
              </Stack>
            </td>
          </tr>
          ) : (
            
            //    Array.isArray(appointmentData) && appointmentData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {/* {item?.name} */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* {item?.email} */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {/* {item?.subject.subject} */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {/* {item?.date} */}
                    </td>
                    
                    <td className="text-right px-6 whitespace-nowrap">
                    <a
                        
                        className="py-2 px-3 font-semibold text-indigo-500 hover:text-indigo-600 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Edit
                      </a>
                      <button
                       
                        className="py-2 leading-none px-3 font-semibold text-red-500 hover:text-red-600 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                // ))
              
              )}
            </tbody>
          </table>
        </div>
      </div>
     </>
  )
}

export default ViewBlog