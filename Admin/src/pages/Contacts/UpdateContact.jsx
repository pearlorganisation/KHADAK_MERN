import React,{useRef, useState} from 'react'
import JoditEditor from 'jodit-react';
import Select from 'react-select'

import { useForm,Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { updateContact } from '../../Features/actions/contact';


const UpdateContact = () => {
  const dispatch =useDispatch();
  const navigate= useNavigate();

  const { state: item } = useLocation();

  const {locationData}=  useSelector((state)=>state.location)
  const [localityOptions, setLocalityOptions] = useState([]);



  const {
    register,
    handleSubmit,control } = useForm({
        defaultValues:{
          title: item?.title|| "",
          profileImage: item?.profileImage|| "",
          phoneNumber: item?.phoneNumber|| "",
  }
        });

  const editor = useRef(null)
  const [content,setContent ]=useState(item?.description || "");

  const [selectedPhoto,setSelectedPhoto]=useState("")
  const [photo, setPhoto] = useState([item?.profileImage]||"");
  const defaultPhoto =
    "https://via.placeholder.com/130?text=No+Image+Selected";

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
        console.log(data)
      const htmlContent = editor.current.value;
      const newData = {
        ...data,
    
        description: htmlContent.toString() 
      };
      console.log(newData)
      
const {city,locality}= newData
      const cityValue = city.value;
      const localityValue = locality.value;
  
      const formData = new FormData()
      formData.append("title",newData?.title)
      formData.append("phoneNumber",newData?.phoneNumber)
      Array.from(newData?.profileImage).forEach((img) => {
        console.log(img)
        formData.append("profileImage",img)
        })
       formData.append("city",cityValue); 
       formData.append("locality",localityValue); 
       formData.append("description",newData?.description); 
    dispatch(updateContact({id:item._id, payload:formData}))

    console.log("formdata",formData.getAll("profileImage"))
          };



  return (
    <div>
        <div className="bg-gray-100">
        <div className=" flex justify-center">
        <h3 className="text-2xl font-semibold sm:text-3xl">
          Update contact details
        </h3>
      </div>

      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
      <form className="space-y-6 mx-8 sm:mx-2 text-slate-600" onSubmit={handleSubmit(onSubmit)} >
        
        <div className="w-full">
            <label className="font-medium">Name</label>
            <input 
            {...register('title')}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
            
          </div>
          <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
          <div className="w-full">
            <p className="font-medium mb-4">Upload Images</p>

            <img class="mt-2 w-20 h:20 sm:w-40 sm:h-40 rounded" src={photo || defaultPhoto} alt="No Image"/>
            <label htmlFor="file_input" className="flex
            " >
             <div className=" mt-4 px-[10px] py-[5px] text-white bg-slate-600 font-semiboldbg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg ">Click here to upload</div></label>
            {/* <label htmlFor='file_input'  className="w-full px-[10px] py-[10px] text-white font-semibold bg-rose-500 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-full ">Click here to upload </label> */}
           
            <input
             {...register('profileImage', {  onChange:(e)=>{handlePhotoChange(e)} })}
          
             className="hidden" id="file_input" type="file"/>
           
          </div>
          <div className="w-full space-y-4">
            <div>
            <label className="font-medium">Whatsapp Number</label>
            <input
            {...register('phoneNumber')}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
           
                  </div>
                  <div>
            <label className="font-medium">City</label>
            <Controller
                                control={control}
                                name="city"
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={locationData.map(item => ({ value: item?.name, label: item?.name }))}

                                        defaultValue={ (locationData.map(item => ({ value: item?.name, label: item?.name }))).
                                    find( (c) => c.value === item?.city)  } // Set default value

                                        onChange={(selectedOption) => {
                                            field.onChange(selectedOption);
                                            const selectedCityData = locationData.find(item => item.name === selectedOption.value);
                                            setLocalityOptions(selectedCityData ? selectedCityData.localities.map(locality => ({ value: locality, label: locality })) : []);
                                        }}
                                        className="mt-2"
                                        placeholder="Choose City"
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                border: '1px solid #CBD5E1',
                                                borderRadius: '0.400rem',
                                                height: '40px',
                                            }),
                                            placeholder: (provided) => ({
                                                ...provided,
                                                color: '#9CA3AF',
                                            }),
                                        }}
                                        
                                    />
                                     )}
                                      rules={{ required: true }}
                                      
                                  />
                              
                  </div>
                  <div>
            <label className="font-medium">Locality</label>
            <Controller
                                control={control}
                                name="locality"
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={localityOptions}
                                        defaultValue={localityOptions.find(option => option.value === item?.locality)}
                                        className="mt-2"
                                        placeholder="Choose Locality"
                                    />
                                )}
                            />
                  </div>
          </div>
          </div>
          <label className="block font-medium">Description</label>
    {/* <textarea 
    // {...register('description')}
    //  rows="5" class="hidden resize-none w-full mt-2 me-[250px] px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg" placeholder="Leave a comment..."></textarea> */}
     
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
                <button className="w-full px-4 py-2 text-white bg-blue-700  font-medium hover:bg-slate-950 active:bg-indigo-600 rounded-lg duration-150" >
                Submit
                </button>
              </div>


        </form>
      </div>
        </div>
    </div>
  )
}

export default UpdateContact