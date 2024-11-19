import React from 'react'

const Info = ({title}) => {
  return (
    <div className="w-full h-96 border-2 bg-gradient-to-tr from-[#901111] to-[#007aff] flex items-center justify-center rounded-xl  my-6">
    <h3 className="text-5xl font-bold text-white text-center">
      {title}
    </h3>
  </div>
  )
}

export default Info
