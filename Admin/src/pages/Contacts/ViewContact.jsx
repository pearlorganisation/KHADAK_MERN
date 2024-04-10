import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router';
import { Stack,Skeleton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../Features/actions/contact';
import Delete from '../../components/Delete';





const ViewContact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { contactData, isDeleted, isLoading } = useSelector(
      (state) => state.contact
    );

    const [search,setSearch]= useState("")

    const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setShowDeleteModal(false);
    setId('');
  };

  const handleModal = (ID) => {
    setShowDeleteModal(true);
    setId(ID);
  };


    const handleAddContact= () => {
        navigate('/createContact');
      };

      useEffect(() => {
        dispatch(getContacts());
      }, []);
    
      useEffect(()=>{
        if(isDeleted){
       dispatch(getContacts())
        }
       },[isDeleted])
    

  return (
    <>
      <div className="max-w-screen-xl mt-10 mx-auto px-4 md:px-8   ">
        <div className="items-start justify-between md:flex">
          <div >
            <h3 className="px-1 text-gray-800 text-xl font-bold sm:text-2xl">
              Manage Contacts
            </h3>
           
          </div>
          <div className="mt-3 md:mt-0">
            <a
              onClick={handleAddContact}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Add Contact
            </a>
          </div>
        </div>
        <div className='flex mt-10 gap-2'>
            <div><input onChange={(e)=>setSearch(e.target.value)} type='text'  className="px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg" placeholder='Search City'/></div>
            <div className='p-1 px-2 border border-slate-300 bg-indigo-600 rounded-lg text-xl text-white'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg h-screen overflow-x-auto ">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
              <th className="py-3 px-6">S.No</th>
                <th className="py-3 px-6">Profile Photo</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">City</th>
                <th className="py-3 px-6">Locality</th>
                {/* <th className="py-3 px-6">Whatsapp</th> */}
                {/* <th className="py-3 px-6">Description</th> */}
                <th className="py-3 px-3">Actions</th>
               
               
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
            {isLoading ? (
            <tr>
            <td colSpan="8" className="text-center px-6 py-8">
              <Stack spacing={4}>
                <Skeleton variant="rounded" height={30} />
                <Skeleton variant="rounded" height={30} />
                <Skeleton variant="rounded" height={30} />
                <Skeleton variant="rounded" height={25} />
                <Skeleton variant="rounded" height={25}/>
                <Skeleton variant="rounded" height={25}/>
                <Skeleton variant="rounded" height={20}/>
                <Skeleton variant="rounded" height={20}/>
                
              </Stack>
            </td>
          </tr>
          ) : (
            
               Array?.isArray(contactData) && contactData?.filter((item)=>{
                return search === '' 
                ? item :
                 item?.city?.toLowerCase()?.includes(search?.toLowerCase())
               }).map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {idx+1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap min-h-40 min-w-48">
                      <img className='h-40 w-48 rounded-lg' src={item?.profileImage} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {item?.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {item?.locality}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                    {item?.phoneNumber}
                    </td>
                    <td dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }} className="px-6 py-4 whitespace-nowrap">
                   
                    </td> */}
                    
                    <td className="pe-2 whitespace-nowrap">
                    <a
                        onClick={() => {
                          navigate(`/updateContact/${item?._id}`, { state: item  });
                        }}  
                        className="py-2  font-semibold text-indigo-500 hover:text-indigo-600 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => {
                          handleModal(item?._id);
                        }}
                        className="py-2 leading-none px-3 font-semibold text-red-500 hover:text-red-600 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              
              )}
              {/* No results found message */}
{!isLoading && 
  Array.isArray(contactData) && 
  contactData
    .filter((item) => {
      return search === '' 
        ? item 
        : item.city.toLowerCase().includes(search.toLowerCase());
    })
    .length === 0 && (
      <tr>
        <td colSpan="5" className="text-center px-6 py-8">
          No results found.
        </td>
      </tr>
    )
}
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

export default ViewContact