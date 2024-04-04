import React,{useEffect, useRef, useState} from 'react'
import JoditEditor from 'jodit-react';
import { useForm } from 'react-hook-form';
import { createBlog } from '../../Features/actions/blog';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { clearSuccessBlog } from '../../Features/slices/blog';

const CreateBlog = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {isSuccess,isLoading} = useSelector((state)=>state.blog)

  const editor = useRef(null)
  const [content,setContent ]=useState("");
  const [selectedPhoto,setSelectedPhoto]=useState("")
  const [photo, setPhoto] = useState("");
  const defaultPhoto =
    "https://via.placeholder.com/130?text=No+Image+Selected";

    const {
      register,
      handleSubmit, formState: { errors }} = useForm();
  

    const handlePhotoChange = (e) => {
        const selectedPhoto = e.target.files[0];
        setSelectedPhoto(e.target.files)
        if (selectedPhoto) {
          
          const reader = new FileReader();
          reader.readAsDataURL(selectedPhoto);
          reader.onloadend = () => {
            setPhoto(reader.result);
          };
        }
      }; 


      const onSubmit = (data) => {
        const htmlContent = editor.current.value;
        const newData = {
          ...data,
          description: htmlContent.toString() 
        };
        console.log(newData)
        
 
        const formData = new FormData()
        formData.append("title",newData?.title)
        
        Array.from(newData?.profileImage).forEach((img) => {
          console.log(img)
          formData.append("profileImage",img)
          })
         formData.append("description",newData?.description); 
     
         dispatch(createBlog(formData))
      console.log("formdata",formData.getAll("profileImage"))
            };

            useEffect(()=>{
              if(isSuccess){
                navigate("/blog")
                dispatch(clearSuccessBlog())
              }
              },[isSuccess])

  return (
    <div>
        <div className="bg-gray-100">
        <div className=" flex justify-center">
        <h3 className="text-2xl font-semibold sm:text-3xl">
          Create blog details
        </h3>
      </div>

      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
      <form className="space-y-6 mx-8 sm:mx-2 text-slate-600" onSubmit={handleSubmit(onSubmit)} >
        
        <div className="w-full">
            <label className="font-medium">Title</label>
            <input 
            {...register('title', { required: 'Title is required' })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
             {errors?.title && (
                    <span className="text-red-500">
                      Title is required
                    </span>
                  )}
          </div>
        
          <div className="w-full">
            <p className="font-medium mb-4">Upload Images</p>
            <img class="mt-2 w-20 h:20 sm:w-40 sm:h-40 rounded" src={photo || defaultPhoto} alt="No Image"/>
            <label htmlFor="file_input" className="flex
            " >
             <div className=" mt-4 px-[10px] py-[5px] text-black font-semibold bg-slate-600 bg-transparent outline-none border  shadow-sm rounded-lg ">Click here to upload</div></label>
           
            <input
             {...register('profileImage', { required: 'Photo is required',onChange:(e)=>{handlePhotoChange(e)} })}
           
             className="hidden" id="file_input" type="file"/>
             {errors?.profileImage && (
                    <span className="text-red-500">
                      Image is required
                    </span>
                  )}
          </div>
        
          <label className="block font-medium">Content</label>
    {/* <textarea 
    {...register('description', { required: 'Description is required' })}
     rows="5" class="hidden resize-none w-full mt-2 me-[250px] px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg" placeholder="Leave a comment..."></textarea> */}
     
      <JoditEditor
      ref={editor}
      value={content}
      onChange={newContent=> setContent(newContent)}
      // config={{
      //   style: {
      //     height: '300px', // Adjust the height as needed
      //   },
      // }}
    
      />
    

<div style={{ marginTop: '4rem' }}>
                <button 
                type='submit' className="w-full px-4 py-2 text-white bg-blue-700  font-medium hover:bg-slate-950 active:bg-indigo-600 rounded-lg duration-150">
                 {isLoading ? (
                <ClipLoader color="#c4c2c2" />
              ) : (<>Create</>)}
                </button>
              </div>


        </form>
      </div>
        </div>
    </div>
  )
}

export default CreateBlog