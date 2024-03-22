import React from 'react'
import Select from 'react-select'

const CreateLocation = () => {
  return (
    <div>
        <div className="bg-gray-100 h-screen">
        <div className="text-gray-800 flex justify-center">
        <h3 className="text-2xl font-semibold sm:text-3xl">
          Add location details
        </h3>
      </div>

      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
      <form className="space-y-6 mx-8 sm:mx-2 text-slate-600"  >
       
      
        
          <div className="w-full">
            <label className="font-medium">City</label>
            <Select
                                            //   value={field.value}
                                              options={[  { value: "Delhi", label: "Delhi" },{ value: "Ghaziabad", label: "Ghaziabad" },
                                              ]}
                                              
                                              //   onChange={(selectedOption) => field.onChange(selectedOption)}
                                              className="mt-2 "
                                              placeholder="Choose City "
                                             
                                              styles={{
                                                  control: (provided) => ({
                                                      ...provided,
                                                      border: '1px solid #CBD5E1', // Set custom border style
                                                      borderRadius: '0.400rem', // Set custom border radius
                                                      height: '42px', // Add height here
                                                  }),
                                                  placeholder: (provided) => ({
                                                      ...provided,
                                                      color: '#9CA3AF', // Set custom placeholder color
                                                  }),
                                              }}
 
                                          />
             {/* {errors.productName && (
                    <span className="text-red-500">
                      Name of Product is required
                    </span>
                  )} */}
          </div>
          <div className="w-full">
            <label className="font-medium">Locality</label>
            <input
            // {...register('price', { required: 'Price is required' })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
             {/* {errors.price && (
                    <span className="text-red-500">
                      Price of Product is required
                    </span>
                  )} */}
          </div>
            
    
         
          <div className="w-full">
            <label className="font-medium">Location Slug</label>
            <input
            // {...register('price', { required: 'Price is required' })}
              type="text"
              className="w-full mt-2  px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            />
             {/* {errors.price && (
                    <span className="text-red-500">
                      Price of Product is required
                    </span>
                  )} */}
          </div>
          
    

<div style={{ marginTop: '4rem' }}>
                <button className="w-full px-4 py-2 text-white bg-blue-700  font-medium hover:bg-slate-950 active:bg-indigo-600 rounded-lg duration-150">
                Create
                </button>
              </div>


        </form>
      </div>
        </div>
    </div>
  )
}

export default CreateLocation