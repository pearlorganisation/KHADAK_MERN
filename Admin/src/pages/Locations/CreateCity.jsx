import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from "react-spinners";
import { addCity } from '../../Features/actions/location';
import { useForm } from 'react-hook-form';
import { clearAddCityState } from '../../Features/slices/location';

const CreateCity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isSuccess,isLoading} = useSelector((state)=>state.location)

  const {
    register,
    handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {

      dispatch(addCity(data));
    };

    useEffect(() => {
      if (isSuccess) {
        navigate('/addLocation');
        dispatch(clearAddCityState())
      }
    }, [isSuccess, navigate, dispatch]);

  return (
    <div>
        <div className="bg-gray-100 h-screen">
        <div className="text-gray-800 flex justify-center">
        <h3 className="text-2xl font-semibold sm:text-3xl">
          Add City
        </h3>
      </div>

      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
      <form className="space-y-6 mx-8 sm:mx-2 text-slate-600"  onSubmit={handleSubmit(onSubmit)}  >
       
      
        
          <div className="w-full">
            <label className="font-medium">City</label>
            <input 
            {...register('cityName', { required: 'City is required' })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
             {errors.cityName && (
                    <span className="text-red-500">
                      City is required
                    </span>
                  )}
          </div>
         
          
    

<div style={{ marginTop: '4rem' }}>
                <button className="w-full px-4 py-2 text-white bg-blue-700  font-medium hover:bg-blue-800 active:bg-indigo-600 rounded-lg duration-150">
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

export default CreateCity