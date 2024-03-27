import React,{useRef,useState} from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import JoditEditor from 'jodit-react';
import { updateFooter } from '../../Features/actions/footer';


const UpdateFooterContent = () => {
  const { state: item } = useLocation();
  const { footerData, isDeleted, isLoading } = useSelector((state) => state.footer);
  const {id} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const editor = useRef(null)
  const [content,setContent ]=useState("");

  const {
    register,
    handleSubmit,
    
  } = useForm({
    defaultValues:{
      title: item?.title|| "",
      description:item?.description||"",
    }
    });

    const onSubmit = (data) => {
      const htmlContent = editor.current.value;
  
      const newData = {
        ...data,
        id,
        description: htmlContent.toString() // Add the HTML content to the data
      };
      dispatch(updateFooter(newData));
      console.log(newData)
    };

  return (
    <div>
    <div className="bg-gray-100 h-screen">
    <div className="text-gray-800 flex justify-center">
    <h3 className="text-2xl font-semibold sm:text-3xl">
      Update Footer Content
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
         {/* {errors.productName && (
                <span className="text-red-500">
                  Name of Product is required
                </span>
              )} */}
      </div>
      
      <label className="block font-medium">Content</label>
    <textarea 
    {...register('description', { required: 'Content is required' })}
     class="hidden resize-none w-full mt-2 me-[250px] px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg" placeholder="Leave a comment..."></textarea>
     
      <JoditEditor
      ref={editor}
      value={content}
      onChange={newContent=> setContent(newContent)}
      
    
      />
     
      


<div style={{ marginTop: '4rem' }}>
            <button className="w-full px-4 py-2 text-white bg-blue-700  font-medium hover:bg-slate-950 active:bg-indigo-600 rounded-lg duration-150">
            Update
            </button>
          </div>


    </form>
  </div>
    </div>
</div>
  )
}

export default UpdateFooterContent