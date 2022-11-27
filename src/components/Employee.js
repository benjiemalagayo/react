import React from 'react'
import EditEmployee from './EditEmployee'

const Employee = (props) => {
  return (
    <>
        <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img 
                className="w-[100px] h-[100px] object-cover rounded-full block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
                src={props.image}
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    {props.name}
                </p>
                <p className="text-slate-500 font-medium">
                    {props.role ? props.role : 'No Role'}
                </p>
                </div>
                <EditEmployee />
            </div>
        </div>
    </>
  )
}

export default Employee