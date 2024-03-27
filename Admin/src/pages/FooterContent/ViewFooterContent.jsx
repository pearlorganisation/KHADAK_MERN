import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router';
import { Stack,Skeleton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFooter, getFooter } from '../../Features/actions/footer';
import Delete from '../../components/Delete';





const ViewFooterContent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { footerData, isDeleted, isLoading } = useSelector((state) => state.footer);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [id, setId] = useState();
  const handleDelete = () => {
    dispatch(deleteFooter(id));

    setShowDeleteModal(false);
    setId('');
  };

  const handleModal = (ID) => {
    setShowDeleteModal(true);
    setId(ID);
  }; 

    const handleCreateContent= () => {
        navigate('/createFooter');
      };
  
      useEffect(() => {
        dispatch(getFooter());
       }, []);

       const updatedAtDate = footerData[0]?.updatedAt ? new Date(footerData[0]?.updatedAt) : null;
       const formattedDate = updatedAtDate ? updatedAtDate.toISOString().split('T')[0] : '';
       

  return (
    <>
      <div className="max-w-screen-xl mt-10 mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div >
            <h3 className="px-1 text-gray-800 text-xl font-bold sm:text-2xl">
              Manage Footer Content
            </h3>
           
          </div>
        
          
          <div className="mt-3 md:mt-0">
            <a
              onClick={handleCreateContent}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Create Footer Content
            </a>
          </div>
          </div>
     
        
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
              <th className="py-3 px-6">Id</th>
                
                
              <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Description</th>
                <th className="py-3 px-6">Created On</th>
                <th className="py-3 px-6">Actions</th>

                
               
               
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
            {isLoading ? (
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
            
               Array.isArray(footerData) && footerData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {item?._id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {item?.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {item?.createdAt}
                    </td>
                    
                    <td className="pr-6 whitespace-nowrap">
                    <a
                       onClick={() => {
                        navigate(`/updateFooter/${item?._id}`, { state: item  });
                      }}  
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
                ))
              
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showDeleteModal && (
        <Delete setModal={setShowDeleteModal} handleDelete={handleDelete} />
      )}
     </>
  )
}

export default ViewFooterContent