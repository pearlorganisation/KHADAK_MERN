import React,{useEffect} from 'react'
import { useForm,Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

import { addLocality, getLocation } from '../../Features/actions/location';
import { ClipLoader } from 'react-spinners';
import { clearAddCityState } from '../../Features/slices/location';


const CreateLocation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {locationData,isSuccess,isLoading}= useSelector((state)=>state.location)

  const {
    register,
    handleSubmit, formState: { errors },control } = useForm();

    const onSubmit = (data) => {
const {city,localityName}= data
const cityValue = city.value; 
const postData = {
  localityName,
  cityName: cityValue,
  
};
     console.log(postData)
      dispatch(addLocality(postData));
    };

    useEffect(() => {
      dispatch(getLocation())
      if (isSuccess) {
        navigate('/location');
        dispatch(clearAddCityState())
      }
    }, [isSuccess, navigate, dispatch]);

 

  return (
    <div>
        <div className="bg-gray-100 h-screen">
        <div className="text-gray-800 flex justify-center">
        <h3 className="text-2xl font-semibold sm:text-3xl">
          Add location details
        </h3>
      </div>

      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
      <form className="space-y-6 mx-8 sm:mx-2 text-slate-600" onSubmit={handleSubmit(onSubmit)}  >
       
      
        
          <div className="w-full">
            <label className="font-medium">City</label>
            <Controller 
                                      control={control}
                                      name="city"
                                      render={({ field }) => (
                                          <Select
                                              value={field.value}
                                              options={Array.isArray(locationData)&& locationData.length> 0 && locationData.map(item=> ({ value: item?.name, label: item?.name }))}
                                              onChange={(selectedOption) => field.onChange(selectedOption)}
                                              className="mt-2 "
                                              placeholder="Choose City "
                                             
                                              styles={{
                                                  control: (provided) => ({
                                                      ...provided,
                                                      border: '1px solid #CBD5E1', // Set custom border style
                                                      borderRadius: '0.400rem', // Set custom border radius
                                                      height: '40px', // Add height here
                                                  }),
                                                  placeholder: (provided) => ({
                                                      ...provided,
                                                      color: '#9CA3AF', // Set custom placeholder color
                                                  }),
                                              }}
 
                                          />
                                     )}
                                      rules={{ required: true }}
                                      
                                  />
                                  {errors?.city && (
                                            <span className="text-red-500">
                                                City is required
                                            </span>
                                        )}
          </div>
          <div className="w-full">
            <label className="font-medium">Locality</label>
            <input
            {...register('localityName', { required: 'Locality is required' })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
             {errors.localityName && (
                    <span className="text-red-500">
                      Locality is required
                    </span>
                  )}
          </div>
          
          
    

<div style={{ marginTop: '4rem' }}>
                <button className="w-full px-4 py-2 text-white bg-blue-700  font-medium hover:bg-slate-950 active:bg-indigo-600 rounded-lg duration-150">
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

export default CreateLocation